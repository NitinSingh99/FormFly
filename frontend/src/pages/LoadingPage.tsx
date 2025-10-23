import FormDisclaimer from "../components/Formpage/elements/FormDisclaimer";
import LoadingBar from "../components/LoadingPage/elements/LoadingBar";
import LoadingSpinner from "../components/LoadingPage/elements/LoadingSpinner";

export default function LoadingPage() {
    return (
        <div>
            <main className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-160px)]">
                <div className="w-full max-w-md mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <LoadingSpinner />
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground-light dark:text-foreground-dark mb-2">Processing Document...</h1>
                        <p className="text-lg text-muted-light dark:text-muted-dark">Your document is being analyzed.</p>
                        <LoadingBar />
                        <FormDisclaimer />
                    </div>
                </div>
            </main>
        </div>
    );
}