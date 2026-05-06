import styles from "./index.module.css";
import { useState } from "react";
import useCreatePublisher from "@hooks/graphql/useCreatePublisher";

import Modal from "@components/Modal";
import TextInput from "@components/TextInput";
import SuccessPopup from "@components/SuccessPopup";

const ModalNewPublisher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const { createPublisher, loading } = useCreatePublisher();

  const hideModal = () => {
    setIsOpen(false);
    setName("");
  };

  const showModal = () => setIsOpen(true);

  const handleClick = async () => {
    if (!name) return;

    try {
      const res = await createPublisher(name);
      console.log(res?.createPublisher);
      if (res) {
        hideModal();
        setStatusMessage(`Se agregó la editorial ${res.createPublisher.name}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={showModal}>+ Editorial</button>
      <Modal isOpen={isOpen} onClose={hideModal}>
        <div className={styles.container}>
          <h2>Nueva Editorial</h2>

          <TextInput
            id="publisher-name"
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

export default ModalNewPublisher;
