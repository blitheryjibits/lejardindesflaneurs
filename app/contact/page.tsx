import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/forms/contact-form";

export default function Contact() {
  return (
    <main className="px-8 py-12 md:px-16 lg:px-27 md:py-16">
      <div className="flex flex-col gap-32">
        <Hero pageTitle="Contact" />
        {/*contact data and form*/}
        <div className="flex flex-col gap-8">
          <h3 className="relative text-4xl inline-block w-fit">
            Say Hello{" "}
            <span className="absolute left-0 -bottom-2 w-1/3 h-0.5 bg-accent"></span>
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="space-y-4">
            <div className="">
              <p>Phone</p>
              <p>02 8357 2907</p>
            </div>
            <div className="">
              <p>Visit</p>
              <p>
                15 Queens Street,
                <br />
                Woollahra NSW 2025
              </p>
            </div>
            <div className="">
              <p>Email</p>
              <p>designer@flaneurdesjardins.com</p>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
