import Image from "next/image";

export const ImageBreak = ({
  children,
  imgUrl,
  imgAlt,
  imgContainerClasses = "h-full aspect-square",
}: {
  children?: React.ReactNode;
  imgUrl: string;
  imgAlt: string;
  imgContainerClasses?: string;
}) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col md:flex-row md:gap-32 lg:gap-48 items-end h-[50vh] md:h-[30vh] lg:h-[50vh]">
        <div className={`relative ${imgContainerClasses}`}>
          <Image
            src={imgUrl}
            fill
            loading="lazy"
            alt={imgAlt}
            className="object-cover"
          />
        </div>
        {children}
      </div>
    </div>
  );
};
