/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
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

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

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

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
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

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
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

export type ModelSubscriptionLoginFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLoginFilterInput | null > | null,
  or?: Array< ModelSubscriptionLoginFilterInput | null > | null,
};

export type ModelSubscriptionSignUpFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSignUpFilterInput | null > | null,
  or?: Array< ModelSubscriptionSignUpFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
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
