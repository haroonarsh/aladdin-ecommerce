import { cookies } from "next/headers";
import Page from "./home/page";

export default async function Home() {

    const token = await cookies().get("jwt")?.value;
    console.log("HomeToken:", token); // Log the token value
  return (
    <>
      <Page token={token} />
    </>
  );
}
