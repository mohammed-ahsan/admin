import React from "react";
import { Select } from "@windmill/react-ui";

const SelectRole = ({ setRole, register, name, label }) => {
  return (
    <>
      <Select
        onChange={(e) => setRole(e.target.value)}
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        <option value="" defaultValue hidden>
          Staff role
        </option>
        <option value="Admin">Admin</option>
        <option value="CEO">CEO</option>

      </Select>
    </>
  );
};

export default SelectRole;
