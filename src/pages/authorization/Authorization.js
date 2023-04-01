import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/input/Input";

const Button = styled.button`
  width: 100px;
  height: 40px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const Authorization = () => {
  return (
    <div>
      <Input />
      <Button
        onClick={() => {
          console.log("SAVE");
        }}
      >
        Save
      </Button>
    </div>
  );
};
