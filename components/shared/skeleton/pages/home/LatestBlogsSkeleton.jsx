import Skeleton from "../../Skeleton";

const LatestBlogsSkeleton = () => {
  return (
    <>
      <div className="w-full flex justify-center flex-col items-center gap-[10px]">
        <Skeleton w="300px" h="30px" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]">
        {Array(4)
          .fill(null)
          .map((el, i) => (
            <Skeleton key={i} w="100%" h="250px" />
          ))}
      </div>
    </>
  );
};

export default LatestBlogsSkeleton;
