import { SubmitButtonProps } from "../../../types/SubmitButtonProps";

export default function ButtonSecondary({ label, id }: SubmitButtonProps) {
    return (
        <div className="!mt-8 text-center">
            <button id={id} className="max-w-48 px-6 py-3 border border-border-light dark:border-border-dark rounded-lg bg-card-light dark:bg-card-dark text-foreground-light
            dark:text-foreground-dark hover:bg-gray-200 dark:hover:bg-border-dark transition-all">{label}</button>
        </div>
    );
}