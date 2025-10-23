import { SubmitButtonProps } from "../../../types/SubmitButtonProps";
import Loader from "./Loader";

const ButtonPrimary: React.FC<SubmitButtonProps> = ({
    label,
    id,
    className,
    onClick
}) => {
    const finalClassName = `${className} bg-primary px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg w-full text-foreground-dark`;

    return (
        <button
            id={id}
            onClick={onClick}
            className={finalClassName}
        >{label}
        </button>
    );
};

export default ButtonPrimary;