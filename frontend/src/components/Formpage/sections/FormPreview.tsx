import ButtonSecondary from "../../shared/elements/ButtonSecondary";
import DateInput from "../../shared/elements/DateInput";
import FormInput from "../../shared/elements/FormInput";
import SubmitButton from "../../shared/elements/SubmitButton";
import FormDisclaimer from "../elements/FormDisclaimer";


export default function FormPreview() {
    return (
        <section className="w-full max-w-lg mx-auto my-6 mt-14 mb-8">
            <form className="space-y-6">
                <FormInput placeholder="Name" />
                <FormInput placeholder="Email" />
                <FormInput placeholder="Address" />
                <DateInput placeholder="DOB" />
                <SubmitButton label="Verify"/>
                <FormDisclaimer></FormDisclaimer>
                <ButtonSecondary label="Try another file"></ButtonSecondary>
            </form>
        </section>
    );
}