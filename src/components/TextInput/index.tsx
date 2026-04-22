import styles from "./index.module.css";

interface TextInputProps {
  id: string;
  label?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  id,
  value,
  label = "Label",
  onChange,
}: TextInputProps) => {
  return (
    <div className={styles.textInput}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;
