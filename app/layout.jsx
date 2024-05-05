// css
import "./globals.css";
// fonts
import { Inter } from "next/font/google";
// providers
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
// components
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "OnlineShop | %s",
    default: "OnlineShop",
  },
  description: "A store, For Anything You Want!",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <div>
            <Toaster position="top-center" />
          </div>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
