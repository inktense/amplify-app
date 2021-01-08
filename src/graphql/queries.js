/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        surveyAnswers {
          nextToken
        }
        isPatient
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSurvey = /* GraphQL */ `
  query GetSurvey($id: ID!) {
    getSurvey(id: $id) {
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
export const listSurveys = /* GraphQL */ `
  query ListSurveys(
    $filter: ModelSurveyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        duration
        isStarted
        items {
          id
          fieldId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getValue = /* GraphQL */ `
  query GetValue($id: ID!) {
    getValue(id: $id) {
      id
      value
      text
      createdAt
      updatedAt
    }
  }
`;
export const listValues = /* GraphQL */ `
  query ListValues(
    $filter: ModelValueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listValues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSurveyAnswer = /* GraphQL */ `
  query GetSurveyAnswer($id: ID!) {
    getSurveyAnswer(id: $id) {
      id
      surveyId
      responses
      createdAt
      completedAt
      updatedAt
    }
  }
`;
export const listSurveyAnswers = /* GraphQL */ `
  query ListSurveyAnswers(
    $filter: ModelSurveyAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveyAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
