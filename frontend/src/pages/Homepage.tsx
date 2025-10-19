import FeatureSection from "../components/Homepage/sections/FeatureSection";
import HeroSection from "../components/Homepage/sections/HeroSection";
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