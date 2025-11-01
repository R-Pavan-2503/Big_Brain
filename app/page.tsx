'use client'

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Unauthenticated, Authenticated, AuthLoading } from "convex/react";
import { Inter } from "next/font/google";
import Image from "next/image";

// ✅ Call the font loader at the top level
const inter = Inter({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black ${inter.className}`}>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <p>Welcome, user!</p>
      </Authenticated>
      <AuthLoading>
        <p>Still loading</p>
      </AuthLoading>
    </div>
  );
}
