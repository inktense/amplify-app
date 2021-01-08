import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listValues } from './graphql/queries';
import { createValue as createValueMutation } from './graphql/mutations';
import { HeaderComponent } from './components/header';
import { InputComponent } from './components/input';
import { QuestionComponent } from './components/question';

const initialFormState = { text: '', value: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchValues();
  }, []);

  async function fetchValues() {
    const apiData = await API.graphql({ query: listValues });
    setNotes(apiData.data.listValues.items);
  }

  async function createValue() {
    if (!formData.text || !formData.value) return;
    await API.graphql({ query: createValueMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  // async function deleteNote({ id }) {
  //   const newNotesArray = notes.filter(note => note.id !== id);
  //   setNotes(newNotesArray);
  //   await API.graphql({ query: deleteTodoMutation, variables: { input: { id } }});
  // }

  // const renderContent = (values) => {
  // return values.map((value) => <p>{value}</p>)
  // }

  return (
    <div className="App">
      <HeaderComponent text="My header 2"/>
      <HeaderComponent text="My header 3"/>

      <InputComponent setData={(e) => setFormData({ ...formData, 'text': e.target.value})} text="Text" value={formData.text}/>
      {/* <input
        onChange={e => setFormData({ ...formData, 'text': e.target.value})}
        placeholder="Text"
        value={formData.text}
      /> */}
      <input
        onChange={e => setFormData({ ...formData, 'value': e.target.value})}
        placeholder="Value"
        value={formData.value}
      />
      <button onClick={createValue}>Create answer value</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.text}>
              <h2>{note.text}</h2>
              <p>{note.value}</p>
              <button> </button>
              {/* <button onClick={() => deleteNote(note)}>Delete note</button> */}
            </div>
          ))
        }
      </div>


      <QuestionComponent />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);