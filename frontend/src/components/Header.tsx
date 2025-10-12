declare global {
  interface Window {
    toggleTheme: () => void;
  }
}

export default function Header() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 px-10 py-4">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                <div className="w-8 h-8 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_6_535)">
                            <path
                                clipRule="evenodd"
                                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                                fill="currentColor"
                                fillRule="evenodd"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_6_535">
                                <rect fill="white" height="48" width="48"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <h2 className="text-xl font-bold">FormFly</h2>
            </div>

            <div className="flex items-center gap-6">
                <nav className="hidden md:flex items-center gap-6">
                    <a className="text-sm font-medium hover:text-primary" href="#">Product</a>
                    <a className="text-sm font-medium hover:text-primary" href="#">Pricing</a>
                    <a className="text-sm font-medium hover:text-primary" href="#">Resources</a>
                </nav>

                <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors">
                    <span className="truncate">Get Started</span>
                </button>

                <button
                    onClick={() => window.toggleTheme()}
                    className="relative flex items-center justify-center rounded-lg h-10 w-10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <span className="material-symbols-outlined dark:hidden">light_mode</span>
                    <span className="material-symbols-outlined hidden dark:inline">dark_mode</span>
                </button>

            </div>
        </header>

    );
}
