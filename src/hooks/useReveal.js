import { useEffect, useRef, useState } from "react";

export function useReveal(options = { threshold: 0.13 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(node); // reveal once, don't re-hide on scroll up, pretty much novelty crap nothing crazy
            }
        }, options);

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return { ref, visible };
}