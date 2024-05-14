interface MyProps {
  icon: string;
  image: string;
}
const CarCategory = ({ icon, image }: MyProps) => {
  return (
    <div className="transform-hover cursor-pointer rounded-lg border border-neutral-4 bg-black-2 px-10 py-8 w-full flex flex-col items-center justify-center hover:border-primary-1">
      <div className="mb-5">
        <img src={icon} className="h-auto" alt="icon" />
      </div>
      <div className="w-20 h-10">
        <img src={image} className="h-auto" alt="icon" />
      </div>
    </div>
  );
};

export default CarCategory;
