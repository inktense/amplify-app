/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      surveyAnswers {
        items {
          id
          surveyId
          responses
          createdAt
          completedAt
          updatedAt
        }
        nextToken
      }
      isPatient
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      surveyAnswers {
        items {
          id
          surveyId
          responses
          createdAt
          completedAt
          updatedAt
        }
        nextToken
      }
      isPatient
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      surveyAnswers {
        items {
          id
          surveyId
          responses
          createdAt
          completedAt
          updatedAt
        }
        nextToken
      }
      isPatient
      createdAt
      updatedAt
    }
  }
`;
export const createSurvey = /* GraphQL */ `
  mutation CreateSurvey(
    $input: CreateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    createSurvey(input: $input, condition: $condition) {
      id
      name
      description
      duration
      isStarted
      items {
        id
        fieldId
        question {
          id
          text
          createdAt
          updatedAt
        }
        values {
          id
          value
          text
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSurvey = /* GraphQL */ `
  mutation UpdateSurvey(
    $input: UpdateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    updateSurvey(input: $input, condition: $condition) {
      id
      name
      description
      duration
      isStarted
      items {
        id
        fieldId
        question {
          id
          text
          createdAt
          updatedAt
        }
        values {
          id
          value
          text
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSurvey = /* GraphQL */ `
  mutation DeleteSurvey(
    $input: DeleteSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    deleteSurvey(input: $input, condition: $condition) {
      id
      name
      description
      duration
      isStarted
      items {
        id
        fieldId
        question {
          id
          text
          createdAt
          updatedAt
        }
        values {
          id
          value
          text
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      fieldId
      question {
        id
        text
        createdAt
        updatedAt
      }
      values {
        id
        value
        text
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      fieldId
      question {
        id
        text
        createdAt
        updatedAt
      }
      values {
        id
        value
        text
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      fieldId
      question {
        id
        text
        createdAt
        updatedAt
      }
      values {
        id
        value
        text
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const createValue = /* GraphQL */ `
  mutation CreateValue(
    $input: CreateValueInput!
    $condition: ModelValueConditionInput
  ) {
    createValue(input: $input, condition: $condition) {
      id
      value
      text
      createdAt
      updatedAt
    }
  }
`;
export const updateValue = /* GraphQL */ `
  mutation UpdateValue(
    $input: UpdateValueInput!
    $condition: ModelValueConditionInput
  ) {
    updateValue(input: $input, condition: $condition) {
      id
      value
      text
      createdAt
      updatedAt
    }
  }
`;
export const deleteValue = /* GraphQL */ `
  mutation DeleteValue(
    $input: DeleteValueInput!
    $condition: ModelValueConditionInput
  ) {
    deleteValue(input: $input, condition: $condition) {
      id
      value
      text
      createdAt
      updatedAt
    }
  }
`;
export const createSurveyAnswer = /* GraphQL */ `
  mutation CreateSurveyAnswer(
    $input: CreateSurveyAnswerInput!
    $condition: ModelSurveyAnswerConditionInput
  ) {
    createSurveyAnswer(input: $input, condition: $condition) {
      id
      surveyId
      responses
      createdAt
      completedAt
      updatedAt
    }
  }
`;
export const updateSurveyAnswer = /* GraphQL */ `
  mutation UpdateSurveyAnswer(
    $input: UpdateSurveyAnswerInput!
    $condition: ModelSurveyAnswerConditionInput
  ) {
    updateSurveyAnswer(input: $input, condition: $condition) {
      id
      surveyId
      responses
      createdAt
      completedAt
      updatedAt
    }
  }
`;
export const deleteSurveyAnswer = /* GraphQL */ `
  mutation DeleteSurveyAnswer(
    $input: DeleteSurveyAnswerInput!
    $condition: ModelSurveyAnswerConditionInput
  ) {
    deleteSurveyAnswer(input: $input, condition: $condition) {
      id
      surveyId
      responses
      createdAt
      completedAt
      updatedAt
    }
  }
`;
