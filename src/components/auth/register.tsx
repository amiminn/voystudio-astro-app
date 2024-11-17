import { Key } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/lib/url-lib";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AuthTemplate from "./AuthTemplate";
export default function RegisterPage() {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {}, []);

  async function toRegister(e: { preventDefault: () => void }) {
    e.preventDefault();
    const url = apiUrl("/api/register");

    try {
      const data = {
        name,
        username,
        email,
        password,
      };

      const res = await axios.post(url, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthTemplate stateTemplate="register">
      <div className="text-center ">
        <div className="text-xl font-semibold ">Voy Studio</div>
        <h1 className="text-2xl font-extrabold xl:text-3xl">Sign Up</h1>
        <div className="text-red-500">{error}</div>
        <div className="flex-1 w-full mt-8">
          <form onSubmit={toRegister} className="grid gap-3 max-w-xs mx-auto">
            <Input
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Input
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Input
              type="text"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button disabled={isLoading} type="submit">
              <Key />
              <span className="ml-3">Sign Up</span>
            </Button>
          </form>
        </div>
      </div>
    </AuthTemplate>
  );
}
