import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function ProfileButton() {
  const { logout } = useAuth0();

  return (
    <Dropdown align="end" className="m-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <LinkContainer to="/profile">
          <Dropdown.Item to="/profile">Profile</Dropdown.Item>
        </LinkContainer>

        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
