import { apiUrl, generateUrl } from "@/lib/url-lib";
import { Key } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AuthTemplate from "../layout/authLayout";
import axios from "axios";

export default function LupaPasswordPage() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {}, []);
  async function toForgotPassword(e: { preventDefault: () => void }) {
    e.preventDefault();

    const api = apiUrl("/api/lupa-password");
    console.log(api);
    try {
      const res = await axios.post(api, {
        email,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthTemplate stateTemplate="lupa password">
      <div className="text-center">
        <div className="text-xl font-semibold">
          {import.meta.env.PUBLIC_APP_NAME}
        </div>
        <h1 className="text-2xl font-extrabold xl:text-3xl ">
          Forgot Password
        </h1>
        <div className="text-red-500">{error}</div>
        <div className="flex-1 w-full mt-8">
          <form
            onSubmit={toForgotPassword}
            className="grid gap-3 max-w-xs mx-auto"
          >
            <Input
              type="text"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Button disabled={isLoading} type="submit">
              <Key />
              <span className="ml-3">Submit</span>
            </Button>
          </form>
        </div>
      </div>
    </AuthTemplate>
  );
}
