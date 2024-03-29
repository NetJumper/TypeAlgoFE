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
export declare type UserStatsCreateFormInputValues = {
    name?: string;
    bestTime?: number;
    bestWPM?: number;
    bestAccuracy?: number;
};
export declare type UserStatsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    bestTime?: ValidationFunction<number>;
    bestWPM?: ValidationFunction<number>;
    bestAccuracy?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserStatsCreateFormOverridesProps = {
    UserStatsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    bestTime?: PrimitiveOverrideProps<TextFieldProps>;
    bestWPM?: PrimitiveOverrideProps<TextFieldProps>;
    bestAccuracy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserStatsCreateFormProps = React.PropsWithChildren<{
    overrides?: UserStatsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserStatsCreateFormInputValues) => UserStatsCreateFormInputValues;
    onSuccess?: (fields: UserStatsCreateFormInputValues) => void;
    onError?: (fields: UserStatsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserStatsCreateFormInputValues) => UserStatsCreateFormInputValues;
    onValidate?: UserStatsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserStatsCreateForm(props: UserStatsCreateFormProps): React.ReactElement;
