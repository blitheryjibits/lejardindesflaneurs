// components/MasonryGallery.tsx

import Image from "next/image";

export default function MasonryGallery({ images }: { images: string[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2">
      {images.map((src, i) => (
        <div
          key={src}
          className="break-inside-avoid overflow-hidden rounded-xl"
        >
          <Image
            src={src}
            alt={`gallery image ${i}`}
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-xs"
          />
        </div>
      ))}
    </div>
  );
}
