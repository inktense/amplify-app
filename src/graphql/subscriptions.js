/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateSurvey = /* GraphQL */ `
  subscription OnCreateSurvey {
    onCreateSurvey {
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
export const onUpdateSurvey = /* GraphQL */ `
  subscription OnUpdateSurvey {
    onUpdateSurvey {
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
export const onDeleteSurvey = /* GraphQL */ `
  subscription OnDeleteSurvey {
    onDeleteSurvey {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const onCreateValue = /* GraphQL */ `
  subscription OnCreateValue {
    onCreateValue {
      id
      value
      text
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateValue = /* GraphQL */ `
  subscription OnUpdateValue {
    onUpdateValue {
      id
      value
      text
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteValue = /* GraphQL */ `
  subscription OnDeleteValue {
    onDeleteValue {
      id
      value
      text
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSurveyAnswer = /* GraphQL */ `
  subscription OnCreateSurveyAnswer {
    onCreateSurveyAnswer {
      id
      surveyId
      responses
      createdAt
      completedAt
      updatedAt
    }
  }
`;
export const onUpdateSurveyAnswer = /* GraphQL */ `
  subscription OnUpdateSurveyAnswer {
    onUpdateSurveyAnswer {
      id
      surveyId
      responses
      createdAt
      completedAt
      updatedAt
    }
  }
`;
export const onDeleteSurveyAnswer = /* GraphQL */ `
  subscription OnDeleteSurveyAnswer {
    onDeleteSurveyAnswer {
      id
      surveyId
      responses
      createdAt
      completedAt
      updatedAt
    }
  }
`;
