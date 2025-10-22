import { useState } from "react";
import { API_ENDPTS } from "../config/api";
import { sendFile } from "../utils/httpRequest";
import { hideLoader } from "../utils/hideLoader";

export function useUploadFile() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const handleUpload = async (file: File) => {
        if (!file) return alert("Please select a file first!");
        setLoading(true);
        const minLoaderTime = 500; // in milliseconds
        const start = Date.now();
        try {
            const response = await sendFile(file, API_ENDPTS.uploadFile);
            hideLoader(start, setLoading);
            // setTimeout(() => {
            if (response?.success) {
                setMessage(response.message || "File upload successful!");
            } else {
                setError(true);
                setMessage(response.message || "File upload failed");
            }
            // }, 700);
        } catch (err) {
            console.log(err);
            hideLoader(start, setLoading);
            setError(true);
            setMessage("Something went wrong during upload");
        }
    }

    return { handleUpload, loading, message, error };
}