import React from "react";
import { CookiesProvider } from "react-cookie";

export default function adminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
