import { SubmitButtonProps } from "../../../types/SubmitButtonProps";

export default function SubmitButton({ label, id, className }: SubmitButtonProps) {
    const finalClassName = className
        ? className
        : "w-full";
    return (
        <button id={id} className={`${className} bg-primary px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg w-full`}>{label}</button>
    );
}