import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import {
  Hedvig_Letters_Sans,
  Hedvig_Letters_Serif,
  Imperial_Script,
  Harmattan,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const hedvigSans = Hedvig_Letters_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const hedvigSerif = Hedvig_Letters_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const imperial = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const harmattan = Harmattan({
  weight: "400",
  variable: "--font-harmattan",
});

export const metadata: Metadata = {
  title: "la flaneur des jardins",
  description: "A minimalist garden landscape designer website.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        " mx-auto",
        `${hedvigSans.variable} ${hedvigSerif.variable} ${imperial.variable} ${harmattan.variable}`,
      )}
    >
      <body className="min-h-full flex flex-col bg:background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
