interface MyProps {
  children?: React.ReactNode;
}
const Card = ({ children }: MyProps) => {
  return (
    <div className="rounded-md py-5 px-8 h-36 md:h-44 transform-hover border border-neutral-1 bg-neutral-2 cursor-pointer hover:text-neutral-3 flex items-center justify-center">
      {children}
    </div>
  );
};

export default Card;
