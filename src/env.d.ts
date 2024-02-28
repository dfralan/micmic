/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    'loom'?: string;
  }
}

interface ImportMetaEnv {
  readonly FIREBASE_SERVICE_ACCOUNT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}