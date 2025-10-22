import { Dispatch, SetStateAction } from "react";

export const hideLoader = (startTime: number, setLoading: Dispatch<SetStateAction<boolean>>, minTime = 500) => {
    const elapsed = Date.now() - startTime;
    const remaining = minTime - elapsed;

    if (remaining > 0) {
        setTimeout(() => setLoading(false), remaining);
    } else {
        setLoading(false);
    }
}