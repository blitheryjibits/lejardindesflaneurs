import { ServiceList } from "@/components/sections/service-list";
import { Hero } from "@/components/sections/hero";
import { NavArrows } from "@/components/nav-arrows";

export default function Services() {
  return (
    <main className="px-8 py-12 md:px-16 lg:px-27 md:py-16">
      <div className="flex flex-col gap-32">
        <Hero pageTitle="Services" />
        <div className="flex flex-col gap-8 w-full md:w-2/3">
          <h3 className="font-serif text-4xl tracking-wider">
            Residential &nbsp;&nbsp;&amp;&nbsp;&nbsp; Commercial
          </h3>
          <p>
            <span className="font-script text-2xl">
              Les Flâneur Des Jardins
            </span>{" "}
            is an <span className="text-accent">award-winning</span> landscape
            design studio in Sydney, Australia. We provide a complete range of
            landscape design services for both residential and commercial
            projects. Our services include:
          </p>
        </div>
        <ServiceList />
        <div className="flex flex-col gap-16">
          <div className="space-y-4">
            <p>
              In our residential work, we shape outdoor spaces that feel like
              extensions of daily life — places where quiet moments, gentle
              wandering, and effortless gathering coexist. We design gardens
              that are compact yet richly composed, refined yet deeply
              comfortable. Each space becomes a small sanctuary: a place to
              pause, breathe, and enjoy the subtle pleasures of being outdoors.
            </p>
            <p>
              While our gardens embrace calm and contemplation, they are also
              highly functional. Many evolve into warm, outward‑facing
              environments that welcome conversation, shared meals, and the
              simple joy of hosting. Whether intimate or lively, each garden is
              crafted with the same intention: to elevate the way people live,
              move, and connect within their own home.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              For high‑end commercial projects, we collaborate closely with
              developers, architects, builders, and interior designers to
              deliver landscapes that feel cohesive, purposeful, and beautifully
              integrated. Our commercial work spans a wide range of sectors and
              scales, yet our approach remains consistent — thoughtful design,
              precise execution, and a deep respect for how people experience
              public space.
            </p>
            <p>
              We create landscapes that soften architectural edges, guide
              movement, and offer moments of calm within busy environments. Each
              project is treated as a crafted composition, designed to enrich
              the identity of the site and elevate the everyday experience of
              those who pass through it.
            </p>
          </div>
        </div>
        <NavArrows
          navArray={["Discuss a project idea", "See project gallery"]}
        />
      </div>
    </main>
  );
}
