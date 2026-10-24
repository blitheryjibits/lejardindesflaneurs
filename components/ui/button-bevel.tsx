import { PropsWithChildren } from "react";

type ButtonBevelProps = PropsWithChildren<{
  className?: string;
}>;

export const ButtonBevel = ({ children, className }: ButtonBevelProps) => {
  return (
    <button
      type="button"
      className={`w-auto md:w-fit bg-accent/90 active:bg-accent cursor-pointer border-none rounded-md px-4 py-2 overflow-hidden
      shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.3),0_1px_2px_#0006,0_2px_4px_var(--color-accent)]
      active:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.3),0_1px_2px_#0006]
      ${className}
      `}
    >
      {children}
    </button>
  );
};
