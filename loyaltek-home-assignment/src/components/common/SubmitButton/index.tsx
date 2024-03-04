interface SubmitButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button
      className="rounded-md py-3 bg-blue-500 hover:bg-blue-800 transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
