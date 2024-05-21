import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import TinyTickSvgComponent from ".//tinyTickSvg";

interface GDA_PasswordHelperProps {
  password: string;
  confirmPassword: string;
  setPasswordValid: Dispatch<SetStateAction<boolean>>;
}

const initialValidations = [
  {
    message: "Be at least 8 characters long",
    regexp: /^(?!\s*$).{8,}$/,
  },
  {
    message: "Have a special character like ! @ $ % *",
    regexp: /^(?=.*[!@#$%^&*])/,
  },
  {
    message: "Have at least one number",
    regexp: /^(?=.*[0-9])/,
  },
  {
    message: "Have an uppercase letter",
    regexp: /^(?=.*[A-Z])/,
  },
  {
    message: "Have a lowercase letter",
    regexp: /^(?=.*[a-z])/,
  },
];

const PasswordHelper = ({
  password,
  confirmPassword,
  setPasswordValid,
}: GDA_PasswordHelperProps) => {
  const [validations, setValidations] = useState(
    initialValidations.map((v) => ({
      ...v,
      satisfied: false,
    })),
  );

  useEffect(() => {
    const updatedValidations = validations.map((validation) => ({
      ...validation,
      satisfied: validation.regexp.test(password),
    }));
    setValidations(updatedValidations);

    const allSatisfied = updatedValidations.every((v) => v.satisfied);
    setPasswordValid(allSatisfied && password === confirmPassword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, confirmPassword, setPasswordValid]);

  return (
    <div className="mt-2">
      <span className="text-neutral-800 font-semibold text-body02 mb-2">
        A password must:
      </span>
      {validations.map((validation) => (
        <div
          key={validation.message}
          className="flex flex-row text-body03 text-neutral-600 font-regular mt-1"
        >
          <TinyTickSvgComponent
            className="mt-[4.5px] mr-2"
            fill={validation.satisfied ? "#00B754" : "#BFBFBF"}
          />
          {validation.message}
        </div>
      ))}
    </div>
  );
};

export default PasswordHelper;
