import { SubmitButtonProps } from "../../../types/SubmitButtonProps";

export default function SubmitButton({ label, id, className, onClick}: SubmitButtonProps) {
    
    const finalClassName = `${className} bg-primary px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg w-full text-foreground-dark`;

    return (
        <button id={id} className={finalClassName} onClick={onClick}>{label}</button>
    );
}