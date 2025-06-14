"use client";

// import Image from "next/image";
import { useEffect, useState } from "react";
// import phoneFrame from "@/public/phone-frame.png";

export default function PhoneFrameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <div className="w-full h-screen overflow-y-auto">{children}</div>;
  }

  return (
    <div className="relative w-[390px] h-[844px] overflow-hidden rounded-3xl shadow-lg bg-black">
      {/* 목업 프레임 */}
      {/* <Image
        src={phoneFrame}
        alt="Phone Frame"
        fill
        className="z-0 object-cover pointer-events-none select-none"
      /> */}
      {/* 앱 콘텐츠 */}
      <div className="absolute z-10 inset-0 overflow-y-auto bg-white">
        {children}
      </div>
    </div>
  );
}
