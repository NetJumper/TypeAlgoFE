/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SignUp } from "../API.ts";
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
export declare type SignUpUpdateFormInputValues = {
    email?: string;
    password?: string;
    name?: string;
};
export declare type SignUpUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpUpdateFormOverridesProps = {
    SignUpUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SignUpUpdateFormProps = React.PropsWithChildren<{
    overrides?: SignUpUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    signUp?: SignUp;
    onSubmit?: (fields: SignUpUpdateFormInputValues) => SignUpUpdateFormInputValues;
    onSuccess?: (fields: SignUpUpdateFormInputValues) => void;
    onError?: (fields: SignUpUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SignUpUpdateFormInputValues) => SignUpUpdateFormInputValues;
    onValidate?: SignUpUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SignUpUpdateForm(props: SignUpUpdateFormProps): React.ReactElement;
