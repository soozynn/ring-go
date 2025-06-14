interface FooterButtonProps {
  onNext?: () => void;
  isLastStep?: boolean;
  isActive: boolean;
}

export default function FooterButton({
  onNext,
  isLastStep,
  isActive,
}: FooterButtonProps) {
  return (
    <div className="p-4 bg-[#FFDF57] rounded-t-2xl">
      <button
        className="w-full h-12 text-center text-lg font-semibold text-gray-800"
        onClick={onNext}
        disabled={!isActive}
      >
        {isLastStep ? "모임 만들기" : "다음으로"}
      </button>
    </div>
  );
}
