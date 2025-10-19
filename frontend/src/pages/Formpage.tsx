import IntroSection from "../components/Formpage/sections/IntroSection"
import UploadBox from "../components/Formpage/sections/UploadBox";
import FormPreview from "../components/Formpage/sections/FormPreview";

export default function FormPage(){
    return (
        <>
            <IntroSection />
            <UploadBox />
            <FormPreview />
        </>
    );
}