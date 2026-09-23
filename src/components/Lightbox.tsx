import { useCallback, useEffect } from "react";
import type { GalleryImage } from "../data";

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
  resolveAsset: (src: string) => string;
}

function Lightbox({ images, activeIndex, onChange, onClose, resolveAsset }: LightboxProps) {
  const previousImage = useCallback(() => {
    onChange((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onChange]);

  const nextImage = useCallback(() => {
    onChange((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onChange]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, onClose, previousImage]);

  const activeImage = images[activeIndex];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de fotos"
      onClick={onClose}
    >
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Fechar galeria">
        ×
      </button>

      <button
        type="button"
        className="lightbox__arrow lightbox__arrow--left"
        onClick={(event) => {
          event.stopPropagation();
          previousImage();
        }}
        aria-label="Foto anterior"
      >
        ‹
      </button>

      <img
        src={resolveAsset(activeImage.src)}
        alt={activeImage.alt}
        onClick={(event) => event.stopPropagation()}
      />

      <button
        type="button"
        className="lightbox__arrow lightbox__arrow--right"
        onClick={(event) => {
          event.stopPropagation();
          nextImage();
        }}
        aria-label="Próxima foto"
      >
        ›
      </button>

      <span className="lightbox__counter">
        {activeIndex + 1} / {images.length}
      </span>
    </div>
  );
}

export default Lightbox;
