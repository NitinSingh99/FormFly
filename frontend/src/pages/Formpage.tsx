import IntroSection from "../components/Formpage/sections/IntroSection"
import UploadBox from "../components/Formpage/sections/UploadBox";
import FormPreview from "../components/Formpage/sections/FormPreview";
import AnimatedPage from "../components/shared/elements/AnimatePage";

export default function FormPage() {
    return (
        <>
            <AnimatedPage>
                <IntroSection />
                <UploadBox />
                <FormPreview />
            </AnimatedPage>
        </>
    );
}