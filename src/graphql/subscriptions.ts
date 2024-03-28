/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateLogin = /* GraphQL */ `subscription OnCreateLogin($filter: ModelSubscriptionLoginFilterInput) {
  onCreateLogin(filter: $filter) {
    id
    email
    password
    SignUp {
      id
      email
      password
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    loginSignUpId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLoginSubscriptionVariables,
  APITypes.OnCreateLoginSubscription
>;
export const onUpdateLogin = /* GraphQL */ `subscription OnUpdateLogin($filter: ModelSubscriptionLoginFilterInput) {
  onUpdateLogin(filter: $filter) {
    id
    email
    password
    SignUp {
      id
      email
      password
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    loginSignUpId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLoginSubscriptionVariables,
  APITypes.OnUpdateLoginSubscription
>;
export const onDeleteLogin = /* GraphQL */ `subscription OnDeleteLogin($filter: ModelSubscriptionLoginFilterInput) {
  onDeleteLogin(filter: $filter) {
    id
    email
    password
    SignUp {
      id
      email
      password
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    loginSignUpId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLoginSubscriptionVariables,
  APITypes.OnDeleteLoginSubscription
>;
export const onCreateSignUp = /* GraphQL */ `subscription OnCreateSignUp($filter: ModelSubscriptionSignUpFilterInput) {
  onCreateSignUp(filter: $filter) {
    id
    email
    password
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSignUpSubscriptionVariables,
  APITypes.OnCreateSignUpSubscription
>;
export const onUpdateSignUp = /* GraphQL */ `subscription OnUpdateSignUp($filter: ModelSubscriptionSignUpFilterInput) {
  onUpdateSignUp(filter: $filter) {
    id
    email
    password
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSignUpSubscriptionVariables,
  APITypes.OnUpdateSignUpSubscription
>;
export const onDeleteSignUp = /* GraphQL */ `subscription OnDeleteSignUp($filter: ModelSubscriptionSignUpFilterInput) {
  onDeleteSignUp(filter: $filter) {
    id
    email
    password
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSignUpSubscriptionVariables,
  APITypes.OnDeleteSignUpSubscription
>;
