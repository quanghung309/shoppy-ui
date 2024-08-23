"use server";
import { redirect } from "next/navigation";
import { post } from "../../common/util/fetch";
import { FormRespsonse } from "@/app/common/interfaces/form-response.interface";

export default async function createUser(
   _prevState: FormRespsonse,
   formData: FormData
) {
   const { error } = await post("users", formData);
   if (error) {
      return { error };
   }
   redirect("/");
}
