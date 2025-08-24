"use client";
import Image from "next/image";
import ModalComponent from "./modal";
import { useState, useEffect } from "react";

export default function ImageGallery({ galleryImages = [] }) {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [images, setImages] = useState(galleryImages);

  useEffect(() => {
    if (Array.isArray(galleryImages)) {
      setImages(galleryImages);
    } else {
      console.error("galleryImages is not an array");
    }
  }, [galleryImages]);

  const handleNext = () => {
    const nextIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedImage(images[prevIndex]);
    setSelectedIndex(prevIndex);
  };

  const handleOnClicked = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedImage("");
    setSelectedIndex(-1);
  };

  return (
    <div className="grid items-center justify-center grid-cols-1 gap-2">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            width={1080}
            height={0}
            sizes="100vw"
            style={{ height: "auto" }}
            alt="Gallery Images"
            className="w-full object-fill hover:border hover:border-[#60606020] rounded-md"
            onClick={() => handleOnClicked(image, index)}
          />
        </div>
      ))}

      {selectedImage && (
        <ModalComponent
          images={images}
          selectedImage={selectedImage}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
