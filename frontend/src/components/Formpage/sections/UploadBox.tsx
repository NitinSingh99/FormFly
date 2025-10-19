export default function UploadBox() {
    return (
        <section className="w-full max-w-2xl mx-auto my-12" id="upload-section">
            <div className="w-full bg-card-light dark:bg-card-dark border-2 border-dashed border-border-light dark:border-border-dark rounded-xl p-8 md:p-12 text-center transition-all hover:border-primary dark:hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 cursor-pointer">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-4xl">upload_file</span>
                    </div>
                    <p className="text-xl font-semibold text-foreground-light dark:text-foreground-dark">Drag &amp; drop your PDF here</p>
                    <p className="text-muted-light dark:text-muted-dark">or</p>
                    <label className="cursor-pointer bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all shadow-soft">
                        Choose PDF
                    </label>
                    <input className="hidden" id="file-upload" type="file" />
                </div>
            </div>
        </section>
    );
}