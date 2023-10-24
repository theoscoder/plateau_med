import { useEffect } from "react";

export const useOutsideClick = (
  ref: HTMLDivElement | null | undefined,
  cb: () => void
) => {
  useEffect(() => {
    if (!ref) return;
    function handleClickOutside(event: MouseEvent) {
      if (ref && !ref.contains(event.target as Node)) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
