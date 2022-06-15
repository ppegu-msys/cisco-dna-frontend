import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const PasswordInput = ({ ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <FormikInput {...rest} type={show ? "text" : "password"} />
      <div className="input-group-append password-eye">
        <FontAwesomeIcon
          icon={show ? faEye : faEyeSlash}
          className="pointer"
          onClick={() => setShow(!show)}
        />
      </div>
    </React.Fragment>
  );
};

export const FormikInput = ({ form, id, ...rest }) => {
  return (
    <input
      id={id}
      className="form-control"
      onChange={form.handleChange}
      onBlur={form.handleBlur}
      value={form.values[id]}
      {...rest}
    />
  );
};
