import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "./components/banner";
import Image from "next/image";



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
        <div className="flex justify-between w-full h-auto text-white">
          <Banner />
        </div>
        <div>  
          {children}
        </div>
        <div>  
          <div className="fixed bottom-0 -right-10 invisible lg:visible">
              <Image 
                src="/portrait.png"
                alt=''
                width={600}
                height={600}             
              />
          </div>
        </div>
        
        
        
        
      </body>
    </html>
  );
}
