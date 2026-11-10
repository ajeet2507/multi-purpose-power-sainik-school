
import Image from "next/image";
import { ArrowUpRight, Camera } from "lucide-react";
import type { GalleryImage } from "@/content/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

export default function GalleryGrid({
  images,
  onImageClick,
}: GalleryGridProps) {
  if (!images.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-5 py-16 text-center">
        <Camera className="mx-auto mb-4 text-slate-400" size={38} />
        <h3 className="text-xl font-bold text-[#102B50]">
          No Images Found
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          No photographs are available in this category yet.
        </p>
      </div>
    );
  }

  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <button
          key={image.id}
          type="button"
          onClick={() => onImageClick(image)}
          className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-slate-100 text-left shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div
            className={`relative w-full overflow-hidden ${
              index % 4 === 0
                ? "h-[360px]"
                : index % 4 === 1
                  ? "h-[260px]"
                  : index % 4 === 2
                    ? "h-[320px]"
                    : "h-[290px]"
            }`}
          >
            <Image
              src={image.imageUrl}
              alt={image.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#07182F]/90 via-[#07182F]/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="absolute right-5 top-5 rounded-full border border-white/30 bg-white/20 p-3 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </span>

            <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#EAC66F]">
                {image.category}
              </span>

              <h3 className="mt-2 text-xl font-bold text-white">
                {image.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/75">
                {image.description}
              </p>
            </div>

            <div className="absolute bottom-5 left-5 transition-opacity duration-300 group-hover:opacity-0">
              <span className="rounded-full bg-white/90 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#102B50]">
                {image.category}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
