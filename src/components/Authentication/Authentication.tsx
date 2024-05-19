"use client";

import React, { useState } from "react";
import Register from "../Register/Register";
import ForgetPassword from "../ForgetPasword/ForgetPassword";
import Login from "../Login/Login";

const Authentication = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <div>
      {login ? (
        <Login
          setForgetPassword={setForgetPassword}
          setCreateAccount={setCreateAccount}
          setLogin={setLogin}
        />
      ) : (
        ""
      )}

      {createAccount ? (
        <Register
          setCreateAccount={setCreateAccount}
          setForgetPassword={setForgetPassword}
          setLogin={setLogin}
        />
      ) : (
        ""
      )}

      {forgetPassword ? (
        <ForgetPassword
          setCreateAccount={setCreateAccount}
          setForgetPassword={setForgetPassword}
          setLogin={setLogin}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Authentication;
