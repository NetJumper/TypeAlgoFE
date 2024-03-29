/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getLogin = /* GraphQL */ `query GetLogin($id: ID!) {
  getLogin(id: $id) {
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
` as GeneratedQuery<APITypes.GetLoginQueryVariables, APITypes.GetLoginQuery>;
export const listLogins = /* GraphQL */ `query ListLogins(
  $filter: ModelLoginFilterInput
  $limit: Int
  $nextToken: String
) {
  listLogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      password
      createdAt
      updatedAt
      loginSignUpId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLoginsQueryVariables,
  APITypes.ListLoginsQuery
>;
export const getSignUp = /* GraphQL */ `query GetSignUp($id: ID!) {
  getSignUp(id: $id) {
    id
    email
    password
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSignUpQueryVariables, APITypes.GetSignUpQuery>;
export const listSignUps = /* GraphQL */ `query ListSignUps(
  $filter: ModelSignUpFilterInput
  $limit: Int
  $nextToken: String
) {
  listSignUps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      password
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSignUpsQueryVariables,
  APITypes.ListSignUpsQuery
>;
export const getUserStats = /* GraphQL */ `query GetUserStats($id: ID!) {
  getUserStats(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserStatsQueryVariables,
  APITypes.GetUserStatsQuery
>;
export const listUserStats = /* GraphQL */ `query ListUserStats(
  $filter: ModelUserStatsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      bestTime
      bestWPM
      bestAccuracy
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserStatsQueryVariables,
  APITypes.ListUserStatsQuery
>;
