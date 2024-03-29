/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUserStats } from "../graphql/queries";
import { updateUserStats } from "../graphql/mutations";
const client = generateClient();
export default function UserStatsUpdateForm(props) {
  const {
    id: idProp,
    userStats: userStatsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    bestTime: "",
    bestWPM: "",
    bestAccuracy: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [bestTime, setBestTime] = React.useState(initialValues.bestTime);
  const [bestWPM, setBestWPM] = React.useState(initialValues.bestWPM);
  const [bestAccuracy, setBestAccuracy] = React.useState(
    initialValues.bestAccuracy
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userStatsRecord
      ? { ...initialValues, ...userStatsRecord }
      : initialValues;
    setName(cleanValues.name);
    setBestTime(cleanValues.bestTime);
    setBestWPM(cleanValues.bestWPM);
    setBestAccuracy(cleanValues.bestAccuracy);
    setErrors({});
  };
  const [userStatsRecord, setUserStatsRecord] =
    React.useState(userStatsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserStats.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserStats
        : userStatsModelProp;
      setUserStatsRecord(record);
    };
    queryData();
  }, [idProp, userStatsModelProp]);
  React.useEffect(resetStateValues, [userStatsRecord]);
  const validations = {
    name: [{ type: "Required" }],
    bestTime: [{ type: "Required" }],
    bestWPM: [{ type: "Required" }],
    bestAccuracy: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          bestTime,
          bestWPM,
          bestAccuracy,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUserStats.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userStatsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserStatsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              bestTime,
              bestWPM,
              bestAccuracy,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Best time"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={bestTime}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              bestTime: value,
              bestWPM,
              bestAccuracy,
            };
            const result = onChange(modelFields);
            value = result?.bestTime ?? value;
          }
          if (errors.bestTime?.hasError) {
            runValidationTasks("bestTime", value);
          }
          setBestTime(value);
        }}
        onBlur={() => runValidationTasks("bestTime", bestTime)}
        errorMessage={errors.bestTime?.errorMessage}
        hasError={errors.bestTime?.hasError}
        {...getOverrideProps(overrides, "bestTime")}
      ></TextField>
      <TextField
        label="Best wpm"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={bestWPM}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              bestTime,
              bestWPM: value,
              bestAccuracy,
            };
            const result = onChange(modelFields);
            value = result?.bestWPM ?? value;
          }
          if (errors.bestWPM?.hasError) {
            runValidationTasks("bestWPM", value);
          }
          setBestWPM(value);
        }}
        onBlur={() => runValidationTasks("bestWPM", bestWPM)}
        errorMessage={errors.bestWPM?.errorMessage}
        hasError={errors.bestWPM?.hasError}
        {...getOverrideProps(overrides, "bestWPM")}
      ></TextField>
      <TextField
        label="Best accuracy"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={bestAccuracy}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              bestTime,
              bestWPM,
              bestAccuracy: value,
            };
            const result = onChange(modelFields);
            value = result?.bestAccuracy ?? value;
          }
          if (errors.bestAccuracy?.hasError) {
            runValidationTasks("bestAccuracy", value);
          }
          setBestAccuracy(value);
        }}
        onBlur={() => runValidationTasks("bestAccuracy", bestAccuracy)}
        errorMessage={errors.bestAccuracy?.errorMessage}
        hasError={errors.bestAccuracy?.hasError}
        {...getOverrideProps(overrides, "bestAccuracy")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userStatsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userStatsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
