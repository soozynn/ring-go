"use client";

import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";
import Step4Form from "./Step4Form";
import Step5Form from "./Step5Form";

interface GroupFormByStepProps {
  step: number;
  formData: GroupFormDataProps;
  setFormData: (data: Partial<GroupFormDataProps>) => void;
}

export interface GroupFormDataProps {
  name: string;
  description: string;
  category: string;
  rules: string;
  startDate: string;
  endDate?: string;
  noEndDate: boolean;
  capacity: number;
  isPublic: boolean;
}

export default function GroupFormByStep({
  step,
  formData,
  setFormData,
}: GroupFormByStepProps) {
  switch (step) {
    case 1:
      return <Step1Form data={formData} setData={setFormData} />;
    case 2:
      return <Step2Form data={formData} setData={setFormData} />;
    case 3:
      return <Step3Form data={formData} setData={setFormData} />;
    case 4:
      return <Step4Form data={formData} setData={setFormData} />;
    case 5:
      return <Step5Form data={formData} setData={setFormData} />;
    default:
      return <div>존재하지 않는 단계입니다.</div>;
  }
}
