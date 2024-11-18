import { apiUrl } from "@/lib/url-lib";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";

export default function KonfirmasiAccount() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [tokenParam, setTokenParam] = useState("");
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const urlstring = window.location.href;
    getTokenData(urlstring);
  }, []);

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

  async function confirmAccountNow() {
    const api = apiUrl("/api/confirm-account/" + tokenParam);
    try {
      const res = await axios.get(api);
      toast({
        title: "Success",
        description: res.data.message,
      });
      setIsActive(true);
    } catch (error) {
      toast({
        title: "Failed",
        description: "Oops, sepertinya ada kesalahan server.",
        variant: "destructive",
      });
    }
  }

  if (isAvailable) {
    return (
      <div className="max-w-sm mx-auto h-[70vh] flex items-center">
        <div className="text-center grid gap-5">
          <h1 className="text-left text-2xl font-bold">
            Konfirmasi Alamat Email Anda :
          </h1>
          <h4 className="text-left">
            Terima kasih telah mendaftar! Sebelum dapat menggunakan akun Anda
            sepenuhnya, kami perlu memverifikasi alamat email Anda. Hal ini
            bertujuan untuk menjaga keamanan akun Anda dan memastikan bahwa
            informasi yang Anda berikan akurat. Silakan klik tombol di bawah ini
            untuk mengonfirmasi alamat email Anda dan mengaktifkan akun:
          </h4>
          {!isActive ? (
            <Button onClick={confirmAccountNow} className="text-2xl py-10">
              Konfirmasi
            </Button>
          ) : (
            <div className="py-10 text-2xl text-emerald-500">
              Akun anda telah aktif
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-xs mx-auto h-[70vh] flex items-center">
        <h1 className="text-left text-2xl font-bold">
          Oops, akun tidak ditemukan.
        </h1>
      </div>
    );
  }
}
