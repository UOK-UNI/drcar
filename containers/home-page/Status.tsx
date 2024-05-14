import { Card } from "@/components/Card";
import {
  EngineIcon,
  SuspenseIcon,
  SettingsIcon,
  CarTickIcon,
} from "@/components/Icons";

const Status = () => {
  const list = [
    {
      title: "تعمیر موتور",
      icon: <EngineIcon className="w-16 h-16 md:w-20 md:h-20" />,
    },
    {
      title: "تعمیر جلوبندی",
      icon: <SuspenseIcon className="w-16 h-16 md:w-20 md:h-20" />,
    },
    {
      title: "صافکاری تخصصی",
      icon: <SettingsIcon className="w-16 h-16 md:w-20 md:h-20" />,
    },
    {
      title: "سرامیک و پولیش",
      icon: <CarTickIcon className="w-16 h-16 md:w-20 md:h-20" />,
    },
  ];
  return (
    <section className="container">
      <div className="my-20 md:my-32">
        <div className="grid grid-cols-1 md:grid-cols-4 my-4 gap-12">
          {list.map((item, index) => (
            <div key={index} className="mx-auto md:mx-0 w-[13rem] md:w-auto">
              <Card>
                <div className="flex flex-col items-center gap-4">
                  {item.icon}
                  <div className="text-xl"> {item.title}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
