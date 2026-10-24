import { ArrowSwap } from "@/assets/icons/right-arrow";

interface NavArrowProps {
  navArray: string[];
}

export const NavArrows = ({ navArray }: NavArrowProps) => {
  return (
    <div className="flex flex-col text-nowrap items-end gap-2 pb-8">
      {navArray.map((item, index) => (
        <button
          key={item + index}
          type="button"
          className="flex gap-2 arrow-swap cursor-pointer px-3"
        >
          {item}
          <span>
            <ArrowSwap />
          </span>
        </button>
      ))}
    </div>
  );
};
