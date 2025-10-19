import { SubmitButtonProps } from "../../../types/SubmitButtonProps";

export default function SubmitButton({label, id}: SubmitButtonProps){
    return (
        <button id={id} className="w-full bg-primary px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg">{label}</button>
    );
}