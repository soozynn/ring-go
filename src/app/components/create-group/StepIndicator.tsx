interface StepIndicatorProps {
  current: number;
  total: number;
}

export default function StepProgressIndicator({
  current,
  total,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }, (_, i) => {
        const step = i + 1;
        const isActive = step === current;

        return (
          <div
            key={step}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold 
              ${
                isActive ? "bg-black text-white" : "bg-gray-200 text-gray-400"
              }`}
          >
            {step}
          </div>
        );
      })}
    </div>
  );
}
