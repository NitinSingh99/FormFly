import { useSelectFile } from "../../../hooks/index";
import { useUploadFile } from "../../../hooks/index";
import ButtonPrimary from "../../shared/elements/ButtonPrimary";
import Loader from "../../shared/elements/Loader";

export default function UploadBox() {

    const { file, inputRef, handleFileChange, handleDragOver, handleDrop } = useSelectFile();
    const { handleUpload, loading, message, error } = useUploadFile();

    return (
        <section className="w-full max-w-2xl mx-auto mt-12 mb-6" id="upload-section">
            {loading && (
                <div className="loader-overlay">
                    <Loader />
                </div>
            )}

            <div className="w-full bg-card-light dark:bg-card-dark border-2 border-dashed border-border-light dark:border-border-dark rounded-xl p-8 md:p-12 text-center transition-all hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 cursor-pointer"
                onClick={() => inputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-4xl">upload_file</span>
                    </div>
                    {file ? (<p className="text-xl font-semibold text-foreground-light dark:text-foreground-dark"> {file.name} </p>) : (<>  <p className="text-xl font-semibold text-foreground-light dark:text-foreground-dark">Drag &amp; drop your PDF here</p>
                        <p className="text-muted-light dark:text-muted-dark">or</p>
                        <label className="cursor-pointer bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all shadow-soft">
                            Choose PDF
                        </label></>)}
                    <input ref={inputRef} className="hidden" id="FileInp" type="file" onChange={handleFileChange} />
                </div>
            </div>
            <div className="mt-8 flex-col justify-center items-center">
                <div>
                    {message && (
                        <p className={`text-center font-medium ${error ? "text-red-500" : "text-primary"}`}>
                            {message}
                        </p>
                    )}
                </div>
                <div className="mt-2 flex justify-center items-center">
                    <ButtonPrimary label="Upload" className="max-w-32" id="uploadBtn" onClick={() => handleUpload(file!)} />
                </div>

            </div>
        </section>
    );
}