import { apiUrl, generateUrl } from "@/lib/url-lib";
import { Key } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import AuthTemplate from "../layout/authLayout";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [tokenCookie, setTokenCookie] = useCookies(["auth_token"]);
  const [refreshToken, setRefreshToken] = useCookies(["refresh_token"]);

  useEffect(() => {}, []);
  async function tologin(e: { preventDefault: () => void }) {
    e.preventDefault();
    const url = apiUrl("/api/login");
    try {
      const data = {
        username,
        password,
      };

      const res = await axios.post(url, data);
      setTokenCookie("auth_token", res.data.token);
      setRefreshToken("refresh_token", res.data.refreshToken);
    } catch (error: any) {
      toast({
        title: "Gagal",
        description: error.response.data.error,
        variant: "destructive",
      });
    }
  }

  return (
    <AuthTemplate stateTemplate="login">
      <div className="text-center ">
        <div className="text-xl font-semibold">
          {import.meta.env.PUBLIC_APP_NAME}
        </div>
        <h1 className="text-2xl font-extrabold xl:text-3xl ">Sign In</h1>
        <div className="text-red-500">{error}</div>
        <div className="flex-1 w-full mt-8">
          <form onSubmit={tologin} className="grid gap-3 max-w-xs mx-auto">
            <Input
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button className="w-full" disabled={isLoading} type="submit">
              <Key />
              <span className="ml-3">Sign In</span>
            </Button>
          </form>
        </div>
      </div>
    </AuthTemplate>
  );
}
