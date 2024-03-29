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
  SignUp?: SignUp | null,
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
};

export type ModelSignUpConditionInput = {
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSignUpConditionInput | null > | null,
  or?: Array< ModelSignUpConditionInput | null > | null,
  not?: ModelSignUpConditionInput | null,
};

export type UpdateSignUpInput = {
  id: string,
  email?: string | null,
  password?: string | null,
  name?: string | null,
};

export type DeleteSignUpInput = {
  id: string,
};

export type CreateUserStatsInput = {
  id?: string | null,
  name: string,
  bestTime: number,
  bestWPM: number,
  bestAccuracy: number,
};

export type ModelUserStatsConditionInput = {
  name?: ModelStringInput | null,
  bestTime?: ModelFloatInput | null,
  bestWPM?: ModelIntInput | null,
  bestAccuracy?: ModelFloatInput | null,
  and?: Array< ModelUserStatsConditionInput | null > | null,
  or?: Array< ModelUserStatsConditionInput | null > | null,
  not?: ModelUserStatsConditionInput | null,
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

export type UserStats = {
  __typename: "UserStats",
  id: string,
  name: string,
  bestTime: number,
  bestWPM: number,
  bestAccuracy: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserStatsInput = {
  id: string,
  name?: string | null,
  bestTime?: number | null,
  bestWPM?: number | null,
  bestAccuracy?: number | null,
};

export type DeleteUserStatsInput = {
  id: string,
};

export type ModelLoginFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
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
  and?: Array< ModelSignUpFilterInput | null > | null,
  or?: Array< ModelSignUpFilterInput | null > | null,
  not?: ModelSignUpFilterInput | null,
};

export type ModelSignUpConnection = {
  __typename: "ModelSignUpConnection",
  items:  Array<SignUp | null >,
  nextToken?: string | null,
};

export type ModelUserStatsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  bestTime?: ModelFloatInput | null,
  bestWPM?: ModelIntInput | null,
  bestAccuracy?: ModelFloatInput | null,
  and?: Array< ModelUserStatsFilterInput | null > | null,
  or?: Array< ModelUserStatsFilterInput | null > | null,
  not?: ModelUserStatsFilterInput | null,
};

export type ModelUserStatsConnection = {
  __typename: "ModelUserStatsConnection",
  items:  Array<UserStats | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionLoginFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLoginFilterInput | null > | null,
  or?: Array< ModelSubscriptionLoginFilterInput | null > | null,
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
  and?: Array< ModelSubscriptionSignUpFilterInput | null > | null,
  or?: Array< ModelSubscriptionSignUpFilterInput | null > | null,
};

export type ModelSubscriptionUserStatsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  bestTime?: ModelSubscriptionFloatInput | null,
  bestWPM?: ModelSubscriptionIntInput | null,
  bestAccuracy?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionUserStatsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserStatsFilterInput | null > | null,
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
    SignUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
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
    SignUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
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
    SignUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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
    name: string,
    bestTime: number,
    bestWPM: number,
    bestAccuracy: number,
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
    SignUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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

export type OnCreateLoginSubscriptionVariables = {
  filter?: ModelSubscriptionLoginFilterInput | null,
};

export type OnCreateLoginSubscription = {
  onCreateLogin?:  {
    __typename: "Login",
    id: string,
    email?: string | null,
    password?: string | null,
    SignUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
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
    SignUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
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
    SignUp?:  {
      __typename: "SignUp",
      id: string,
      email?: string | null,
      password?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
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
    name: string,
    bestTime: number,
    bestWPM: number,
    bestAccuracy: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
