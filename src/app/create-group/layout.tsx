"use client";

import StepIndicator from "../components/create-group/StepIndicator";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import FooterButton from "../components/create-group/FooterButton";
import { ChevronLeft } from "lucide-react";

interface CreateGroupLayoutProps {
  children: ReactNode;
  step: number;
  totalSteps?: number;
  isLastStep?: boolean;
}

export default function CreateGroupLayout({
  children,
  totalSteps = 5,
  isLastStep = false,
}: CreateGroupLayoutProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (isLastStep) {
      // TODO: API 호출하여 정보 넘기기
      // TODO: 각각의 목록이 입력되었을때만 활성화
      router.push("/");
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between pt-6">
      {/* 상단 헤더 */}
      <div className="flex items-center justify-between p-4">
        <button onClick={() => router.back()}>
          <ChevronLeft className="w-8 h-8 text-black" />
        </button>
        <StepIndicator current={step} total={totalSteps} />
      </div>

      {/* 중간 컨텐츠 */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">{children}</div>

      {/* 하단 버튼 */}
      <FooterButton onNext={handleNext} isLastStep={isLastStep} />
    </div>
  );
}
