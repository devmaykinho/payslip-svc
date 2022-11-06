export interface FileStoragePort {
  updload: (file: Buffer) => Promise<string>;
  getPrivateUrl: (fileKey: string) => Promise<string>;
  getPublicUrl: (fileKey: string) => Promise<string>;
}
