interface ImportMetaEnv {
  readonly VITE_APOLLO_SERVER_URL: string;
  readonly VITE_IMG_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
