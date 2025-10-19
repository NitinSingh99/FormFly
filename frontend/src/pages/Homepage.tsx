import FeatureSection from "../components/Homepage/sections/FeatureSection";
import HeroSection from "../components/Homepage/sections/HeroSection";
import { motion } from "framer-motion";
import AnimatedPage from "../components/shared/elements/AnimatePage";
export default function Homepage() {
    return (
        <>
            <AnimatedPage>
                <HeroSection />
                <FeatureSection />
            </AnimatedPage>
        </>
    );
}