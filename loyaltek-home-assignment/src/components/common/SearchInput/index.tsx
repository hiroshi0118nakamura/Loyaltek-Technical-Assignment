import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="w-full border dark:border-white border-black dark:text-white text-black rounded-md p-3 flex items-center gap-3">
      <FaSearch className="dark:fill-white fill-black" />
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent focus:outline-none w-full"
      />
    </div>
  );
};
