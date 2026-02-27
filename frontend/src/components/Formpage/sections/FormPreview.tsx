import ButtonSecondary from "../../shared/elements/ButtonSecondary";
import DateInput from "../../shared/elements/DateInput";
import FormInput from "../../shared/elements/FormInput";
import ButtonPrimary from "../../shared/elements/ButtonPrimary";
import FormDisclaimer from "../elements/FormDisclaimer";

type FormInputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
};

type FormPreviewProps = {
  extractedData: Record<string, any>;
};

export default function FormPreview({extractedData}: FormPreviewProps) {
    return (
        <section className="w-full max-w-lg mx-auto my-6 mt-10 mb-8">
            <form className="space-y-6">
                <FormInput placeholder="Name" value={extractedData.full_name || ""}/>
                <FormInput placeholder="Father's Name" value={extractedData.father_name || ""}/>
                <DateInput placeholder="DOB" value={extractedData.dob || ""}/>
                <ButtonPrimary label="Verify"/>
                <FormDisclaimer />
                <ButtonSecondary label="Try another file" />
            </form>
        </section>
    );
}