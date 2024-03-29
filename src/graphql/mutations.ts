/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

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
export const createUserStats = /* GraphQL */ `mutation CreateUserStats(
  $input: CreateUserStatsInput!
  $condition: ModelUserStatsConditionInput
) {
  createUserStats(input: $input, condition: $condition) {
    id
    name
    bestTime
    bestWPM
    bestAccuracy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserStatsMutationVariables,
  APITypes.CreateUserStatsMutation
>;
export const updateUserStats = /* GraphQL */ `mutation UpdateUserStats(
  $input: UpdateUserStatsInput!
  $condition: ModelUserStatsConditionInput
) {
  updateUserStats(input: $input, condition: $condition) {
    id
    name
    bestTime
    bestWPM
    bestAccuracy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserStatsMutationVariables,
  APITypes.UpdateUserStatsMutation
>;
export const deleteUserStats = /* GraphQL */ `mutation DeleteUserStats(
  $input: DeleteUserStatsInput!
  $condition: ModelUserStatsConditionInput
) {
  deleteUserStats(input: $input, condition: $condition) {
    id
    name
    bestTime
    bestWPM
    bestAccuracy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserStatsMutationVariables,
  APITypes.DeleteUserStatsMutation
>;
