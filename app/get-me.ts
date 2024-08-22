"use server";
import { get } from "./auth/util/fetch";

export default async function getMe() {
   return get("users/me");
}
