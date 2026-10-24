import { DoubleQuotes } from "@/assets/icons/double-quotes";
import { ArrowSwap } from "@/assets/icons/right-arrow";
export const Testimonial = () => {
  // const testimonial = [
  //   {
  //     author: "Timothy",
  //     date: "23/09/2016",
  //     content: `Éloi was so patient and
  //     creative. The garden walk
  //     through was really relaxing
  //     and inspiring`,
  //   },
  // ];
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="relative w-4/5 md:w-2/3 lg:w-1/2 mx-auto font-serif text-2xl">
        <span className="absolute -top-6 -left-6 ">
          <DoubleQuotes />
        </span>
        <p>
          Éloi was so patient and creative. The garden walk through was really
          relaxing and inspiring
        </p>
        <p className="font-script justify-self-end text-3xl">Timothy</p>
      </div>
      <button
        type="button"
        className="flex gap-2 arrow-swap cursor-pointer px-3 ml-auto"
      >
        More reviews{" "}
        <span>
          <ArrowSwap />
        </span>
      </button>
    </div>
  );
};
