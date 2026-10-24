import { Accordion } from "../ui/accordion";

const SERVICEDATA = [
  {
    title: "LANDSCAPE DESIGN",
    content:
      "Designing a garden is a quiet collaboration between land, craft, and intention. We guide you through every stage — from concept development and spatial planning to council approvals, material selection, and final installation. Our team composes landscapes that blend native and exotic plants, refined structural elements, and sustainable design principles, creating timeless outdoor environments that complement your lifestyle.",
    defaultOpen: true,
  },
  {
    title: "PROJECT MANAGEMENT + CONSTRUCTION",
    content:
      "We protect the integrity of your design throughout the construction process. Working with a hand‑selected team of artisans and tradespeople, we ensure every element — stonework, timber detailing, sculptural features, and planting installation — is executed with precision and care. We oversee all trades, coordinate timelines, and manage the entire build, removing stress while ensuring your garden is crafted beautifully and seamlessly.",
    defaultOpen: false,
  },
  {
    title: "COUNCIL APPROVALS",
    content:
      "When required, we manage the full council approval process from start to finish. This includes preparing documentation, complying with development requirements, and liaising with local authorities on your behalf. Our team handles the administrative complexity so your project can progress smoothly and confidently.",
    defaultOpen: false,
  },
  {
    title: "ONSITE CONSULTATION",
    content:
      "Every project begins with an onsite consultation — a chance to walk the space, understand its character, and listen to your needs. We gather a detailed brief that captures your ideas, preferences, and lifestyle requirements. Back at the studio, this brief becomes the foundation for your design concepts, complete with material selections, cost breakdowns, and design fees, giving you a clear and thoughtful roadmap toward installation.",
    defaultOpen: false,
  },
  {
    title: "COLOUR CONSULTING",
    content:
      "Colour is one of the most expressive tools in landscape design. We curate palettes that harmonise architecture, planting, and outdoor materials, ensuring a seamless flow between interior and exterior spaces. Our consulting considers foliage tones, seasonal variation, hardscape finishes, and furnishings. When needed, we collaborate with specialist painters and artisans to bring these palettes to life with precision.",
    defaultOpen: false,
  },
  {
    title: "STYLING",
    content:
      "Styling is the final layer — the moment when the garden becomes a lived experience. We select furniture, pottery, lighting, sculptural pieces, and textural accents that complement the landscape and elevate its atmosphere. These finishing touches bring coherence, comfort, and quiet luxury to your outdoor space, ensuring it feels as inviting and refined as your interior.",
    defaultOpen: false,
  },
];

export const ServiceList = () => {
  return <Accordion items={SERVICEDATA} />;
};
