import React from "react";
import { createPortal } from "react-dom";
import closeIcon from "../assets/images/close-icon.png";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const modalRoot = document.getElementById("modal-root")!;

export function Modal({ children, onClose }: ModalProps) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#333333] border-4 border-green-500 p-6 rounded-4xl shadow-lg"
      >
        <button onClick={onClose} className="float-right">
          <img className="w-6 h-6 cursor-pointer" src={closeIcon} alt="" />
        </button>
        {children}
      </div>
    </div>,

    modalRoot
  );
}
