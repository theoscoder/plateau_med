"use client";

import { useOutsideClick } from "@/hooks/useClickOutside";
import React, { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  onClose: (value: boolean) => void;
  children: JSX.Element;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}
const Modal: FC<ModalProps> = ({
  children,
  title,
  subtitle,
  className,
  onClose,
}) => {
  const [modalRef, setModalRef] = useState<HTMLDivElement | null>(null);

  useOutsideClick(modalRef, () => {
    onClose(false);
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 overflow-hidden bg-black/50 w-screen h-screen flex-center flex-col z-50">
      <div
        ref={setModalRef}
        className={`bg-white shadow w-full rounded-md p-5 ${className}`}
      >
        <div className="flex-between mb-4">
          <div className="space-y-1 max-w-xs">
            {!!title && (
              <>
                <h4>{title}</h4>
                <p className="text-xs text-gray-400">{subtitle}</p>
              </>
            )}
          </div>
          <button
            className="text-primary text-sm"
            onClick={() => onClose(false)}
          >
            Close
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
