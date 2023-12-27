import React from "react";
import { Button } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      ;
    </>
  );
};

export default Footer;
