import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "../components/pieces/providers/sessionProvider";

export const metadata: Metadata = {
  title: "User Control",
  description: "Web Site for do you user control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
