import { TextLogo } from "../text-logo";
import Image from "next/image";

interface HeroProps {
  pageTitle: string;
  hasImage?: boolean;
  imgUrl?: string;
  hasText?: boolean;
  children?: React.ReactNode;
}

export const Hero = ({
  pageTitle = "Home",
  hasImage = false,
  hasText = false,
  imgUrl = "/gardens/wisteria-arches.jpg",
  children,
}: HeroProps) => {
  return (
    <div className="w-full">
      {/*title & text logo box*/}
      <div className="flex w-full gap-4 items-center mb-4">
        <h1 className="font-serif text-4xl">{pageTitle}</h1>
        <div className="hidden md:flex items-center gap-4">
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <TextLogo />
        </div>
      </div>

      {/*Image and contents box*/}
      <div className="lg:flex relative">
        {/*image*/}
        {hasImage && (
          <>
            <div
              className={`absolute inset-0 bg-linear-to-t from-black/40 to-transparent backdrop-blur-[1px] z-10
            lg:backdrop-blur-none lg:bg-none
            ${hasText ? "lg:w-1/2" : "lg-w-full"}
          `}
            ></div>
            <div
              className={`w-full lg:aspect-square bg-violet-400 h-[calc(100vh-12.8rem)] relative
              ${hasText ? "lg:w-1/2" : "lg-w-full"}`}
            >
              <Image
                src={imgUrl}
                fill
                loading="eager"
                alt="logo"
                className="object-cover object-right"
              />
            </div>
          </>
        )}
        {/*content*/}
        <div
          className={`absolute lg:right-0 lg:text-black bottom-0 flex flex-col gap-8 md:gap-12 px-6 md:px-8 pb-4 text-white z-20
          ${hasImage ? "lg:w-1/2" : "lg-w-full"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
