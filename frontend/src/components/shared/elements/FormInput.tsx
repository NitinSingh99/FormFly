import { FormInputProps } from "../../../types/FormInputProps";

export default function FormInput({ type = "text", placeholder }: FormInputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="form-input w-full px-4 py-3 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-foreground-light dark:text-foreground-dark placeholder:text-foreground-light/60 dark:placeholder:text-foreground-dark/60 [&::-webkit-datetime-edit]:text-foreground-light/60 dark:[&::-webkit-datetime-edit]:text-foreground-dark/60"
        />
    );
}

