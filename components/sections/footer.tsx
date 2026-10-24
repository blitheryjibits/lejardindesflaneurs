import { TextLogo } from "../text-logo";
import { InstagramIcon } from "@/assets/icons/instagram";
import { DribbleIcon } from "@/assets/icons/dribbble";
import { YouTubeIcon } from "@/assets/icons/youtube";
import { PinterestIcon } from "@/assets/icons/pinterst";
import { MessengerIcon } from "@/assets/icons/messenger";
import { WhatsappIcon } from "@/assets/icons/whatsapp";
import { BehanceIcon } from "@/assets/icons/behance";
import { LinkedInIcon } from "@/assets/icons/linkedIn";
export const Footer = () => {
  return (
    <footer className="w-full bg-white px-8 md:px-16 lg:px-24 py-16 ">
      <div className="w-full flex flex-col gap-8 md:w-2/3 lg:w-1/2">
        <TextLogo underline={true} />

        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <p>Phone</p>
            <p>02 8357 2907</p>
          </div>
          <div className="flex flex-col">
            <p>Email</p>
            <p>designer@flaneurdesjardins.com</p>
          </div>
          <div className="flex flex-col">
            <p>Visit</p>
            <p>
              Sydney 15 Queens Street, <br /> Woollahra NSW{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-baseline">
          <div className="w-6 aspect-square">
            <InstagramIcon />
          </div>
          <div className="w-6 aspect-square">
            <DribbleIcon />
          </div>
          <div className="h-6 aspect-square">
            <PinterestIcon />
          </div>
          <div className="h-6 aspect-square">
            <MessengerIcon />
          </div>
          <div className="h-6 aspect-square">
            <WhatsappIcon />
          </div>
          <div className="h-6 aspect-square">
            <BehanceIcon />
          </div>
          <div className="h-6 aspect-square">
            <YouTubeIcon />
          </div>
          <div className="h-7 aspect-square">
            <LinkedInIcon />
          </div>
        </div>
        <div>
          <p>ACKNOWLEDGEMENT OF COUNTRY</p>
          <p>
            We acknowledge the Traditional Owners of country throughout
            Australia and recognise their continuing connection to land, waters,
            and culture. We pay our respects to their Elders past, present and
            emerging.
          </p>
        </div>
      </div>
    </footer>
  );
};
