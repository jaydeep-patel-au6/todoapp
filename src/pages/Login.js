import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../components/FormInput";
import { validationSchema } from "../helper/Schema";
import { navigate } from "@reach/router";
import { useStyles, useHelperTextStyles } from "../helper/InputStyles";
import { LoginForm } from "../helper/Form";

export default function Login() {
  const [disabeled, setDisabled] = useState(false);
  const classes = useStyles();
  const helperTextStyles = useHelperTextStyles();

  const formSubmit = (values, actions) => {
    setDisabled(true);
    if (values?.email === "test@test.com" && values?.password === "test@test") {
      toast.success("Login Sucessfully....!");
      localStorage.setItem("token", "loginValidate");
      setDisabled(false);
      setTimeout(() => {
        navigate("/editTask", { state: "login" });
      }, 1000);
    } else {
      setDisabled(false);
      toast.error("Please check Email id and password....!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bgLogin">
      <ToastContainer />
      <div className="shadow-xl border-0 w-11/12 sm:w-9/12 md:w-1/2">
        <Box className="bg-white py-6 px-3 md:py-6 md:px-8 flex justify-between flex-col">
          <div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              enableReinitialize
              validateOnBlur
              validateOnChange
              onSubmit={(values, actions) => formSubmit(values, actions)}
            >
              {({ values, errors, handleSubmit, touched, resetForm }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <div className="m-5 text-center text-2xl font-bold underline">
                      <p>Login Form</p>
                    </div>
                    {LoginForm?.map((data, idx) => {
                      return (
                        <div key={idx}>
                          <FormInput
                            helperTextStyles={helperTextStyles}
                            classes={classes}
                            error={
                              data?.textFieldName === "email"
                                ? touched?.email && !!errors.email
                                : touched?.password && !!errors.password
                            }
                            helperText={
                              data?.textFieldName === "email"
                                ? touched?.email && errors.email
                                : touched?.password && errors.password
                            }
                            textFieldName={data?.textFieldName}
                            textFieldType={data?.textFieldType}
                            textFieldLabel={data?.textFieldLabel}
                          />
                        </div>
                      );
                    })}

                    <Stack className="m-5">
                      <Button
                        variant="contained"
                        disabled={disabeled}
                        className={`${disabeled ? "opacity-75" : null} `}
                        type="submit"
                      >
                        Login
                      </Button>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Box>
      </div>
    </div>
  );
}
