export default function FeatureSection() {
    return (
        <section className="px-4 md:px-10 lg:px-20 py-16 md:py-24 bg-background-light dark:bg-background-dark">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col gap-4 text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">How FormFly Works</h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">FormFly simplifies form filling in three easy steps, so you can get back to what matters.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark shadow-sm">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                            <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                                <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm-4.1,72.58C202.61,189,146.12,213.9,128,218.42c-18.12-4.52-74.61-29.41-75.9-105.84V56h152Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">1. Upload Your PDF</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Securely upload your PDF document to our encrypted platform.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark shadow-sm">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                            <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                                <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm94.39,41.22a8,8,0,0,1-11.08-11.64A80,80,0,1,0,62.39,150.39c7.15-8.42,14.27-16.35,22.39-24.57H64a8,8,0,0,1,0-16H95.14A96.44,96.44,0,0,1,128,32a96,96,0,1,1-41.22,184.39,8,8,0,0,1,11-11.64A80.06,80.06,0,0,0,212,132c-7.15,8.42-14.27,16.35-22.39,24.57H208a8,8,0,0,1,0,16H176.86A95.53,95.53,0,0,1,128,224C120.31,224,112.8,223,105.61,221.22a8,8,0,0,1,5.5-15.1,80,80,0,0,0,119.28-84.9Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">2. AI Data Extraction</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Our AI identifies and extracts data. Review and confirm the fields.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark shadow-sm">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                            <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">3. Autofill Forms</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">FormFly instantly fills online forms with the extracted data, accurately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}