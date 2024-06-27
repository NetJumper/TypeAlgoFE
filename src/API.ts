/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLoginInput = {
  id?: string | null,
  email?: string | null,
  password?: string | null,
  loginSignUpId?: string | null,
};

export type ModelLoginConditionInput = {
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelLoginConditionInput | null > | null,
  or?: Array< ModelLoginConditionInput | null > | null,
  not?: ModelLoginConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  loginSignUpId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Login = {
  __typename: "Login",
  id: string,
  email?: string | null,
  password?: string | null,
  signUp?: SignUp | null,
  createdAt: string,
  updatedAt: string,
  loginSignUpId?: string | null,
};

export type SignUp = {
  __typename: "SignUp",
  id: string,
  email?: string | null,
  password?: string | null,
  name?: string | null,
  userStats?: UserStats | null,
  createdAt: string,
  updatedAt: string,
  signUpUserStatsId?: string | null,
};

export type UserStats = {
  __typename: "UserStats",
  id: string,
  signUpId: string,
  name: string,
  bestTime: number,
  bestWPM: number,
  bestAccuracy: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLoginInput = {
  id: string,
  email?: string | null,
  password?: string | null,
  loginSignUpId?: string | null,
};

export type DeleteLoginInput = {
  id: string,
};

export type CreateSignUpInput = {
  id?: string | null,
  email?: string | null,
  password?: string | null,
  name?: string | null,
  signUpUserStatsId?: string | null,
};

export type ModelSignUpConditionInput = {
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSignUpConditionInput | null > | null,
  or?: Array< ModelSignUpConditionInput | null > | null,
  not?: ModelSignUpConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  signUpUserStatsId?: ModelIDInput | null,
};

export type UpdateSignUpInput = {
  id: string,
  email?: string | null,
  password?: string | null,
  name?: string | null,
  signUpUserStatsId?: string | null,
};

export type DeleteSignUpInput = {
  id: string,
};

export type CreateAttemptInput = {
  id?: string | null,
  userId: string,
  wpm: number,
  accuracy: number,
  createdAt?: string | null,
};

export type ModelAttemptConditionInput = {
  userId?: ModelIDInput | null,
  wpm?: ModelIntInput | null,
  accuracy?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAttemptConditionInput | null > | null,
  or?: Array< ModelAttemptConditionInput | null > | null,
  not?: ModelAttemptConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Attempt = {
  __typename: "Attempt",
  id: string,
  userId: string,
  wpm: number,
  accuracy: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAttemptInput = {
  id: string,
  userId?: string | null,
  wpm?: number | null,
  accuracy?: number | null,
  createdAt?: string | null,
};

export type DeleteAttemptInput = {
  id: string,
};

export type CreateLeaderboardInput = {
  id?: string | null,
  userId: string,
  maxWpm: number,
};

export type ModelLeaderboardConditionInput = {
  userId?: ModelIDInput | null,
  maxWpm?: ModelIntInput | null,
  and?: Array< ModelLeaderboardConditionInput | null > | null,
  or?: Array< ModelLeaderboardConditionInput | null > | null,
  not?: ModelLeaderboardConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Leaderboard = {
  __typename: "Leaderboard",
  id: string,
  userId: string,
  maxWpm: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLeaderboardInput = {
  id: string,
  userId?: string | null,
  maxWpm?: number | null,
};

export type DeleteLeaderboardInput = {
  id: string,
};

export type CreateUserStatsInput = {
  id?: string | null,
  signUpId: string,
  name: string,
  bestTime: number,
  bestWPM: number,
  bestAccuracy: number,
};

export type ModelUserStatsConditionInput = {
  signUpId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  bestTime?: ModelFloatInput | null,
  bestWPM?: ModelIntInput | null,
  bestAccuracy?: ModelFloatInput | null,
  and?: Array< ModelUserStatsConditionInput | null > | null,
  or?: Array< ModelUserStatsConditionInput | null > | null,
  not?: ModelUserStatsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserStatsInput = {
  id: string,
  signUpId?: string | null,
  name?: string | null,
  bestTime?: number | null,
  bestWPM?: number | null,
  bestAccuracy?: number | null,
};

export type DeleteUserStatsInput = {
  id: string,
};

export type CreateNoteInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelNoteConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNoteInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type ModelLoginFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLoginFilterInput | null > | null,
  or?: Array< ModelLoginFilterInput | null > | null,
  not?: ModelLoginFilterInput | null,
  loginSignUpId?: ModelIDInput | null,
};

export type ModelLoginConnection = {
  __typename: "ModelLoginConnection",
  items:  Array<Login | null >,
  nextToken?: string | null,
};

export type ModelSignUpFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSignUpFilterInput | null > | null,
  or?: Array< ModelSignUpFilterInput | null > | null,
  not?: ModelSignUpFilterInput | null,
  signUpUserStatsId?: ModelIDInput | null,
};

export type ModelSignUpConnection = {
  __typename: "ModelSignUpConnection",
  items:  Array<SignUp | null >,
  nextToken?: string | null,
};

export type ModelAttemptFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  wpm?: ModelIntInput | null,
  accuracy?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAttemptFilterInput | null > | null,
  or?: Array< ModelAttemptFilterInput | null > | null,
  not?: ModelAttemptFilterInput | null,
};

export type ModelAttemptConnection = {
  __typename: "ModelAttemptConnection",
  items:  Array<Attempt | null >,
  nextToken?: string | null,
};

export type ModelLeaderboardFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  maxWpm?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLeaderboardFilterInput | null > | null,
  or?: Array< ModelLeaderboardFilterInput | null > | null,
  not?: ModelLeaderboardFilterInput | null,
};

export type ModelLeaderboardConnection = {
  __typename: "ModelLeaderboardConnection",
  items:  Array<Leaderboard | null >,
  nextToken?: string | null,
};

export type ModelUserStatsFilterInput = {
  id?: ModelIDInput | null,
  signUpId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  bestTime?: ModelFloatInput | null,
  bestWPM?: ModelIntInput | null,
  bestAccuracy?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserStatsFilterInput | null > | null,
  or?: Array< ModelUserStatsFilterInput | null > | null,
  not?: ModelUserStatsFilterInput | null,
};

export type ModelUserStatsConnection = {
  __typename: "ModelUserStatsConnection",
  items:  Array<UserStats | null >,
  nextToken?: string | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionLoginFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLoginFilterInput | null > | null,
  or?: Array< ModelSubscriptionLoginFilterInput | null > | null,
  loginSignUpId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSignUpFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSignUpFilterInput | null > | null,
  or?: Array< ModelSubscriptionSignUpFilterInput | null > | null,
  signUpUserStatsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionAttemptFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  wpm?: ModelSubscriptionIntInput | null,
  accuracy?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAttemptFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttemptFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionLeaderboardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  maxWpm?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLeaderboardFilterInput | null > | null,
  or?: Array< ModelSubscriptionLeaderboardFilterInput | null > | null,
};

export type ModelSubscriptionUserStatsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  signUpId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  bestTime?: ModelSubscriptionFloatInput | null,
  bestWPM?: ModelSubscriptionIntInput | null,
  bestAccuracy?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserStatsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserStatsFilterInput | null > | null,
};

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type CreateLoginMutationVariables = {
  input: CreateLoginInput,
  condition?: ModelLoginConditionInput | null,
};

export type CreateLoginMutation = {
  createLogin?:  {
    __typename: "Login",
    id: string,
    email?: string | null,
    password?: string | null,
    signUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      signUpUserStatsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    loginSignUpId?: string | null,
  } | null,
};

export type UpdateLoginMutationVariables = {
  input: UpdateLoginInput,
  condition?: ModelLoginConditionInput | null,
};

export type UpdateLoginMutation = {
  updateLogin?:  {
    __typename: "Login",
    id: string,
    email?: string | null,
    password?: string | null,
    signUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      signUpUserStatsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    loginSignUpId?: string | null,
  } | null,
};

export type DeleteLoginMutationVariables = {
  input: DeleteLoginInput,
  condition?: ModelLoginConditionInput | null,
};

export type DeleteLoginMutation = {
  deleteLogin?:  {
    __typename: "Login",
    id: string,
    email?: string | null,
    password?: string | null,
    signUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      signUpUserStatsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    loginSignUpId?: string | null,
  } | null,
};

export type CreateSignUpMutationVariables = {
  input: CreateSignUpInput,
  condition?: ModelSignUpConditionInput | null,
};

export type CreateSignUpMutation = {
  createSignUp?:  {
    __typename: "SignUp",
    id: string,
    email?: string | null,
    password?: string | null,
    name?: string | null,
    userStats?:  {
      __typename: "UserStats",
      id: string,
      signUpId: string,
      name: string,
      bestTime: number,
      bestWPM: number,
      bestAccuracy: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    signUpUserStatsId?: string | null,
  } | null,
};

export type UpdateSignUpMutationVariables = {
  input: UpdateSignUpInput,
  condition?: ModelSignUpConditionInput | null,
};

export type UpdateSignUpMutation = {
  updateSignUp?:  {
    __typename: "SignUp",
    id: string,
    email?: string | null,
    password?: string | null,
    name?: string | null,
    userStats?:  {
      __typename: "UserStats",
      id: string,
      signUpId: string,
      name: string,
      bestTime: number,
      bestWPM: number,
      bestAccuracy: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    signUpUserStatsId?: string | null,
  } | null,
};

export type DeleteSignUpMutationVariables = {
  input: DeleteSignUpInput,
  condition?: ModelSignUpConditionInput | null,
};

export type DeleteSignUpMutation = {
  deleteSignUp?:  {
    __typename: "SignUp",
    id: string,
    email?: string | null,
    password?: string | null,
    name?: string | null,
    userStats?:  {
      __typename: "UserStats",
      id: string,
      signUpId: string,
      name: string,
      bestTime: number,
      bestWPM: number,
      bestAccuracy: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    signUpUserStatsId?: string | null,
  } | null,
};

export type CreateAttemptMutationVariables = {
  input: CreateAttemptInput,
  condition?: ModelAttemptConditionInput | null,
};

export type CreateAttemptMutation = {
  createAttempt?:  {
    __typename: "Attempt",
    id: string,
    userId: string,
    wpm: number,
    accuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAttemptMutationVariables = {
  input: UpdateAttemptInput,
  condition?: ModelAttemptConditionInput | null,
};

export type UpdateAttemptMutation = {
  updateAttempt?:  {
    __typename: "Attempt",
    id: string,
    userId: string,
    wpm: number,
    accuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAttemptMutationVariables = {
  input: DeleteAttemptInput,
  condition?: ModelAttemptConditionInput | null,
};

export type DeleteAttemptMutation = {
  deleteAttempt?:  {
    __typename: "Attempt",
    id: string,
    userId: string,
    wpm: number,
    accuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLeaderboardMutationVariables = {
  input: CreateLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type CreateLeaderboardMutation = {
  createLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    userId: string,
    maxWpm: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLeaderboardMutationVariables = {
  input: UpdateLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type UpdateLeaderboardMutation = {
  updateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    userId: string,
    maxWpm: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLeaderboardMutationVariables = {
  input: DeleteLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type DeleteLeaderboardMutation = {
  deleteLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    userId: string,
    maxWpm: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserStatsMutationVariables = {
  input: CreateUserStatsInput,
  condition?: ModelUserStatsConditionInput | null,
};

export type CreateUserStatsMutation = {
  createUserStats?:  {
    __typename: "UserStats",
    id: string,
    signUpId: string,
    name: string,
    bestTime: number,
    bestWPM: number,
    bestAccuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserStatsMutationVariables = {
  input: UpdateUserStatsInput,
  condition?: ModelUserStatsConditionInput | null,
};

export type UpdateUserStatsMutation = {
  updateUserStats?:  {
    __typename: "UserStats",
    id: string,
    signUpId: string,
    name: string,
    bestTime: number,
    bestWPM: number,
    bestAccuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserStatsMutationVariables = {
  input: DeleteUserStatsInput,
  condition?: ModelUserStatsConditionInput | null,
};

export type DeleteUserStatsMutation = {
  deleteUserStats?:  {
    __typename: "UserStats",
    id: string,
    signUpId: string,
    name: string,
    bestTime: number,
    bestWPM: number,
    bestAccuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLoginQueryVariables = {
  id: string,
};

export type GetLoginQuery = {
  getLogin?:  {
    __typename: "Login",
    id: string,
    email?: string | null,
    password?: string | null,
    signUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      signUpUserStatsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    loginSignUpId?: string | null,
  } | null,
};

export type ListLoginsQueryVariables = {
  filter?: ModelLoginFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLoginsQuery = {
  listLogins?:  {
    __typename: "ModelLoginConnection",
    items:  Array< {
      __typename: "Login",
      id: string,
      email?: string | null,
      password?: string | null,
      createdAt: string,
      updatedAt: string,
      loginSignUpId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSignUpQueryVariables = {
  id: string,
};

export type GetSignUpQuery = {
  getSignUp?:  {
    __typename: "SignUp",
    id: string,
    email?: string | null,
    password?: string | null,
    name?: string | null,
    userStats?:  {
      __typename: "UserStats",
      id: string,
      signUpId: string,
      name: string,
      bestTime: number,
      bestWPM: number,
      bestAccuracy: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    signUpUserStatsId?: string | null,
  } | null,
};

export type ListSignUpsQueryVariables = {
  filter?: ModelSignUpFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSignUpsQuery = {
  listSignUps?:  {
    __typename: "ModelSignUpConnection",
    items:  Array< {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      signUpUserStatsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAttemptQueryVariables = {
  id: string,
};

export type GetAttemptQuery = {
  getAttempt?:  {
    __typename: "Attempt",
    id: string,
    userId: string,
    wpm: number,
    accuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAttemptsQueryVariables = {
  filter?: ModelAttemptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttemptsQuery = {
  listAttempts?:  {
    __typename: "ModelAttemptConnection",
    items:  Array< {
      __typename: "Attempt",
      id: string,
      userId: string,
      wpm: number,
      accuracy: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLeaderboardQueryVariables = {
  id: string,
};

export type GetLeaderboardQuery = {
  getLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    userId: string,
    maxWpm: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLeaderboardsQueryVariables = {
  filter?: ModelLeaderboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLeaderboardsQuery = {
  listLeaderboards?:  {
    __typename: "ModelLeaderboardConnection",
    items:  Array< {
      __typename: "Leaderboard",
      id: string,
      userId: string,
      maxWpm: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserStatsQueryVariables = {
  id: string,
};

export type GetUserStatsQuery = {
  getUserStats?:  {
    __typename: "UserStats",
    id: string,
    signUpId: string,
    name: string,
    bestTime: number,
    bestWPM: number,
    bestAccuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserStatsQueryVariables = {
  filter?: ModelUserStatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserStatsQuery = {
  listUserStats?:  {
    __typename: "ModelUserStatsConnection",
    items:  Array< {
      __typename: "UserStats",
      id: string,
      signUpId: string,
      name: string,
      bestTime: number,
      bestWPM: number,
      bestAccuracy: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLoginSubscriptionVariables = {
  filter?: ModelSubscriptionLoginFilterInput | null,
};

export type OnCreateLoginSubscription = {
  onCreateLogin?:  {
    __typename: "Login",
    id: string,
    email?: string | null,
    password?: string | null,
    signUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      signUpUserStatsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    loginSignUpId?: string | null,
  } | null,
};

export type OnUpdateLoginSubscriptionVariables = {
  filter?: ModelSubscriptionLoginFilterInput | null,
};

export type OnUpdateLoginSubscription = {
  onUpdateLogin?:  {
    __typename: "Login",
    id: string,
    email?: string | null,
    password?: string | null,
    signUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      signUpUserStatsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    loginSignUpId?: string | null,
  } | null,
};

export type OnDeleteLoginSubscriptionVariables = {
  filter?: ModelSubscriptionLoginFilterInput | null,
};

export type OnDeleteLoginSubscription = {
  onDeleteLogin?:  {
    __typename: "Login",
    id: string,
    email?: string | null,
    password?: string | null,
    signUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      signUpUserStatsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    loginSignUpId?: string | null,
  } | null,
};

export type OnCreateSignUpSubscriptionVariables = {
  filter?: ModelSubscriptionSignUpFilterInput | null,
};

export type OnCreateSignUpSubscription = {
  onCreateSignUp?:  {
    __typename: "SignUp",
    id: string,
    email?: string | null,
    password?: string | null,
    name?: string | null,
    userStats?:  {
      __typename: "UserStats",
      id: string,
      signUpId: string,
      name: string,
      bestTime: number,
      bestWPM: number,
      bestAccuracy: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    signUpUserStatsId?: string | null,
  } | null,
};

export type OnUpdateSignUpSubscriptionVariables = {
  filter?: ModelSubscriptionSignUpFilterInput | null,
};

export type OnUpdateSignUpSubscription = {
  onUpdateSignUp?:  {
    __typename: "SignUp",
    id: string,
    email?: string | null,
    password?: string | null,
    name?: string | null,
    userStats?:  {
      __typename: "UserStats",
      id: string,
      signUpId: string,
      name: string,
      bestTime: number,
      bestWPM: number,
      bestAccuracy: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    signUpUserStatsId?: string | null,
  } | null,
};

export type OnDeleteSignUpSubscriptionVariables = {
  filter?: ModelSubscriptionSignUpFilterInput | null,
};

export type OnDeleteSignUpSubscription = {
  onDeleteSignUp?:  {
    __typename: "SignUp",
    id: string,
    email?: string | null,
    password?: string | null,
    name?: string | null,
    userStats?:  {
      __typename: "UserStats",
      id: string,
      signUpId: string,
      name: string,
      bestTime: number,
      bestWPM: number,
      bestAccuracy: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    signUpUserStatsId?: string | null,
  } | null,
};

export type OnCreateAttemptSubscriptionVariables = {
  filter?: ModelSubscriptionAttemptFilterInput | null,
};

export type OnCreateAttemptSubscription = {
  onCreateAttempt?:  {
    __typename: "Attempt",
    id: string,
    userId: string,
    wpm: number,
    accuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAttemptSubscriptionVariables = {
  filter?: ModelSubscriptionAttemptFilterInput | null,
};

export type OnUpdateAttemptSubscription = {
  onUpdateAttempt?:  {
    __typename: "Attempt",
    id: string,
    userId: string,
    wpm: number,
    accuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAttemptSubscriptionVariables = {
  filter?: ModelSubscriptionAttemptFilterInput | null,
};

export type OnDeleteAttemptSubscription = {
  onDeleteAttempt?:  {
    __typename: "Attempt",
    id: string,
    userId: string,
    wpm: number,
    accuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnCreateLeaderboardSubscription = {
  onCreateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    userId: string,
    maxWpm: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnUpdateLeaderboardSubscription = {
  onUpdateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    userId: string,
    maxWpm: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnDeleteLeaderboardSubscription = {
  onDeleteLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    userId: string,
    maxWpm: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserStatsSubscriptionVariables = {
  filter?: ModelSubscriptionUserStatsFilterInput | null,
};

export type OnCreateUserStatsSubscription = {
  onCreateUserStats?:  {
    __typename: "UserStats",
    id: string,
    signUpId: string,
    name: string,
    bestTime: number,
    bestWPM: number,
    bestAccuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserStatsSubscriptionVariables = {
  filter?: ModelSubscriptionUserStatsFilterInput | null,
};

export type OnUpdateUserStatsSubscription = {
  onUpdateUserStats?:  {
    __typename: "UserStats",
    id: string,
    signUpId: string,
    name: string,
    bestTime: number,
    bestWPM: number,
    bestAccuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserStatsSubscriptionVariables = {
  filter?: ModelSubscriptionUserStatsFilterInput | null,
};

export type OnDeleteUserStatsSubscription = {
  onDeleteUserStats?:  {
    __typename: "UserStats",
    id: string,
    signUpId: string,
    name: string,
    bestTime: number,
    bestWPM: number,
    bestAccuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
