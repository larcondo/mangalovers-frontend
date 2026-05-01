import styles from "./index.module.css";
import { useState } from "react";
import useCreatePrintFormat from "@hooks/graphql/useCreatePrintFormat";

import Modal from "@components/Modal";
import TextInput from "@components/TextInput";
import SuccessPopup from "@components/SuccessPopup";

const ModalNewPrintFormat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const { createPrintFormat, loading } = useCreatePrintFormat();

  const hideModal = () => {
    setIsOpen(false);
    setName("");
    setDescription("");
  };

  const showModal = () => setIsOpen(true);

  const handleClick = async () => {
    if (!name) return;

    try {
      const res = await createPrintFormat(name, description);
      console.log(res?.createPrintFormat);
      if (res) {
        hideModal();
        setStatusMessage(`Se agregó el formato ${res.createPrintFormat.name}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={showModal}>+ Formato</button>

      <Modal isOpen={isOpen} onClose={hideModal}>
        <div className={styles.container}>
          <h2>Nuevo Formato</h2>

          <TextInput
            id="print-format-name"
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextInput
            id="print-format-description"
            label="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

export default ModalNewPrintFormat;
