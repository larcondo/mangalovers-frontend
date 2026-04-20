import { useEffect, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current) {
        if (
          !ref.current.contains(e.target as Node) ||
          e.target === ref.current
        ) {
          callback();
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
