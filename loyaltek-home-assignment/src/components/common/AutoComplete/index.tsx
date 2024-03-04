import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IQueryArray } from "types";

interface AutoCompleteProps {
  filter: string[];
  result: string[];
  placeholder: string;
  type: keyof IQueryArray;
  addResult: (type: keyof IQueryArray, word: string) => void;
  deleteResult: (type: keyof IQueryArray, word: string) => void;
  filterResult: (type: keyof IQueryArray, word: string) => void;
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  filter,
  result,
  placeholder,
  type,
  addResult,
  deleteResult,
  filterResult,
}) => {
  const [search, setSearch] = useState<string>("");
  const addItem = (addItem: string) => {
    setSearch("");
    addResult(type, addItem);
  };

  const removeItem = (removeItem: string) => {
    deleteResult(type, removeItem);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    filterResult(type, e.target.value);
  };
  return (
    <div className="w-full relative">
      <div className="w-full border dark:border-white border-black rounded-t-md p-3 flex items-center gap-3">
        <FaSearch className="dark:fill-white fill-black" />
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent border-none focus:outline-none w-full text-black dark:text-white"
          name="search"
          value={search}
          onChange={onChange}
        />
      </div>
      <div className="w-full relative">
        <ul className="absolute z-10 w-full max-h-60 overflow-y-auto">
          {filter.map((item, index) => (
            <li
              key={index}
              onClick={() => addItem(item)}
              className="dark:bg-black bg-white hover:bg-gray-300 dark:hover:bg-gray-900 dark:border-white border-black dark:text-white text-black border-b border-x px-3 py-1 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full min-h-24 border-x border-b dark:border-white border-black rounded-b-lg flex items-start flex-wrap p-3 gap-3">
        {result.map((item, index) => (
          <div
            key={index}
            className="px-2 bg-gray-500 rounded-full flex items-center gap-2 max-h-6"
          >
            <span className="max-h-6 overflow-hidden">{item}</span>
            <button
              className="rounded-full hover:bg-gray-700"
              onClick={() => removeItem(item)}
            >
              <IoClose className="fill-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
