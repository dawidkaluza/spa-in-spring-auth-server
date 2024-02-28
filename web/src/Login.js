import React from "react";
import {useState} from "react";
import {Box, Button, CircularProgress, TextField, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  const [fields, setFields] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <Box
      component={"form"}
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
        Login
      </Typography>

      <TextField
        id={"username"}
        name={"username"}
        label={"Username"}
        margin={"dense"}
      />

      <TextField
        id={"password"}
        name={"password"}
        type={"password"}
        label={"Password"}
        margin={"dense"}
      />

      <Button
        variant={"contained"}
        type={"submit"}
        endIcon={loading ? <CircularProgress size={16} /> : <LoginIcon />}
        disabled={loading}
      >
        Login
      </Button>
    </Box>
  );
};

export { Login };