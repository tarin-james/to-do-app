"use client";
import {signIn} from 'next-auth/react'

export default function Login() {
  // this function brings you to the google sign in entry point after it is determined that there is no session
  return <main style={{minHeight: 'calc(113vh - 285px)'}}>
    <button onClick={(e) => {
    e.preventDefault()
    signIn('google')
  }}>Login</button>
  </main>
}
