import { Class } from "types/sanity.documents";
import { sanityClient } from "@lib/sanity";

const allClassQuery = `*[_type == "class"]{...,}`;

export async function getAllClasses(): Promise<Class[]> {
  return await sanityClient.fetch<Class[]>(allClassQuery);
}
