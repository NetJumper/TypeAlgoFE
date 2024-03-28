/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createLogin = /* GraphQL */ `mutation CreateLogin(
  $input: CreateLoginInput!
  $condition: ModelLoginConditionInput
) {
  createLogin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLoginMutationVariables,
  APITypes.CreateLoginMutation
>;
export const updateLogin = /* GraphQL */ `mutation UpdateLogin(
  $input: UpdateLoginInput!
  $condition: ModelLoginConditionInput
) {
  updateLogin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLoginMutationVariables,
  APITypes.UpdateLoginMutation
>;
export const deleteLogin = /* GraphQL */ `mutation DeleteLogin(
  $input: DeleteLoginInput!
  $condition: ModelLoginConditionInput
) {
  deleteLogin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLoginMutationVariables,
  APITypes.DeleteLoginMutation
>;
export const createSignUp = /* GraphQL */ `mutation CreateSignUp(
  $input: CreateSignUpInput!
  $condition: ModelSignUpConditionInput
) {
  createSignUp(input: $input, condition: $condition) {
    id
    email
    password
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSignUpMutationVariables,
  APITypes.CreateSignUpMutation
>;
export const updateSignUp = /* GraphQL */ `mutation UpdateSignUp(
  $input: UpdateSignUpInput!
  $condition: ModelSignUpConditionInput
) {
  updateSignUp(input: $input, condition: $condition) {
    id
    email
    password
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSignUpMutationVariables,
  APITypes.UpdateSignUpMutation
>;
export const deleteSignUp = /* GraphQL */ `mutation DeleteSignUp(
  $input: DeleteSignUpInput!
  $condition: ModelSignUpConditionInput
) {
  deleteSignUp(input: $input, condition: $condition) {
    id
    email
    password
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSignUpMutationVariables,
  APITypes.DeleteSignUpMutation
>;
