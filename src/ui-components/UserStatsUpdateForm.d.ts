/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserStats } from "../API.ts";
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
export declare type UserStatsUpdateFormInputValues = {
    name?: string;
    bestTime?: number;
    bestWPM?: number;
    bestAccuracy?: number;
};
export declare type UserStatsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    bestTime?: ValidationFunction<number>;
    bestWPM?: ValidationFunction<number>;
    bestAccuracy?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserStatsUpdateFormOverridesProps = {
    UserStatsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    bestTime?: PrimitiveOverrideProps<TextFieldProps>;
    bestWPM?: PrimitiveOverrideProps<TextFieldProps>;
    bestAccuracy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserStatsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserStatsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userStats?: UserStats;
    onSubmit?: (fields: UserStatsUpdateFormInputValues) => UserStatsUpdateFormInputValues;
    onSuccess?: (fields: UserStatsUpdateFormInputValues) => void;
    onError?: (fields: UserStatsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserStatsUpdateFormInputValues) => UserStatsUpdateFormInputValues;
    onValidate?: UserStatsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserStatsUpdateForm(props: UserStatsUpdateFormProps): React.ReactElement;
