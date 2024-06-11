
import { Poppins } from "next/font/google";

import Providers from "@/context/Providers";
import "@/app/globals.css";
import Header from "@/components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata = {
  title: "Carrefour",
  description:"Mini kata ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-bg text-font"}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
