const HeroHeader = () => {
  return (
    <section className="hero-header">
      <div className="container px-6 md:px-10">
        <div className="flex flex-col items-end">
          <div className="text-box max-w-[35rem]">
            <div className="text-xl text-primary-1">تعمیرات ماشین</div>
            <div className="text-xl md:text-5xl  mt-8">
              کلینیک تخصصی دکتر واش
            </div>
            <div className="text-xl md:text-5xl mt-3 md:mt-5">
              مرکز تخصصی سرامیک خودرو
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
