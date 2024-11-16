import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";

export default function Register() {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log({ name, email, photo, password });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center p-6">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
          <h2 className="text-xl font-bold text-center mt-4">Register Now!</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-Url</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo-url"
                className="input input-bordered"
                required
              />
            </div>

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
              <button className="btn btn-neutral rounded-none">Register</button>
            </div>
          </form>
          <h1 className="text-center mb-4">
            Already Have an account?{" "}
            <Link to="/auth/login" className="text-red-500 font-semibold">
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
