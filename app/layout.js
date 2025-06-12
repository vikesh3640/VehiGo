import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VehiGo",
  description: "Find your Dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-white.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
         
          <footer className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between text-gray-700">
                <div className="hidden md:block w-1/3"></div>
                <div className="text-center w-full md:w-1/3 mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold">🚀 VehiGo</h2>
                  <p className="text-sm mt-1">Made with 💗 & React + Tailwind</p>
                  <p className="text-sm mt-1">Vikesh</p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition" aria-label="Twitter">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.41 8.41 0 01-2.7 1.03A4.23 4.23 0 0016.1 4c-2.33 0-4.21 1.9-4.21 4.24 0 .33.03.65.1.96-3.5-.18-6.6-1.86-8.68-4.42a4.32 4.32 0 00-.57 2.13c0 1.47.74 2.77 1.88 3.53a4.15 4.15 0 01-1.91-.54v.06c0 2.05 1.44 3.76 3.36 4.15a4.2 4.2 0 01-1.9.07c.54 1.68 2.1 2.9 3.95 2.93A8.5 8.5 0 014 19.54a11.97 11.97 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68v-.53c.8-.58 1.5-1.3 2.05-2.12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition" aria-label="Facebook">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8.9v-2.89h1.54V9.41c0-1.53.92-2.38 2.32-2.38.67 0 1.38.12 1.38.12v1.52h-.78c-.77 0-1.01.48-1.01.97v1.17h1.72l-.28 2.89h-1.44v6.99C18.34 21.13 22 17 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition" aria-label="YouTube">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 15l5.2-3L10 9v6zm12-3c0-2.21-.18-3.65-.58-4.71-.35-.94-1.02-1.61-1.96-1.96C18.65 5.18 17.21 5 15 5H9C6.79 5 5.35 5.18 4.29 5.58c-.94.35-1.61 1.02-1.96 1.96C2.18 8.35 2 9.79 2 12c0 2.21.18 3.65.58 4.71.35.94 1.02 1.61 1.96 1.96C5.35 18.82 6.79 19 9 19h6c2.21 0 3.65-.18 4.71-.58.94-.35 1.61-1.02 1.96-1.96.4-1.06.58-2.5.58-4.71z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center text-xs text-gray-400 mt-8">
                © {new Date().getFullYear()} VehiGo. All rights reserved.
              </div>
            </div>
          </footer>

        </body>
      </html>
    </ClerkProvider>
  );
}
