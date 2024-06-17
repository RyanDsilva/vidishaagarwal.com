"use client";
import Image from "next/image";
import { X } from "lucide-react";
import { useRef, useEffect } from "react";

export default function ModalComponent({ selectedImage, onClose, onNext, onPrev }) {
  const modalRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    selectedImage && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
        <div ref={modalRef} className="flex items-center justify-center w-full">
          <div className="relative w-full max-w-screen-lg rounded-lg bg-[#f3f3f3]">
            <div className="relative flex items-center justify-center h-[calc(100vh-8rem)]">
              <Image
                src={selectedImage}
                alt="Selected Image"
                fill={true}
                quality={100}
                className="object-cover rounded-lg"
              />
              <button
                className="absolute z-50 p-2 text-xl text-white transition-all bg-gray-500 bg-opacity-50 rounded-full top-2 right-2 hover:bg-gray-300 hover:bg-opacity-70"
                onClick={onClose}
              >
                <X size={24}></X>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
