'use client'
import { SessionProvider as Provider } from 'next-auth/react';

import React from 'react'

// exposes session to the entire program
export default function SessionProvider({children, session}) {
  return (
    <Provider session={session}>{children}</Provider>
  )
}
