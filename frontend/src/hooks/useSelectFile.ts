import { useRef, useState } from "react";
import { getPdfPageCount } from "../utils/countPage";

export function useSelectFile(allowedType = "application/pdf") {
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;

        if (selectedFile.type !== allowedType) {
            alert("Only PDF files are allowed!");
            return;
        }

        const pageCount = await getPdfPageCount(selectedFile);
        if (pageCount > 3) {
            alert('Number of pages cannot be more than 3');
            return;
        }

        setFile(selectedFile);
    };

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (!droppedFile) return;
        if (droppedFile.type !== allowedType) {
            alert("Only PDF files are not allowed!");
            return;
        }

        const pageCount = await getPdfPageCount(droppedFile);
        if (pageCount > 3) {
            alert('Number of pages cannot be more than 3');
            return;
        }

        setFile(droppedFile);
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    return { file, setFile, inputRef, handleFileChange, handleDragOver, handleDrop };
}