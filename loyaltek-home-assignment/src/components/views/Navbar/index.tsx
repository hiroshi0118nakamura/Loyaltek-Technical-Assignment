import { AutoComplete, SearchInput, SubmitButton } from "components/common";
import { ChangeEvent } from "react";
import { IQueryArray } from "types";

interface NavbarViewProps {
  query: IQueryArray;
  filter: IQueryArray;
  state: boolean;
  addQuery: (type: keyof IQueryArray, value: string) => void;
  filterQuery: (type: keyof IQueryArray, value: string) => void;
  deleteQuery: (type: keyof IQueryArray, value: string) => void;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const NavbarView: React.FC<NavbarViewProps> = ({
  query,
  filter,
  state,
  addQuery,
  deleteQuery,
  filterQuery,
  name,
  onChange,
  onClick,
}) => {
  return (
    <div
      className={`h-[calc(100vh-40px)] z-10 min-w-80 max-w-80 dark:bg-black bg-white flex flex-col justify-between p-3 transition-all tablet:absolute mobile:absolute relative ${
        state ? "-left-80" : "left-0"
      }`}
    >
      <div className="flex flex-col gap-3">
        <AutoComplete
          filter={filter.set}
          result={query.set}
          placeholder="Set:"
          type="set"
          addResult={addQuery}
          deleteResult={deleteQuery}
          filterResult={filterQuery}
        />
        <AutoComplete
          filter={filter.types}
          result={query.types}
          placeholder="Types:"
          type="types"
          addResult={addQuery}
          deleteResult={deleteQuery}
          filterResult={filterQuery}
        />
        <AutoComplete
          filter={filter.subtypes}
          result={query.subtypes}
          placeholder="Subtypes:"
          type="subtypes"
          addResult={addQuery}
          deleteResult={deleteQuery}
          filterResult={filterQuery}
        />
        <AutoComplete
          filter={filter.supertypes}
          result={query.supertypes}
          placeholder="Supertypes:"
          type="supertypes"
          addResult={addQuery}
          deleteResult={deleteQuery}
          filterResult={filterQuery}
        />
        <SearchInput
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Name:"
        />
      </div>
      <SubmitButton label="Search" onClick={onClick} />
    </div>
  );
};
