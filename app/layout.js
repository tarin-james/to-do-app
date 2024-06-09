import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

import Login from "./Login";
import SessionProvider from "./SessionProvider";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {

  const session = await getServerSession(authOptions)
  return (
    //Run on the server, the header and footer and children are all displayed inside of the session provider
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <header>
            <h1>Personal To-Do List</h1>
          </header>
          {session ? children : <Login></Login>}
          <footer>Tarin James ©2024</footer>
        </SessionProvider>
      </body>
    </html>
  );
}
