import Image from "next/image";
import Page from "./home/page";
import { ProtectedRoute } from "@/features/auth/ProtectedRoute";

export default function Home() {
  return (
    <>
      <ProtectedRoute>
      <Page />
      </ProtectedRoute>
    </>
  );
}
