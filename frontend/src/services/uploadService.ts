import axios from "axios";
import { ApiResponse } from "../types/ApiResponse";

export const uploadService = {
    sendFile: async (file: File, url: string): Promise<ApiResponse> => {
        const headers = { headers: { "Content-Type": "multipart/form-data" } };
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post<ApiResponse>(url, formData, headers);
            return response.data;
        } catch (error: any) {
            return { success: false, message: error.response?.data.message || error.message };
        }
    }
};
