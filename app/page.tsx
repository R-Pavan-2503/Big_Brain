'use client'

import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Unauthenticated, Authenticated, AuthLoading, useMutation, useQueries, useQuery } from "convex/react";
import { Inter } from "next/font/google";
import Image from "next/image";

// ✅ Call the font loader at the top level
const inter = Inter({ weight: "400", subsets: ["latin"] });

export default function Home() {

  const documents = useQuery(api.document.getDocuments);
  const createDocument = useMutation(api.document.createDocument)

  return (
    <div className={` min-h-screen items-center justify-center bg-zinc-50 dark:bg-black ${inter.className}`} >
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <p>Welcome, user!</p>

        <button onClick={() => {
          createDocument({ title: 'Hello World' })
        }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition"
        >
          Click Me
        </button>


        {documents?.map((doc) => (
          <div key={doc._id}>{doc.title}</div>
        ))}

      </Authenticated>
      <AuthLoading>
        <p>Still loading</p>
      </AuthLoading>
    </div>
  );
}
