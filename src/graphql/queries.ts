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
    signUp {
      id
      email
      password
      name
      createdAt
      updatedAt
      signUpUserStatsId
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
    userStats {
      id
      signUpId
      name
      bestTime
      bestWPM
      bestAccuracy
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    signUpUserStatsId
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
      signUpUserStatsId
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
export const getAttempt = /* GraphQL */ `query GetAttempt($id: ID!) {
  getAttempt(id: $id) {
    id
    userId
    wpm
    accuracy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAttemptQueryVariables,
  APITypes.GetAttemptQuery
>;
export const listAttempts = /* GraphQL */ `query ListAttempts(
  $filter: ModelAttemptFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttempts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      wpm
      accuracy
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAttemptsQueryVariables,
  APITypes.ListAttemptsQuery
>;
export const getLeaderboard = /* GraphQL */ `query GetLeaderboard($id: ID!) {
  getLeaderboard(id: $id) {
    id
    userId
    bestTime
    dataStructure
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLeaderboardQueryVariables,
  APITypes.GetLeaderboardQuery
>;
export const listLeaderboards = /* GraphQL */ `query ListLeaderboards(
  $filter: ModelLeaderboardFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeaderboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      bestTime
      dataStructure
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLeaderboardsQueryVariables,
  APITypes.ListLeaderboardsQuery
>;
export const getUserStats = /* GraphQL */ `query GetUserStats($id: ID!) {
  getUserStats(id: $id) {
    id
    signUpId
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
      signUpId
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
