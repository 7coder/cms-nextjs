import React from "react";

const Login: React.FC = () => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-4 pt-2">
        <p>Login</p>
        <form>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="PIN"
            aria-label="default input example"
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
