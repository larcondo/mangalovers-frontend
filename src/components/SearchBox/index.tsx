import styles from "./index.module.css";

interface Result {
  id: string;
  name: string;
}

interface Selection {
  id: string | undefined;
  name: string;
}

interface SearchBoxProps {
  id: string | undefined;
  name: string | undefined;
  label?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isSelected: boolean;
  onSelection: (e: Selection) => void;
  results: Result[] | undefined;
  searching?: boolean | undefined;
}

const SearchBox = ({
  id,
  name,
  label = "Search",
  value,
  setValue,
  searching = false,
  onSelection,
  results,
  isSelected,
}: SearchBoxProps) => {
  const handleSelection = (v: Result) => {
    setValue(v.name);
    onSelection(v);
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={name}
        id={id}
        autoComplete="off"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSelection({ id: undefined, name: "" });
        }}
      />
      {results && !searching && value && !isSelected && (
        <ul className={styles.lista}>
          {results.map((v) => {
            return (
              <li key={v.id} onClick={() => handleSelection(v)}>
                {v.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
