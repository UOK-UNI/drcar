import {
  PhoneIcon,
  LocationIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "../Icons";
import { CallButton } from "..";

export default function Footer() {
  const listItems = [
    "دیتیلینگ خودرو",
    "صافکاری و نقاشی ",
    "سرامیک و مات کردن بدنه خودرو",
    "سرویس دوره ای",
  ];

  return (
    <div className="relative bg-black p-8 md:p-20 bg-map h-[80rem] w-full bg-center bg-cover gradient-bottom">
      <div className="text-center mt-7 md:mb-24">
        <h3 className="text-3xl mb-8 text-primary-1">آدرس </h3>
        <div className="md:text-2xl md:max-w-[60%] mx-auto leading-10	">
          استان تهران، تهران، اتوبان ارتش غرب،ضلع شمال شرق میدان ارتش نرسیده به
          میدان ارتش(اقدسیه)لاین کندرو داخل مجموعه اقدسیه کلینیک دکترواش
        </div>
      </div>

      <div className="container relative z-50 mt-10 md:mt-40 mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1617.935273247502!2d51.4924143644175!3d35.803111241865665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ4JzEwLjgiTiA1McKwMjknMzIuNyJF!5e0!3m2!1sen!2sae!4v1715323251151!5m2!1sen!2sae"
          loading="lazy"
          title="استان تهران، تهران،اتوبان ارتش غرب،ضلع شمال شرق میدان ارتش نرسیده به میدان ارتش(اقدسیه)لاین کندرو داخل مجموعه اقدسیه کلینیک دکترواش"
          aria-label="استان تهران، تهران،اتوبان ارتش غرب،ضلع شمال شرق میدان ارتش نرسیده به میدان ارتش(اقدسیه)لاین کندرو داخل مجموعه اقدسیه کلینیک دکترواش"
          style={{ border: 0 }}
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full md:w-4/6 h-96 mx-auto mb-20 md:mb-40"
        ></iframe>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 md:gap-10 text-white">
          <div className="">
            <div className="text-4xl mb-4">درباره ما</div>
            <div className="text-lg leading-9">
              مرکز تخصصی سرامیک خودرو دکتر واش، با تیمی از متخصصین با سابقه و
              آموزش دیده، برتری خود را در زمینه خدمات زیبایی و دیتیلینگ خودرو به
              ارمغان می‌آورد. از صافکاری مدرن PDR تا نقاشی و نانو سرامیک، خدمات
              ما با کیفیت بالا و در سطح تخصصی ارائه می‌شود
            </div>
          </div>
          <div className="">
            <div className="text-4xl mb-4">خدمات ما</div>
            <ul className=" pr-2">
              {listItems.map((item, index) => (
                <li
                  className="mb-4 text-xl flex items-center gap-2"
                  key={index}
                >
                  <span className="w-2 h-2 rounded-full bg-primary-1" />
                  <span className="hover:text-primary-1 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <div className="text-4xl mb-4">تماس با ما</div>
            <ul>
              <li className="flex items-center gap-3 text-xl mb-7 flex-wrap">
                <PhoneIcon className="text-primary-1" />
                <span className="dir-ltr">0912 287 5906</span>
                <span>مهدی فراهانی</span>
              </li>
              <li className="flex items-center gap-3 text-xl mb-7 flex-wrap">
                <PhoneIcon className="text-primary-1" />
                <span className="dir-ltr">0912 354 7785</span>
                <span>مسعود مهرپوریان </span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <LocationIcon className="text-primary-1 h-6" />
                <span className="dir-ltr">
                  {" "}
                  اتوبان ارتش غرب،ضلع شمال شرق میدان ارتش نرسیده به میدان
                  ارتش(اقدسیه)لاین کندرو داخل مجموعه اقدسیه{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="flex gap-6 mt-4 mb-5 justify-center">
              <a
                href="https://www.instagram.com/dr.wash_clinic/"
                target="_blank"
                className="footer-icon"
              >
                <InstagramIcon className="h-4" />
              </a>

              <a
                href="https://wa.me/+989122875906"
                target="_blank"
                className="footer-icon"
              >
                <WhatsappIcon className="h-4" />
              </a>
              <a
                href="https://t.me/+989122875906/"
                target="_blank"
                className="footer-icon"
              >
                <TelegramIcon className="h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <CallButton />
    </div>
  );
}
