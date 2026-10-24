import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { ImageBreak } from "@/components/sections/image-break";
import { Testimonial } from "@/components/sections/testimonial";
import { AwardsBoast } from "@/components/sections/awards-boast";
import { Projects } from "@/components/sections/projects";
import { NavArrows } from "@/components/nav-arrows";
import { SocialHook } from "@/components/sections/social-hook";
import { ButtonBevel } from "@/components/ui/button-bevel";

export default function Home() {
  return (
    <main className="px-8 py-12 md:px-16 lg:px-27 md:py-16">
      <div className="flex flex-col gap-32">
        <Hero
          pageTitle="Home"
          hasImage={true}
          imgUrl="/gardens/wisteria-arches.jpg"
          hasText={true}
        >
          <h2 className="font-serif text-4xl lg:text-5xl">
            Artisnal <br />
            <span className="font-script md:text-5xl lg:text-6xl">
              Landscape Design
            </span>{" "}
            <br /> &amp; Construction
          </h2>
          <div className="flex flex-col gap-8 w-full font-body text-md md:text-xl">
            <p>
              We create sustainable commercial and residential gardens that
              blend native and exotic plants into distinctive landscapes rooted
              in craftsmanship
            </p>

            <ButtonBevel
              className={`ml-auto w-fit font-script cursor-pointer text-3xl text-chart-5
              `}
            >
              Discuss a project idea
            </ButtonBevel>
          </div>
        </Hero>
        <ImageBreak
          imgAlt="Line-art of woman reading a book"
          imgUrl="/svg/legs-reading.svg"
        >
          <NavArrows navArray={["See project gallery", "Look at services"]} />
        </ImageBreak>
        <AwardsBoast />
        <Testimonial />
        <Projects />

        <div className="relative aspect-video w-[calc(100vw-4px)] -translate-x-7.5 md:-translate-x-16 lg:-translate-x-30">
          <Image
            fill
            alt="Two people sitting back to back looking into palms"
            src="/svg/back-to-back-tr-bg.png"
            className="object-cover "
          ></Image>
        </div>
        <SocialHook />
      </div>
    </main>
  );
}
