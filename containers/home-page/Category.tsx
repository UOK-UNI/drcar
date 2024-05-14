import { CarCategory } from "@/components/CarCategory";
const Category = () => {
  const list = [
    {
      icon: "https://2image.s3.ir-thr-at1.arvanstorage.ir/category%2Ficon-1.svg?versionId=",
      image:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/category%2Fcar-img-1.svg?versionId=",
    },
    {
      icon: "https://2image.s3.ir-thr-at1.arvanstorage.ir/category%2Ficon-2.svg?versionId=",
      image:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/category%2Fcar-img-2.svg?versionId=",
    },
    {
      icon: "https://2image.s3.ir-thr-at1.arvanstorage.ir/category%2Ficon-3.svg?versionId=",
      image:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/category%2Fcar-img-3.svg?versionId=",
    },
    {
      icon: "https://2image.s3.ir-thr-at1.arvanstorage.ir/category%2Ficon-4.svg?versionId=",
      image:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/category%2Fcar-img-4.svg?versionId=",
    },
    {
      icon: "https://2image.s3.ir-thr-at1.arvanstorage.ir/category%2Ficon-5.svg?versionId=",
      image:
        "https://2image.s3.ir-thr-at1.arvanstorage.ir/category%2Fcar-img-5.svg?versionId=",
    },
  ];
  return (
    <div className="my-16">
      <h3 className="text-xl md:text-3xl text-center text-primary-1">
        ارائه خدمات به برترین برندهای دنیا
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-8 mt-16 justify-items-center content-center place-content-center	">
        {list.map((item, index) => (
          <div key={index}>
            <CarCategory icon={item.icon} image={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
