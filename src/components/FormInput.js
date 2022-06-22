import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Field } from "formik";

const FormInput = ({
  helperTextStyles,
  classes,
  textFieldName,
  textFieldType,
  textFieldLabel,
  error,
  helperText,
}) => {
  return (
    <>
      <div className="m-5">
        <Field
          as={TextField}
          className={`${classes.root}`}
          fullWidth
          label={textFieldLabel}
          name={textFieldName}
          type={textFieldType}
          error={error}
          helperText={helperText}
          FormHelperTextProps={{
            classes: {
              root: helperTextStyles.root,
            },
          }}
        />
      </div>
    </>
  );
};

export default FormInput;
