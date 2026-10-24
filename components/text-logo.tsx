export const TextLogo = ({
  underline = false,
  isLink = false,
}: {
  underline?: boolean;
  isLink?: boolean;
}) => {
  return (
    <div className="w-fit">
      <p
        className={`font-script text-3xl text-nowrap ${isLink && "cursor-pointer"}`}
      >
        Le Fláneur Des Jardins
      </p>
      {underline && <span className="flex w-2/5 h-px bg-accent"></span>}
    </div>
  );
};
