import { API_ENDPTS } from "../config/api";
import { sendFile } from "../utils/httpRequest";

export const handleUpload = async (file: File) => {

    if (!file) return alert("Please select a file first!");

    const response = await sendFile(file, API_ENDPTS.uploadFile);

    if (response?.success) {
        alert(response.message || "File upload succesfull!");
    } else {
        alert(response.message || "File upload failed");
    }
}