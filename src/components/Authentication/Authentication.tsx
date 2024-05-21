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
      <div className="block sm:flex text-center justify-between pb-2">
        {" "}
        <h1 className="text-4xl py-2 sm:ms-16">s_S</h1>
        <p className="pt-4 me-6">
          ** A way to connect Human Hands - we call it{" "}
          <em>
            <strong>Human Media Platform </strong>
          </em>
          **
        </p>
      </div>
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
