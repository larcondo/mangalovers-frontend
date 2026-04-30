import styles from "./index.module.css";
import { FaUpload } from "react-icons/fa6";
import type { ImageToUpload } from "@/types";

interface ImageInputProps {
  id: string;
  image: ImageToUpload | undefined;
  setImage: React.Dispatch<React.SetStateAction<ImageToUpload | undefined>>;
}

const ImageInput = ({ id, image, setImage }: ImageInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length) {
      setImage({
        name: files[0].name,
        preview: URL.createObjectURL(files[0]),
        raw: files[0],
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <label htmlFor={id} className={styles.label}>
          {!image && (
            <div className={styles.imagePlaceholder}>
              <span>Selecciona una imagen</span>
            </div>
          )}
          {image && image.preview && (
            <>
              <div className={styles.changeImg}>
                <FaUpload />
                <p>Cambiar imagen</p>
              </div>
              <img
                src={image.preview}
                alt="Cover"
                className={styles.imagePreview}
              />
            </>
          )}
        </label>

        <input
          type="file"
          name={id}
          id={id}
          onChange={handleChange}
          hidden
          accept="image/jpeg, image/webp"
        />
        {image && (
          <div className={styles.dataContainer}>
            <span className={styles.data}>Size:</span>
            <span className={styles.data}>{image.raw.size} bytes</span>
            <span className={styles.data}>Filename:</span>
            <span className={styles.data}>{image.raw.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
