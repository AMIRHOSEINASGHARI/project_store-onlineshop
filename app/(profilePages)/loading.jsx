import Skeleton from "@/components/shared/skeleton/Skeleton";

export default function Loading() {
  const array = Array(4).fill(null);

  return (
    <main className="w-full flex flex-col gap-[30px]">
      <Skeleton w="250px" h="50px" />
      {array.map((el, i) => (
        <Skeleton key={i} w="100%" h="50px" />
      ))}
      <Skeleton w="100px" h="50px" />
    </main>
  );
}
