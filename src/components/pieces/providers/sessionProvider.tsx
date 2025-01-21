"use client";
import { NextAuthSessionProviderProps } from "../../../model";
import { SessionProvider as Session } from "next-auth/react";
export default function SessionProvider({
  children,
}: NextAuthSessionProviderProps) {
  return <Session>{children}</Session>;
}
