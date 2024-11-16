import { generateUrl } from "@/lib/url-lib";
import { Key } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const url = "/api/login" + generateUrl();

  useEffect(() => {}, []);
  async function tologin(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center min-h-screen text-gray-900 bg-gray-100">
      <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-10 sm:rounded-lg">
        <div className="grid items-center p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
          <div className="flex flex-col items-center mt-12">
            <div className="text-xl font-semibold text-slate-600">
              Voy Studio
            </div>
            <h1 className="text-2xl font-extrabold xl:text-3xl text-slate-700">
              Sign In
            </h1>
            <div className="text-red-500">{error}</div>
            <div className="flex-1 w-full mt-8">
              <form onSubmit={tologin} className="max-w-xs mx-auto">
                <input
                  className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 focus:bg-white"
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <input
                  className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button
                  disabled={isLoading}
                  type="submit"
                  className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out rounded-lg bg-slate-600 hover:bg-slate-700 focus:shadow-outline focus:outline-none disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  <Key />
                  <span className="ml-3">Sign In</span>
                </button>
                <p className="mt-6 text-xs text-center text-gray-600">
                  I agree to abide by templatana's
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden text-center bg-slate-100 lg:flex"></div>
      </div>
    </div>
  );
}
