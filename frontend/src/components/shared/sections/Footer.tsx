export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-5xl px-4 md:px-10 lg:px-20 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Privacy Policy</a>
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Terms of Service</a>
                        <a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Contact Us</a>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 FormFly. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}