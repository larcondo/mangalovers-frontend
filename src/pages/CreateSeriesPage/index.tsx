import styles from "./index.module.css";
import { useState } from "react";
import useSearchArtists from "@hooks/graphql/useSearchArtists";
import useSearchPublishers from "@hooks/graphql/useSearchPublishers";
import useSearchPrintFormats from "@hooks/graphql/useSearchPrintFormats";
import useCreateSeries from "@hooks/graphql/useCreateSeries";
import type { ImageToUpload } from "@/types";
import { uploadSeriesCover } from "@services/uploads";

import PageContainer from "@components/PageContainer";
import TextInput from "@components/TextInput";
import Switch from "@components/Switch";
import SearchBox from "@components/SearchBox";
import ImageInput from "@components/ImageInput";
import SuccessPopup from "@components/SuccessPopup";
import ModalNewArtist from "./ModalNewArtist";
import ModalNewPrintFormat from "./ModalNewPrintFormat";
import ModalNewPublisher from "./ModalNewPublisher";

const CreateSeriesPage = () => {
  const [name, setName] = useState("");
  const [writerId, setWriterId] = useState<string>();
  const [illustratorId, setIllustratorId] = useState<string>();
  const [publisherId, setPublisherId] = useState<string>();
  const [printFormatId, setPrintFormatId] = useState<string>();
  const [isSingleVolume, setIsSingleVolume] = useState(false);
  const [cover, setCover] = useState<ImageToUpload>();
  const [statusMessage, setStatusMessage] = useState("");

  const [writerQuery, setWriterQuery] = useState("");
  const [illustratorQuery, setIllustratorQuery] = useState("");
  const [publisherQuery, setPublisherQuery] = useState("");
  const [printFormatQuery, setPrintFormatQuery] = useState("");

  const { data: dataW, editing: searchingWriter } = useSearchArtists({
    query: writerQuery,
  });
  const { data: dataI, editing: searchingIllustrator } = useSearchArtists({
    query: illustratorQuery,
  });
  const { data: dataP, editing: searchingPublisher } = useSearchPublishers({
    query: publisherQuery,
  });
  const { data: dataF, editing: searchingPrintFormat } = useSearchPrintFormats({
    query: printFormatQuery,
  });

  const { createSeries, loading } = useCreateSeries();

  const onSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!cover) return;

    try {
      if (!writerId || !illustratorId || !printFormatId || !publisherId) return;

      const res1 = await uploadSeriesCover(cover);

      if (res1) {
        const urlCover = res1.url;

        const res2 = await createSeries({
          name,
          writerId,
          illustratorId,
          printFormatId,
          publisherId,
          isSingleVolume,
          urlCover,
        });
        if (res2) {
          setStatusMessage(
            `Se agregó correctamente la serie: ${res2.createSeries.name}`,
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageContainer>
      <h1 className="page-title">Agregar Nueva Serie</h1>

      <div className={styles.buttonsContainer}>
        <ModalNewArtist />
        <ModalNewPrintFormat />
        <ModalNewPublisher />
      </div>

      <form onSubmit={onSubmit} className={styles.createForm}>
        <section className={styles.sectionImage}>
          <ImageInput id="cover-input" image={cover} setImage={setCover} />
        </section>
        <section className={styles.sectionFields}>
          <TextInput
            id="name"
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />

          <SearchBox
            id="search-writer"
            name="search-writer"
            label="Guión *"
            searching={searchingWriter}
            isSelected={writerId !== undefined}
            value={writerQuery}
            setValue={setWriterQuery}
            results={dataW ? dataW.searchArtists : []}
            onSelection={(e) => setWriterId(e.id)}
          />

          <SearchBox
            id="search-illustrator"
            name="search-illustrator"
            label="Dibujo *"
            searching={searchingIllustrator}
            isSelected={illustratorId !== undefined}
            value={illustratorQuery}
            setValue={setIllustratorQuery}
            results={dataI ? dataI.searchArtists : []}
            onSelection={(e) => setIllustratorId(e.id)}
          />

          <SearchBox
            id="search-publisher"
            name="search-publisher"
            label="Editorial *"
            searching={searchingPublisher}
            isSelected={publisherId !== undefined}
            value={publisherQuery}
            setValue={setPublisherQuery}
            results={dataP ? dataP.searchPublishers : []}
            onSelection={(e) => setPublisherId(e.id)}
          />

          <SearchBox
            id="search-print"
            name="search-print"
            label="Formato *"
            searching={searchingPrintFormat}
            isSelected={printFormatId !== undefined}
            value={printFormatQuery}
            setValue={setPrintFormatQuery}
            results={dataF ? dataF.searchPrintFormats : []}
            onSelection={(e) => setPrintFormatId(e.id)}
          />

          <div className={styles.switchContainer}>
            <Switch
              id="single-volume"
              isChecked={isSingleVolume}
              onChange={(e) => setIsSingleVolume(e.target.checked)}
            />
            <span>Tomo único</span>
          </div>
        </section>

        <section className={styles.sectionButtons}>
          <button
            type="submit"
            disabled={
              !(
                illustratorId &&
                writerId &&
                publisherId &&
                printFormatId &&
                cover
              ) || loading
            }
          >
            Agregar
          </button>
        </section>
      </form>

      <SuccessPopup
        message={statusMessage}
        onClose={() => setStatusMessage("")}
      />
    </PageContainer>
  );
};

export default CreateSeriesPage;
