/*
Specify the URI to redirect Resource Owners to if consent is required during the authorization_code flow.
A default consent page will be generated when this attribute is not specified.
If a URI is specified, applications are required to process the specified URI to generate a consent page.
The query string will contain the following parameters:
client_id - the client identifier
scope - a space-delimited list of scopes present in the authorization request
state - a CSRF protection token
In general, the consent page should create a form that submits a request with the following requirements:
It must be an HTTP POST
It must be submitted to AuthorizationServerSettings.getAuthorizationEndpoint()
It must include the received client_id as an HTTP parameter
It must include the received state as an HTTP parameter
It must include the list of scopes the Resource Owner consented to as an HTTP parameter
 */

import {useSearchParams} from "react-router-dom";
import {Box, Button, Checkbox, FormControlLabel, FormGroup, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";

const Consent = () => {
  const [ searchParams ] = useSearchParams();

  const clientId = searchParams.get("client_id") ?? "";
  const scopes = (searchParams.get("scope") ?? "").split(" ");
  const state = searchParams.get("state") ?? ""
  return (
    <Box
      component={"form"}
      method={"post"}
      action={"http://localhost:8080/oauth2/authorize"}
      sx={{
        mt: 2,
        mb: 2,
        width: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}
    >
      <Typography
        variant={"h5"}
        component={"h5"}
        align={"center"}
      >
        Consent page
      </Typography>

      <Typography
        variant={"h6"}
        component={"h6"}
        align={"center"}
      >
        Do you want to give access to your account to {clientId}?
      </Typography>

      <input type={"hidden"} name={"client-id"} value={clientId} />
      <input type={"hidden"} name={"state"} value={state} />

      {scopes &&
        <>
          <Typography>
            The following permissions are requested:
          </Typography>

          <FormGroup>
            {scopes.map((scope) =>
              <FormControlLabel key={scope} control={<Checkbox name={scope} />} label={scope} />
            )}
          </FormGroup>
        </>
      }

      <Button
        variant={"contained"}
        type={"submit"}
        endIcon={<SendIcon />}
        sx={{
          mt: 1,
          mb: 1,
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export { Consent };