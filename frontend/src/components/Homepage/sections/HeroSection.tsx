import heroBg from '../../../assets/images/hero.png';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const navigate = useNavigate();
    return (
        <section className="px-4 md:px-10 lg:px-20 py-16 md:py-24">
            <div className="mx-auto max-w-5xl">
                <div className="flex min-h-[480px] flex-col gap-8 rounded-xl bg-cover bg-center bg-no-repeat items-start justify-end p-8 md:p-12" style={{
                    backgroundImage:
                        `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%), url(${heroBg})`
                }}>
                    <div className="flex flex-col gap-4 text-left max-w-3xl">
                        <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">Autofill forms from any document with AI</h1>
                        <p className="text-gray-200 text-base md:text-lg">
                            FormFly securely extracts data from your PDFs and automatically fills out online forms, saving you time and reducing errors.
                        </p>
                    </div>
                    <button onClick={() => { navigate("/form") }} className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors">
                        <span className="truncate">Get Started for Free</span>
                    </button>
                </div>
            </div>
        </section>
    )
}