import IntroSection from "../components/Formpage/sections/IntroSection"
import UploadBox from "../components/Formpage/sections/UploadBox";
import FormPreview from "../components/Formpage/sections/FormPreview";
import AnimatedPage from "../components/shared/elements/AnimatePage";
import LoadingPage from "./LoadingPage";
import { useUploadFile } from "../hooks";

export default function FormPage() {
    const { handleUpload, loading, message, error} = useUploadFile();
    return (
        <>
            {
                loading ?
                    (<>
                        <AnimatedPage>
                            <LoadingPage />
                        </AnimatedPage>
                    </>) :
                    (
                        <AnimatedPage>
                            <IntroSection />
                            <UploadBox handleUpload={handleUpload} message={message} error={error}/>
                            <FormPreview />
                        </AnimatedPage>
                    )
            }
        </>
    );
}