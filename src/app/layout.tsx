import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import Navbar from "./layout/navbar/navbar";
import Footer from "./layout/footer/footer";
import "../styles/Main.scss";
import StorePovider from "./storePovider";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clicon",
  description: "Simple e-commerce app built with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StorePovider>
      <html lang="en">
        <body className={publicSans.className}>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
          <Suspense>
            <Navbar />
            {children}
            <Footer />
          </Suspense>
        </body>
      </html>
    </StorePovider>
  );
}
