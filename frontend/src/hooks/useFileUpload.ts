import { useRef, useState } from "react";

export function useFileUpload(allowedType = "application/pdf") {
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (!selectedFile) return;

        if (selectedFile.type !== allowedType) {
            alert("Only PDF files are allowed!");
            return;
        }

        setFile(selectedFile);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];

        if (!droppedFile) return;

        if (droppedFile.type !== allowedType) {
            alert("Only PDF files are not allowed!");
            return;
        }

        setFile(droppedFile);
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    return {file, setFile, inputRef, handleFileChange, handleDragOver, handleDrop};
}