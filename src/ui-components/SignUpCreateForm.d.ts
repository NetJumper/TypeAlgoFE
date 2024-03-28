/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SignUpCreateFormInputValues = {
    email?: string;
    password?: string;
    name?: string;
};
export declare type SignUpCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpCreateFormOverridesProps = {
    SignUpCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SignUpCreateFormProps = React.PropsWithChildren<{
    overrides?: SignUpCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SignUpCreateFormInputValues) => SignUpCreateFormInputValues;
    onSuccess?: (fields: SignUpCreateFormInputValues) => void;
    onError?: (fields: SignUpCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SignUpCreateFormInputValues) => SignUpCreateFormInputValues;
    onValidate?: SignUpCreateFormValidationValues;
} & React.CSSProperties>;
export default function SignUpCreateForm(props: SignUpCreateFormProps): React.ReactElement;
