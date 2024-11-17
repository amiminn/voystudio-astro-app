import { generateUrl } from "@/lib/url-lib";
import { Key } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import AuthTemplate from "./AuthTemplate";

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
    <AuthTemplate stateTemplate="login">
      <div className="text-center ">
        <div className="text-xl font-semibold">Voy Studio</div>
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
