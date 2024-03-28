/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Login } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LoginUpdateFormInputValues = {
    email?: string;
    password?: string;
};
export declare type LoginUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginUpdateFormOverridesProps = {
    LoginUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoginUpdateFormProps = React.PropsWithChildren<{
    overrides?: LoginUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    login?: Login;
    onSubmit?: (fields: LoginUpdateFormInputValues) => LoginUpdateFormInputValues;
    onSuccess?: (fields: LoginUpdateFormInputValues) => void;
    onError?: (fields: LoginUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoginUpdateFormInputValues) => LoginUpdateFormInputValues;
    onValidate?: LoginUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LoginUpdateForm(props: LoginUpdateFormProps): React.ReactElement;
