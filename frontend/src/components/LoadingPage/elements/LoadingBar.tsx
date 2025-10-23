export default function LoadingBar() {
    return (
        <div className="w-full bg-border-light dark:bg-border-dark rounded-full h-2.5 overflow-hidden mt-4 mb-4">
            <div className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full w-full animate-pulse"></div>
        </div>
    );
}