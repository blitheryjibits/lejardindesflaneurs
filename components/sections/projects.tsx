import Image from "next/image";
import { ArrowSwap } from "@/assets/icons/right-arrow";
export const Projects = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="font-serif text-3xl md:text-4xl">Projects</h3>
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="relative w-full md:w-1/3 aspect-square rounded-xs overflow-clip">
          <Image
            src="/gardens/park-garden.jpg"
            fill
            loading="lazy"
            alt="logo"
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:w-1/3 aspect-square rounded-xs overflow-clip">
          <Image
            src="/gardens/faeric-stone-steppers.jpg"
            fill
            loading="lazy"
            alt="logo"
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:w-1/3 aspect-square rounded-xs overflow-clip">
          <Image
            src="/gardens/crazy-pavers-path.jpg"
            fill
            loading="lazy"
            alt="logo"
            className="object-cover"
          />
        </div>
      </div>
      <button
        type="button"
        className="flex gap-2 arrow-swap cursor-pointer px-3 ml-auto"
      >
        See project gallery
        <ArrowSwap />
      </button>
    </div>
  );
};
