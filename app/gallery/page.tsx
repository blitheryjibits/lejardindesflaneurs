import MasonryGallery from "@/components/sections/masonry-gallery";
import { ImageBreak } from "@/components/sections/image-break";
import { TextLogo } from "@/components/text-logo";
import { NavArrows } from "@/components/nav-arrows";
import Image from "next/image";

export default function Gallery() {
  return (
    <main className="px-8 py-12 md:px-16 lg:px-27 md:py-16 space-y-32">
      <div className="flex flex-col gap-16">
        <div className="flex w-full gap-4 items-center mb-4">
          <h1 className="font-serif text-4xl">Gallery</h1>
          <div className="hidden md:flex items-center gap-4">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <TextLogo />
          </div>
        </div>
        <div className="relative w-full">
          <ImageBreak
            imgAlt="Line-art of a woman's upper torso and head"
            imgUrl="/svg/torso.png"
          >
            <div className="flex flex-col gap-2 text-2xl font-serif">
              <p># Social</p>
              <p> &gt; Follow @ FláneurDesJardins</p>
            </div>
          </ImageBreak>
        </div>
      </div>
      <MasonryGallery
        images={[
          "/gardens/crazy-pavers-path.jpg",
          "/gardens/crouched-oragne-tulips.jpg",
          "/gardens/faeric-stone-steppers.jpg",
          "/gardens/hidden-path.jpg",
          "/gardens/lavender-blur.jpg",
          "/gardens/park-garden.jpg",
          "/gardens/stone-stack.jpg",
          "/gardens/stone-pavers-flowers.jpg",
          "/gardens/water-edge-garden.jpg",
          "/gardens/wisteria-arches.jpg",
        ]}
      />
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 w-full items-baseline justify-between">
        <div className="relative md:ml-auto h-[30vh] lg:h-[50vh] aspect-square">
          <Image
            fill
            alt="Line-art"
            src="/svg/monsteria-pot.png"
            loading="lazy"
          />
        </div>
        <div className="ml-auto">
          <NavArrows
            navArray={["Discuss a project idea", "Look at services"]}
          />
        </div>
      </div>
    </main>
  );
}
