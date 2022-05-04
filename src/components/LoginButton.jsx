import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

export default function LoginButton() {
  const { loginWithPopup } = useAuth0();

  const options = {
    screen_hint: "signup",
  };

  return (
    <Button  
      className="m-2"
      variant="secondary"
      onClick={() => loginWithPopup(options)}
    >
      Log In
    </Button>
  );
}
