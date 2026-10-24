import { Hero } from "@/components/sections/hero";
import { ImageBreak } from "@/components/sections/image-break";
import { NavArrows } from "@/components/nav-arrows";
import Image from "next/image";
import { SocialHook } from "@/components/sections/social-hook";
export default function About() {
  return (
    <main className="px-8 py-12 md:px-16 lg:px-27 md:py-16">
      <div className="flex flex-col gap-32">
        <Hero
          pageTitle="About"
          hasImage={true}
          imgUrl="/gardens/wisteria-arches.jpg"
          hasText={false}
        />
        <ImageBreak
          imgUrl="/svg/face-in-book-tr-bg.png"
          imgAlt="Line-art of a woman looking up with a book resting on her face"
        >
          <NavArrows navArray={["See project gallery", "Look at services"]} />
        </ImageBreak>
        <div className="flex flex-col gap-4 leading-6.5">
          <h3 className="font-serif text-3xl relative w-fit mb-4">
            Founded 2012{" "}
            <span className="absolute -bottom-0.5 left-0 w-1/3 h-px bg-accent"></span>
          </h3>
          <p>
            For more than a decade, Le Flâneur Des Jardins has shaped Sydney’s
            landscapes with a quiet, deliberate artistry.
          </p>
          <p>
            Our studio is built on the belief that gardens should feel like
            places of gentle discovery — spaces that invite wandering, noticing,
            and lingering in the moment. Inspired by the French tradition of
            flânerie, we design environments that encourage people to slow down
            and reconnect with the subtle beauty of their surroundings.
          </p>
          <p>
            Our work blends the clarity of modern landscape architecture with
            the warmth of artisanal craftsmanship. Each project is composed with
            a restrained, minimalistic aesthetic, where every line, texture, and
            planting choice is intentional.{" "}
          </p>
          <p>
            We pair native Australian species with resilient exotic plants,
            creating gardens that are both ecologically grounded and visually
            expressive. Sustainability is woven into our process: water‑wise
            systems, responsible materials, and long‑term ecological balance
            guide every decision.
          </p>
          <p>
            From cultural courtyards to private sanctuaries, our gardens are
            built to mature gracefully — evolving through seasons, deepening in
            character, and offering new moments of quiet delight to those who
            wander through them. At Le Flâneur Des Jardins, we do not simply
            construct outdoor spaces.
          </p>
          <p>
            We craft living compositions that invite reflection, movement, and
            belonging.
          </p>
        </div>
        <div className="flex flex-col gap-16 bg-secondary/40 px-8 md:px-16 lg:px-27 py-16 w-screen -translate-x-8 md:-translate-x-16 lg:-translate-x-27">
          <div className="relative h-[75vh]">
            <Image
              src="/gardens/elio.jpg"
              alt="Elio (founder) spraying plants with water"
              fill
              className="object-cover object-[75%]"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="font-serif text-5xl lg:text-3xl">Founder</h3>
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              <h4 className="font-script text-5xl text-center">
                Éloi Marcellin
              </h4>
              <div className="flex flex-col gap-4 text-2xl lg:text-xl leading-6.5 indent-4 font-harmattan">
                <p>
                  Le Flâneur Des Jardins was founded by Éloi Marcellin, a
                  designer whose life and work are shaped by the art of
                  wandering. Before establishing the studio, Éloi spent years
                  travelling through Europe, North Africa, and Southeast Asia,
                  studying how different cultures express identity and emotion
                  through their outdoor spaces. His background is an uncommon
                  blend of environmental arts, spatial composition, and a
                  personal devotion to philosophy — disciplines that together
                  inform his quiet, contemplative approach to landscape design.
                </p>
                <p>
                  Éloi’s philosophy is rooted in the idea that gardens are not
                  merely built but composed. He often describes his process as
                  “walking with intention,” allowing ideas to emerge from
                  movement, observation, and the subtle dialogue between land
                  and human presence. This perspective became the foundation of
                  Le Flâneur Des Jardins: a studio where craftsmanship meets
                  curiosity, and where every project is shaped by the desire to
                  create spaces that encourage people to pause and rediscover
                  the world around them.
                </p>
                <p>
                  Under his direction, the studio has become known for its
                  refined minimalism, its thoughtful pairing of native and
                  exotic plant species, and its commitment to sustainable,
                  long‑term landscape stewardship. Éloi’s influence is present
                  in every garden we create — not through overt signatures, but
                  through a consistent devotion to detail, balance, and the
                  poetry of place.
                </p>
              </div>
            </div>
          </div>
          <NavArrows navArray={["Discuss a project idea"]} />
        </div>

        <SocialHook />
      </div>
    </main>
  );
}
