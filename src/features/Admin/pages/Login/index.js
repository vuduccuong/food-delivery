import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  const onLoginHandle = (e) => {
    e.preventDefault;
    history.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex w-sceen bg-gray-100">
      <div className="w-1/3 flex justify-center">
        <div className="min-h-screen flex justify-center items-center">
          <div>
            <form>
              <div>
                <h1 className="text-4xl font-bold text-custom-yellow">Ninja Food Management</h1>
              </div>

              <div className="mt-5">
                <label className="block text-md mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="email"
                  name="password"
                  placeholder="email"
                />
              </div>
              <div className="my-3">
                <label className="block text-md mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex justify-between items-center">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    id="rememberme"
                  />
                  <label
                    className="text-sm cursor-pointer ml-2 select-none"
                    htmlFor="rememberme"
                  >
                    Remember Me
                  </label>
                </div>
                <span className="text-sm text-blue-700 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div className="">
                <button
                  className="mt-4 mb-3 w-full bg-custom-yellow hover:bg-yellow-500 text-white py-2 rounded-md transition duration-100 uppercase font-semibold"
                  type="button"
                  onClick={(e) => {
                    onLoginHandle(e);
                  }}
                >
                  Login now
                </button>
                <div className="flex  space-x-2 justify-center items-end bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100 ">
                  <button className="uppercase font-semibold">sign-in with google</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="w-2/3 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/images/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg')`,
        }}
      ></div>
    </div>
  );
};

export default LoginPage;
