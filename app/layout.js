import Header from "@/components/Header/Header";
import "./globals.css";
import "@/components/Header/header.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins ({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700']
});

export const metadata = {
  title: "Devender Singh - Front End Engineer",
  description: "Welcome to Devender Singh's Front End Engineer portfolio. I'm a passionate and skilled front end developer with experience in creating modern and responsive websites. Explore my projects and skills to see how I can help bring your ideas to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
          {children}
          <Analytics />
        <Footer />
      </body>
    </html>
  );
}
