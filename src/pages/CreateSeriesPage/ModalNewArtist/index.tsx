import styles from "./index.module.css";
import { useState } from "react";
import useCreateArtist from "@hooks/graphql/useCreateArtist";

import Modal from "@components/Modal";
import TextInput from "@components/TextInput";
import SuccessPopup from "@components/SuccessPopup";

const ModalNewArtist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const { createArtist, loading } = useCreateArtist();

  const hideModal = () => {
    setIsOpen(false);
    setName("");
  };

  const showModal = () => setIsOpen(true);

  const handleClick = async () => {
    if (!name) return;

    try {
      const res = await createArtist(name);
      console.log(res?.createArtist);
      if (res) {
        hideModal();
        setStatusMessage(`Se agregó correctamente ${res.createArtist.name}`);
      }
      // setName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={showModal}>+ Artista</button>
      <Modal isOpen={isOpen} onClose={hideModal}>
        <div className={styles.container}>
          <h2>Nuevo Artista</h2>
          <TextInput
            id="artist-name"
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
          <section className={styles.buttonsSection}>
            <button onClick={hideModal}>Cancelar</button>
            <button onClick={handleClick} disabled={!name || loading}>
              Agregar
            </button>
          </section>
        </div>
      </Modal>
      <SuccessPopup
        message={statusMessage}
        onClose={() => setStatusMessage("")}
      />
    </>
  );
};

export default ModalNewArtist;
