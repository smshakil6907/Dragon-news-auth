import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";

export default function Login() {
  const { userLogin, setUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        alert(error.code);
      });
  };
  return (
    <div className=" min-h-screen flex justify-center items-center p-6">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
        <h2 className="text-xl font-bold text-center mt-4">Login Now!</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <h1 className="text-center mb-4">
          Don't Have an account?{" "}
          <Link to="/auth/register" className="text-red-500 font-semibold">
            Register
          </Link>
        </h1>
      </div>
    </div>
  );
}
