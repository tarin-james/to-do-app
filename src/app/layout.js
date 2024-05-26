"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  console.log(window.innerHeight)
  return (
    <html lang="en">
      <body className={inter.className} style = {{minHeight: window.innerHeight}}>
      <header>
        <h1>Personal To-Do List</h1>
      </header>
      {children}
      <footer>
        Tarin James ©2024
      </footer>
      </body>
    </html>
  );
}
