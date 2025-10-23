export default function LoadingSpinner() {
    return (
        <>
            <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 border-b-4 border-accent rounded-full animate-spin-slow"
                    style={{ animationDirection: "reverse", animationDuration: "2s" }} ></div>
                <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-5xl animate-pulse-gentle">
                        description
                    </span>
                </div>
            </div>
        </>
    );
}