import type { Metadata } from "next";
import "./globals.css";
import PhoneFrameLayout from "@/app/phone-frame-layout/PhoneFrameLayout";

export const metadata: Metadata = {
  title: "Ring-go App",
  description: "링고를 통해 새로운 습관을 만들어 보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="app-frame">
          <div className="app-content overflow-y-auto">
            <PhoneFrameLayout>{children}</PhoneFrameLayout>
          </div>
        </div>
      </body>
    </html>
  );
}
