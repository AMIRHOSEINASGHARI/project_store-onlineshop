import Skeleton from "../../Skeleton";

const NewArrivalSkeleton = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-[10px]">
        <Skeleton w="280px" h="30px" />
        <Skeleton w="300px" h="30px" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]">
        {Array(8)
          .fill(null)
          .map((el, i) => (
            <div key={i} className="flex flex-col gap-[20px]">
              <Skeleton w="100%" h="300px" />
              <Skeleton w="100%" h="30px" />
              <Skeleton w="100%" h="30px" />
              <Skeleton w="70px" h="30px" />
            </div>
          ))}
      </div>
    </>
  );
};

export default NewArrivalSkeleton;
