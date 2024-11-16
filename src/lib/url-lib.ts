import { nanoid } from "nanoid";

export function generateUrl(num = 44) {
  return "?_rsc" + nanoid(num);
}

export function apiUrl(url: string, key: number = 28) {
  const data = import.meta.env.PUBLIC_API_URL + url + generateUrl(key);
  return data;
}
