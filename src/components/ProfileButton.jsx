import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown } from "react-bootstrap";

export default function ProfileButton() {
  const { logout } = useAuth0();

  return (
    <Dropdown align="end" className="m-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
