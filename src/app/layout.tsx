import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "./components/banner";
import Image from "next/image";
import { useAnimate } from "framer-motion";





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steve Edmondson Portfolio",
  description: "Created in Next.js",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#1C232B] w-full h-auto bg-[url('/pelican.jpg')] bg-fixed 2xl:bg-right 2xl:bg-contain bg-cover bg-center bg-no-repeat">
        
      <body className={inter.className}>
        <div className="block w-full h-auto text-white">
          <Banner />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">  
                       
            <div
              className="container bg-gray-400/20 text-white w-[80vw] lg:w-[45vw] h-auto mx-auto lg:ml-[10rem] mt-[5rem] mb-[10rem] text-center rounded-3xl backdrop-blur-md border-slate-400 border-2 shadow-slate-500 shadow-lg">
            
              {children}
            </div>
          
          <div className="flex justify-center items-end mb-0">  
            <div className="hidden lg:block lg:fixed bottom-0 -right-5">
                <Image 
                  src="/portrait.png"
                  alt=''
                  width={600}
                  height={200}             
                />
            </div>
          </div>
          
        </div>
        
        
        
        
      </body>
    </html>
  );
}
