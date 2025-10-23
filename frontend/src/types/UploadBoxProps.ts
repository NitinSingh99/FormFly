export type UploadBoxProps = {
    handleUpload: (file: File) => Promise<void>;
    message? : string;
    error? : boolean;
}