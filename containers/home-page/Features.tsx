import { CheckIcon } from "@/components/Icons";

const Features = () => {
  const list = [
    {
      title: "تنظیم بالانس چرخ ها و جلوبندی حرفه ای و موتور و گیربکس",
      text: "فرآیند تسویه کردن وزن تایر ترکیبی با سیستم هوشمند",
    },
    {
      title: "آزمایش باتری و چکاپ سیستم برق",
      text: "حرفه ای ترین مرکز کنترل سیستم برقی خودرو",
    },
    {
      title: "خدمات نقاشی و صافکاری مدرن",
      text: "اتاق رنگ حرفه ای و تحت خلا صافکاری پی دی آر و بدون رنگ",
    },
  ];
  return (
    <section className="w-full md:my-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-9">
        <div className="hidden md:col-span-6 md:block">
          <img
            src={`https://2image.s3.ir-thr-at1.arvanstorage.ir/feature.png?versionId=`}
            className="rotate-y-180 md:h-[44rem] md:w-[50rem]"
            alt="alt"
          />
        </div>
        <div className="mx-5 md:mt-40 md:col-span-5">
          <h3 className="flex text-2xl md:text-3xl justify-center md:justify-start">
            خدمات تخصصی
            <div className="text-primary-1 mr-2">دکتر واش </div>
          </h3>
          <ul className="mt-8">
            {list.map((item, index) => (
              <li className="flex gap-4 items-center mt-10" key={index}>
                <div className="p-2 rounded-full bg-primary-1">
                  <CheckIcon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold">
                    {item.title}
                  </div>
                  <div className="mt-3 font-light">{item.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
