/// <reference types="vite/client" />

/* Original data */
interface Data {
  photoset: Photoset;
}

interface Photoset {
  id: string;
  photo: Photo[];
}

interface Photo {
  id: string;
  secret: string;
  server: string;
}

/* Completed data */
interface CompleteData {
  height: number,
  data: Info[];
}

interface Info {
  id?: string;
  secret?: string;
  server?: string;
  originalsecret?: string;
  originalformat?: string;
  description?: Description;
  dates?: Dates;
}

interface Description {
  _content: string;
}

interface Dates {
  posted: string;
  taken: string;
}