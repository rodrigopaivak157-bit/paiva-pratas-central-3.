import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paiva Pratas | Central de Atendimento",
  description: "Painel administrativo da Paiva Pratas."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
