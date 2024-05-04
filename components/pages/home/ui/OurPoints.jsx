// constants
import { ourPoints } from "@/constants";
// components
import TextHeader from "@/components/reusable/TextHeader";

const OurPoints = () => {
  return (
    <section>
      <div className="textHeaderPosition">
        <TextHeader
          title="Our Best Points"
          subtitle="See our best points as a shopping website"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
        {ourPoints.map((el) => (
          <div
            key={el.title}
            className="flex items-center gap-5 rounded-xl p-4 cardShadow3 hover:shadow-inner transition1 group"
          >
            <div className="text-[25px] p-3 rounded-full shadow-md group-hover:text-violet-500 group-hover:shadow-violet-300 group-hover:translate-x-1 transition1">
              {el.icon}
            </div>
            <div>
              <h3 className="subheader group-hover:text-violet-500 group-hover:translate-x-1 transition1">
                {el.title}
              </h3>
              <p className="subtitle">{el.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPoints;
