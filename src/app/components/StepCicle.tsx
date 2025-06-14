interface StepCircleProps {
  step: number;
  isActive: boolean;
}

export default function StepProgressIndicator({
  step,
  isActive,
}: StepCircleProps) {
  return (
    <div
      key={step}
      className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${
        isActive ? "bg-black text-white" : "bg-gray-200 text-gray-400"
      }`}
    >
      {step}
    </div>
  );
}
