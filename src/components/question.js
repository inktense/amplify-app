import { API } from 'aws-amplify';
import React, { useState, useEffect } from 'react';

import { InputComponent } from './input';
import { listQuestions } from '../graphql/queries';
import { createQuestion as createQuestionMutation } from '../graphql/mutations';

const initialFormState = { text: '' }

export const QuestionComponent = () => {
    const [questions, setQuestions] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    async function fetchQuestions() {
        const apiData = await API.graphql({ query: listQuestions });
        setQuestions(apiData.data.listQuestions.items);
    }

    async function createQuestion() {
        if (!formData.text) return;
        await API.graphql({ query: createQuestionMutation, variables: { input: formData } });
        setQuestions([...questions,  formData ]);
        setFormData(initialFormState);
    }

    return (
        <div className="Question">
            <InputComponent setData={(e) => setFormData({ ...formData, 'text': e.target.value})} text="Text" value={formData.text}/>
        </div>
    );

}