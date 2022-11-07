import { PIN } from "@/src/types/auth";
import http from "@/src/utils/http";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Login: React.FC = () => {
  const router = useRouter();
  const [pin, setPin] = useState<PIN>("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await http.postRq("/api/v1/auth/login", { pin });
    if (res.status === 200) return router.back();
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-4 pt-2">
        <h3>Login</h3>
        <form onSubmit={onSubmitHandler}>
          <input
            className="form-control mb-3"
            type="text"
            name="pin"
            placeholder="PIN"
            aria-label="default input example"
            onChange={(e) => onChangeHandler(e)}
          />
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
