"use client";
import {signIn} from 'next-auth/react'

export default function Login() {
  return <main style={{minHeight: 'calc(113vh - 285px)'}}>
    <button onClick={(e) => {
    e.preventDefault()
    signIn('google')
  }}>Login</button>
  </main>
}
