import { useFormStatus } from "react-dom";

export default function SubmitButton({ title, className }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={` ${className} ${pending && "animation"}`}
        >
            {pending ? "Submitting..." : title}
        </button>
    );
}