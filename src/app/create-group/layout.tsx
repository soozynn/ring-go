"use client";

import StepIndicator from "../components/create-group/StepIndicatorList";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FooterButton from "../components/create-group/FooterButton";
import { ChevronLeft } from "lucide-react";
// import GroupFormByStep from "../components/create-group/GroupFormByStep";

export default function CreateGroupLayout() {
  const totalSteps = 5;
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    rules: "",
    startDate: "",
    endDate: "",
    noEndDate: false,
    numberOfPeople: 1,
    isPublic: false,
  });

  const handleNext = () => {
    if (isLastStep) {
      // TODO: API 호출하여 정보 넘기기
      // TODO: 각각의 목록이 입력되었을때만 활성화
      router.push("/");
    } else {
      setStep((prev) => prev + 1);
      setIsActive(true);
      setFormData((prev) => prev);
    }
  };

  useEffect(() => {
    const isStep1Filled =
      formData.name.trim() !== "" && formData.description.trim() !== "";
    const isStep2Filled = formData.category.trim() !== "";
    const isStep3Filled = formData.rules.trim() !== "";
    const isStep4Filled =
      formData.startDate.trim() !== "" &&
      (formData.noEndDate || formData.endDate?.trim() !== "");
    const isStep5Filled =
      formData.numberOfPeople > 0 && typeof formData.isPublic === "boolean";

    const isAllFilled =
      isStep1Filled &&
      isStep2Filled &&
      isStep3Filled &&
      isStep4Filled &&
      isStep5Filled;

    setIsLastStep(step === totalSteps && isAllFilled);
  }, [step, formData]);

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
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* <GroupFormByStep
          step={step}
          formData={formData}
          setFormData={setFormData}
        /> */}
      </div>

      {/* 하단 버튼 */}
      <FooterButton
        onNext={handleNext}
        isLastStep={isLastStep}
        isActive={isActive}
      />
    </div>
  );
}
