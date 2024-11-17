import { generateUrl } from "@/lib/url-lib";
import { Key } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AuthTemplate from "./AuthTemplate";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {}, []);
  async function tologin(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return (
    <AuthTemplate stateTemplate="reset password">
      <div className="text-center">
        <div className="text-xl font-semibold ">Voy Studio</div>
        <h1 className="text-2xl font-extrabold xl:text-3xl ">Reset Password</h1>
        <div className="text-red-500">{error}</div>
        <div className="flex-1 w-full mt-8">
          <form onSubmit={tologin} className="grid gap-3 max-w-xs mx-auto">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button disabled={isLoading} type="submit">
              <Key />
              <span className="ml-3">Update Password</span>
            </Button>
          </form>
        </div>
      </div>
    </AuthTemplate>
  );
}
