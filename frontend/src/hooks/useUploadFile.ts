import { useState } from "react";
import { API_ENDPTS } from "../config/api";
import { uploadService } from "../services/uploadService";
import { hideLoader } from "../utils/hideLoader";

export function useUploadFile() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [extractedData, setExtractedData] = useState<Record<string, string>>(
    {},
  );

  const handleUpload = async (file: File) => {
    if (!file) return alert("Please select a file!");
    setLoading(true);
    setError(false);
    setMessage("");
    const start = Date.now();
    try {
      const response = await uploadService.sendFile(
        file,
        API_ENDPTS.uploadFileDirect,
      );
      hideLoader(start, setLoading);
      if (response?.success) {
        console.log("Extracted object:", response.data);
        setExtractedData(response.data || {});
        setMessage(response.message || "File upload successful!");
      } else {
        setError(true);
        setMessage(response.message || "File upload failed");
      }
    } catch (err) {
      console.log(err);
      hideLoader(start, setLoading);
      setError(true);
      setMessage("Something went wrong during upload");
    }
  };

  return { handleUpload, loading, message, error, extractedData };
}
