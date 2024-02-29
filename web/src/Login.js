import React from "react";
import {useState} from "react";
import {Alert, AlertTitle, Box, Button, CircularProgress, TextField, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import axios from "axios";

const axiosInstance = axios.create();

const Login = () => {
  const [fields, setFields] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFieldChange = (event) => {
    const target = event.target;
    setFields({
      ...fields,
      [target.name]: target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

const { username, password } = fields;
axiosInstance
  .post(
    "http://localhost:8080/login",
    `username=${username}&password=${password}`,
    {
      withCredentials: true,
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
  )
  .then(response => {
    switch (response.status) {
      case 200: {
        setSuccess(true);
        setError(false);

        // noinspection JSUnresolvedReference
        const redirectUrl = response.data?.redirectUrl;
        if (redirectUrl) {
          window.location = redirectUrl;
        }
        break;
      }

      default: {
        setSuccess(false);
        setError(true);
      }
    }
  })
  .catch(() => {
    setSuccess(false);
    setError(true);
  })
  .finally(() => {
    setLoading(false);
  });
  }

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        mt: 2,
        mb: 2,
        width: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}>

      <Typography
        component={"h5"}
        variant={"h5"}
        align={"center"}
      >
        Login page
      </Typography>

      <TextField
        id={"username"}
        name={"username"}
        label={"Username"}
        margin={"dense"}
        onChange={handleFieldChange}
      />

      <TextField
        id={"password"}
        name={"password"}
        type={"password"}
        label={"Password"}
        margin={"dense"}
        onChange={handleFieldChange}
      />

      <Button
        variant={"contained"}
        type={"submit"}
        endIcon={loading ? <CircularProgress size={16} /> : <LoginIcon />}
        disabled={loading}
        sx={{
          mt: 1,
          mb: 1,
        }}
      >
        Login
      </Button>

      {error &&
        <Alert severity={"error"}>
          <AlertTitle>Error</AlertTitle>
          <Typography>
            Invalid username or password.
          </Typography>
        </Alert>
      }

      {success &&
        <Alert severity={"success"}>
          <AlertTitle>Success</AlertTitle>
          <Typography>
            You've logged in successfully.
          </Typography>
        </Alert>
      }
    </Box>
  );
};

export { Login };