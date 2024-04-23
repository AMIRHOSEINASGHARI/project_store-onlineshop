import Skeleton from "@/components/shared/skeleton/Skeleton";

export default function Loading() {
  const imageArray = new Array(8).fill(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
      {imageArray.map((el, i) => (
        <div key={i} className="flex flex-col gap-[20px]">
          <Skeleton w="100%" h="200px" />
          <Skeleton w="100%" h="30px" />
          <Skeleton w="100%" h="30px" />
          <div className="flex justify-end">
            <Skeleton w="70px" h="30px" />
          </div>
        </div>
      ))}
    </div>
  );
}
