import TextHeader from "@/components/reusable/TextHeader";
import { ourPoints } from "@/constants";

const OurPoints = () => {
  return (
    <section>
      <div className="mb-[20px] w-full flex items-center flex-col">
        <TextHeader
          title="Our Best Points"
          subtitle="See our best points as a shopping website"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
        {ourPoints.map((el) => (
          <div
            key={el.title}
            className="flex items-center gap-5 rounded-xl p-4 cardShadow3"
          >
            <div className="text-[25px] p-3 rounded-full shadow-md">
              {el.icon}
            </div>
            <div className="">
              <h3 className="font-medium text-[18px]">{el.title}</h3>
              <p className="font-light text-[12px] text-gray-500">
                {el.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPoints;
