import { apiUrl, generateUrl } from "@/lib/url-lib";
import { Key } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AuthTemplate from "../layout/authLayout";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [isAvailable, setIsAvailable] = useState(false);
  const [tokenParam, setTokenParam] = useState("");

  useEffect(() => {
    const urlstring = window.location.href;
    getTokenData(urlstring);
  }, []);
  async function toUpdatePassword(e: { preventDefault: () => void }) {
    e.preventDefault();

    const api = apiUrl("/api/reset-password/" + tokenParam);
    try {
      const res = await axios.post(api, { password });
      toast({
        title: "Success",
        description: res.data.message,
      });
    } catch (error) {
      toast({
        title: "Failed",
        description: "Oops, sepertinya ada kesalahan server.",
        variant: "destructive",
      });
    }
  }

  async function getTokenData(token: string) {
    const url = new URL(token);
    const queryParam = url.searchParams.keys().next().value;
    setTokenParam(queryParam as string);
    const api = apiUrl("/api/token-available/" + queryParam);

    try {
      const res = await axios.get(api);
      setIsAvailable(true);
    } catch (error) {
      setIsAvailable(false);
    }
  }

  return (
    <AuthTemplate stateTemplate="reset password">
      <div className="text-center">
        <div className="text-xl font-semibold ">
          {import.meta.env.PUBLIC_APP_NAME}
        </div>
        <h1 className="text-2xl font-extrabold xl:text-3xl ">Reset Password</h1>
        <div className="text-red-500">{error}</div>
        <div className="flex-1 w-full mt-8">
          {isAvailable ? (
            <form
              onSubmit={toUpdatePassword}
              className="grid gap-3 max-w-xs mx-auto"
            >
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
          ) : (
            <div className="text-2xl text-rose-600 dark:text-rose-300">
              token untuk reset password telah Kedaluwarsa.
            </div>
          )}
        </div>
      </div>
    </AuthTemplate>
  );
}
