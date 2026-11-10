
import Image from "next/image";
import { ArrowUpRight, Images } from "lucide-react";
import type { GalleryImage } from "@/content/gallery";

interface FeaturedGalleryProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

export default function FeaturedGallery({
  images,
  onImageClick,
}: FeaturedGalleryProps) {
  const featuredImages = images.filter((image) => image.isFeatured);

  if (!featuredImages.length) return null;

  const mainImage = featuredImages[0];
  const secondaryImages = featuredImages.slice(1, 3);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#D5A63C]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#A77A19]">
            <Images size={15} />
            Featured Moments
          </span>

          <h2 className="text-3xl font-extrabold text-[#102B50] sm:text-4xl">
            Moments Worth
            <span className="text-[#D5A63C]"> Remembering</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
            Explore special moments, learning experiences and memorable
            activities from school life.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {/* Main featured image */}
        <button
          type="button"
          onClick={() => onImageClick(mainImage)}
          className="group relative min-h-[350px] overflow-hidden rounded-3xl text-left shadow-xl lg:col-span-3 lg:min-h-[510px]"
        >
          <Image
            src={mainImage.imageUrl}
            alt={mainImage.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07182F]/95 via-[#07182F]/15 to-transparent" />

          <div className="absolute left-6 top-6">
            <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
              FEATURED
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[3px] text-[#EAC66F]">
              {mainImage.category}
            </span>

            <h3 className="max-w-lg text-3xl font-extrabold text-white sm:text-4xl">
              {mainImage.title}
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
              {mainImage.description}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#EAC66F]">
              Explore Image
              <ArrowUpRight size={18} />
            </span>
          </div>
        </button>

        {/* Secondary featured images */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {secondaryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => onImageClick(image)}
              className="group relative min-h-[220px] overflow-hidden rounded-3xl text-left shadow-lg lg:min-h-0"
            >
              <Image
                src={image.imageUrl}
                alt={image.title}
                fill
                sizes="(max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07182F]/90 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#EAC66F]">
                  {image.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {image.title}
                </h3>
              </div>

              <span className="absolute right-5 top-5 rounded-full bg-white/20 p-3 text-white backdrop-blur-md transition-colors group-hover:bg-[#D5A63C]">
                <ArrowUpRight size={18} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
