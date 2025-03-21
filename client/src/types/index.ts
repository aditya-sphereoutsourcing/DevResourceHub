export interface Library {
  name: string;
  version: string;
  description: string;
  tags: string[];
  compatibility: string;
  documentationUrl: string;
}

export interface Libraries {
  c: Library[];
  cpp: Library[];
  java: Library[];
  javascript: Library[];
}
