import DateInput from "../../shared/elements/DateInput";
import FormInput from "../../shared/elements/FormInput";
import SubmitButton from "../../shared/elements/SubmitButton";


export default function FormPreview() {
    return (
        <section className="w-full max-w-lg mx-auto my-6 mt-14">
            <form className="space-y-6">
                <FormInput placeholder="Name" />
                <FormInput placeholder="Email" />
                <FormInput placeholder="Address" />
                <DateInput placeholder="DOB" />
                <SubmitButton label="Verify"/>
            </form>
        </section>
    );
}