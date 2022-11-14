interface FileStorageInput {
  file: File;
  fileKey: string;
}

export interface FileStoragePort {
  updload: (file: FileStorageInput) => Promise<void>;
  remove: (fileKey: string) => Promise<void>;
  getPrivateUrl: (fileKey: string) => Promise<string>;
  getPublicUrl: (fileKey: string) => Promise<string>;
}
