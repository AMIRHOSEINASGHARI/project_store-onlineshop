import Skeleton from "@/components/shared/skeleton/Skeleton";

export default function Loading() {
  return (
    <div className="space-y-[30px]">
      <Skeleton w="100%" h="350px" />
      <div className="w-full flex justify-center flex-col items-center gap-[10px]">
        <Skeleton w="280px" h="30px" />
        <Skeleton w="300px" h="30px" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]">
        {Array(4)
          .fill(null)
          .map((el, i) => (
            <Skeleton key={i} w="100%" h="100px" />
          ))}
      </div>
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
      <div className="w-full flex flex-col gap-[10px]">
        <Skeleton w="280px" h="30px" />
        <Skeleton w="300px" h="30px" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {Array(10)
          .fill(null)
          .map((el, i) => (
            <div key={i} className="flex flex-col gap-[20px]">
              <Skeleton w="100%" h="200px" />
            </div>
          ))}
      </div>
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
      <Skeleton w="100%" h="300px" />
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
      <div className="w-full flex justify-center flex-col items-center gap-[10px]">
        <Skeleton w="280px" h="30px" />
        <Skeleton w="300px" h="30px" />
      </div>
      <div className="w-full flex max-lg:flex-col justify-between items-center gap-[20px]">
        <Skeleton w="100%" h="300px" />
        <Skeleton w="100%" h="300px" />
      </div>
    </div>
  );
}
