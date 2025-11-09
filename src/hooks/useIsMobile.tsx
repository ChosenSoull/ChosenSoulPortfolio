import { useState, useEffect } from "react";

export const useIsMobile = () => {
    let breakpoint: number = 640
    const [isSmall, setIsSmall] = useState(
        typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
    );

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < breakpoint);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    return isSmall;
};

export default useIsMobile;