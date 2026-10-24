import Image from "next/image";
import { ArrowSwap } from "@/assets/icons/right-arrow";
export const SocialHook = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="relative w-full md:w-1/4 aspect-square rounded-xs overflow-clip">
          <Image
            src="/gardens/water-edge-garden.jpg"
            fill
            loading="lazy"
            alt="logo"
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:w-1/4 aspect-square rounded-xs overflow-clip">
          <Image
            src="/gardens/stone-pavers-flowers.jpg"
            fill
            loading="lazy"
            alt="logo"
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:w-1/4 aspect-square rounded-xs overflow-clip">
          <Image
            src="/gardens/hidden-path.jpg"
            fill
            loading="lazy"
            alt="logo"
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:w-1/4 aspect-square rounded-xs overflow-clip">
          <Image
            src="/gardens/lavender-blur.jpg"
            fill
            loading="lazy"
            alt="logo"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-2xl font-serif">
        <p># Social</p>
        <p> &gt; Follow @ FláneurDesJardins</p>
      </div>
    </div>
  );
};
