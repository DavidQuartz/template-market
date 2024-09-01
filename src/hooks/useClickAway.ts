/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from 'react';

const useClickAway = (fn: (event: MouseEvent | KeyboardEvent) => any, active: boolean) => {
    const ref = useRef<HTMLElement | null>(null);
    const callback = useRef<(event: MouseEvent | KeyboardEvent) => any | null>();

    useEffect(() => {
        callback.current = fn;
    }, [fn]);

    useEffect(() => {
        if (!active) {
            return;
        }

        const onKeyUp = (event: KeyboardEvent): any => {
            if (callback.current && (event.key === 'Escape' || event.which === 27)) {
                callback.current(event);
            }
        };

        const onClick = (event: MouseEvent): void => {
            const { current } = ref;
            const target = event.target as Node;

            if (current && (target === current || current.contains(target))) {
                return;
            }

            if (callback.current) {
                callback.current(event);
            }
        };

        /**
         * Debounce binding of events until next time (so that the initial click to open the modal isn't captured)
         */
        const timeoutId = setTimeout(() => {
            document.body.addEventListener('click', onClick);
            window.addEventListener('keyup', onKeyUp);
        }, 0);

        return () => {
            /**
             * Probably not necessary to clear this timeout, but just in chance it fires after unmount.
             */
            clearTimeout(timeoutId);
            document.body.removeEventListener('click', onClick);
            window.removeEventListener('keyup', onKeyUp);
        }
    }, [active]);

    return ref;
};

export default useClickAway;
