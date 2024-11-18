import React from "react";
import { Toaster } from "../ui/toaster";

type State = "lupa password" | "login" | "register" | "reset password";

export default function AuthLayout({
  children,
  stateTemplate,
}: {
  children: React.ReactNode;
  stateTemplate: State;
}) {
  const state: State = stateTemplate;

  return (
    <div className="h-[70vh] items-center flex">
      <Toaster />
      <div className="w-full">
        {children}
        <div className="text-gray-600 italic dark:text-gray-100 text-sm mt-8 max-w-xs mx-auto">
          {state === "lupa password" && (
            <div className="grid gap-3">
              <div className="w-1/2">
                sudah mempunyai akun? silahkan{" "}
                <a
                  href="/login"
                  className="text-rose-600 dark:text-rose-300 font-semibold"
                >
                  login disini
                </a>
              </div>
              <div className="flex justify-end">
                <div className="text-end w-1/2">
                  belum mempunyai akun? silahkan{" "}
                  <a
                    href="/register"
                    className="text-rose-600 dark:text-rose-300 font-semibold"
                  >
                    daftar disini
                  </a>
                </div>
              </div>
            </div>
          )}
          {state === "login" && (
            <div className="grid gap-3">
              <div className="w-1/2">
                belum mempunyai akun? silahkan{" "}
                <a
                  href="/register"
                  className="text-rose-600 dark:text-rose-300 font-semibold"
                >
                  daftar disini
                </a>
              </div>
              <div className="flex justify-end">
                <div className="text-end w-1/2">
                  lupa password? silahkan{" "}
                  <a
                    href="/lupa-password"
                    className="text-rose-600 dark:text-rose-300 font-semibold"
                  >
                    atur ulang passwordmu disini
                  </a>
                </div>
              </div>
            </div>
          )}
          {state === "register" && (
            <div className="grid gap-3">
              <div className="w-1/2">
                sudah mempunyai akun? silahkan{" "}
                <a
                  href="/login"
                  className="text-rose-600 dark:text-rose-300 font-semibold"
                >
                  login disini
                </a>
              </div>
              <div className="flex justify-end">
                <div className="text-end w-1/2">
                  lupa password? silahkan{" "}
                  <a
                    href="/lupa-password"
                    className="text-rose-600 dark:text-rose-300 font-semibold"
                  >
                    atur ulang passwordmu disini
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="mt-10 text-xs text-center max-w-xs mx-auto">
          2024 @ authored by{" "}
          <a
            href="https://amiminn.my.id"
            className="italic font-semibold"
            target="_blank"
          >
            amimin
          </a>
        </p>
      </div>
    </div>
  );
}
