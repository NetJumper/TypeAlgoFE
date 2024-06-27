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
` as GeneratedMutation<
  APITypes.DeleteSignUpMutationVariables,
  APITypes.DeleteSignUpMutation
>;
export const createAttempt = /* GraphQL */ `mutation CreateAttempt(
  $input: CreateAttemptInput!
  $condition: ModelAttemptConditionInput
) {
  createAttempt(input: $input, condition: $condition) {
    id
    userId
    wpm
    accuracy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAttemptMutationVariables,
  APITypes.CreateAttemptMutation
>;
export const updateAttempt = /* GraphQL */ `mutation UpdateAttempt(
  $input: UpdateAttemptInput!
  $condition: ModelAttemptConditionInput
) {
  updateAttempt(input: $input, condition: $condition) {
    id
    userId
    wpm
    accuracy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAttemptMutationVariables,
  APITypes.UpdateAttemptMutation
>;
export const deleteAttempt = /* GraphQL */ `mutation DeleteAttempt(
  $input: DeleteAttemptInput!
  $condition: ModelAttemptConditionInput
) {
  deleteAttempt(input: $input, condition: $condition) {
    id
    userId
    wpm
    accuracy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAttemptMutationVariables,
  APITypes.DeleteAttemptMutation
>;
export const createLeaderboard = /* GraphQL */ `mutation CreateLeaderboard(
  $input: CreateLeaderboardInput!
  $condition: ModelLeaderboardConditionInput
) {
  createLeaderboard(input: $input, condition: $condition) {
    id
    userId
    maxWpm
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLeaderboardMutationVariables,
  APITypes.CreateLeaderboardMutation
>;
export const updateLeaderboard = /* GraphQL */ `mutation UpdateLeaderboard(
  $input: UpdateLeaderboardInput!
  $condition: ModelLeaderboardConditionInput
) {
  updateLeaderboard(input: $input, condition: $condition) {
    id
    userId
    maxWpm
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLeaderboardMutationVariables,
  APITypes.UpdateLeaderboardMutation
>;
export const deleteLeaderboard = /* GraphQL */ `mutation DeleteLeaderboard(
  $input: DeleteLeaderboardInput!
  $condition: ModelLeaderboardConditionInput
) {
  deleteLeaderboard(input: $input, condition: $condition) {
    id
    userId
    maxWpm
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLeaderboardMutationVariables,
  APITypes.DeleteLeaderboardMutation
>;
export const createUserStats = /* GraphQL */ `mutation CreateUserStats(
  $input: CreateUserStatsInput!
  $condition: ModelUserStatsConditionInput
) {
  createUserStats(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserStatsMutationVariables,
  APITypes.DeleteUserStatsMutation
>;
export const createNote = /* GraphQL */ `mutation CreateNote(
  $input: CreateNoteInput!
  $condition: ModelNoteConditionInput
) {
  createNote(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNoteMutationVariables,
  APITypes.CreateNoteMutation
>;
export const updateNote = /* GraphQL */ `mutation UpdateNote(
  $input: UpdateNoteInput!
  $condition: ModelNoteConditionInput
) {
  updateNote(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNoteMutationVariables,
  APITypes.UpdateNoteMutation
>;
export const deleteNote = /* GraphQL */ `mutation DeleteNote(
  $input: DeleteNoteInput!
  $condition: ModelNoteConditionInput
) {
  deleteNote(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNoteMutationVariables,
  APITypes.DeleteNoteMutation
>;
