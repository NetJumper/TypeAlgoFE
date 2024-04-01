/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

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
      signUpUserStatsId
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
      signUpUserStatsId
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
      signUpUserStatsId
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
` as GeneratedSubscription<
  APITypes.OnDeleteSignUpSubscriptionVariables,
  APITypes.OnDeleteSignUpSubscription
>;
export const onCreateUserStats = /* GraphQL */ `subscription OnCreateUserStats($filter: ModelSubscriptionUserStatsFilterInput) {
  onCreateUserStats(filter: $filter) {
    id
    signUpId
    name
    bestTime
    bestWPM
    bestAccuracy
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserStatsSubscriptionVariables,
  APITypes.OnCreateUserStatsSubscription
>;
export const onUpdateUserStats = /* GraphQL */ `subscription OnUpdateUserStats($filter: ModelSubscriptionUserStatsFilterInput) {
  onUpdateUserStats(filter: $filter) {
    id
    signUpId
    name
    bestTime
    bestWPM
    bestAccuracy
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserStatsSubscriptionVariables,
  APITypes.OnUpdateUserStatsSubscription
>;
export const onDeleteUserStats = /* GraphQL */ `subscription OnDeleteUserStats($filter: ModelSubscriptionUserStatsFilterInput) {
  onDeleteUserStats(filter: $filter) {
    id
    signUpId
    name
    bestTime
    bestWPM
    bestAccuracy
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserStatsSubscriptionVariables,
  APITypes.OnDeleteUserStatsSubscription
>;
