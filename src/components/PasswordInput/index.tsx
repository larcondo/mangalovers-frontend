import styles from "./index.module.css";

interface PasswordInputProps {
  id: string;
  label?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({
  id,
  value,
  label = "Label",
  onChange,
}: PasswordInputProps) => {
  return (
    <div className={styles.passwordInput}>
      <label htmlFor={id}>{label}</label>
      <input
        type="password"
        name={id}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PasswordInput;
