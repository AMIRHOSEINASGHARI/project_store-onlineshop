import Skeleton from "@/components/shared/skeleton/Skeleton";

export default function Loading() {
  const array = Array(6).fill(null);

  return (
    <main className="w-full flex flex-col gap-[30px]">
      <Skeleton w="150px" h="30px" />
      {array.map((el, i) => (
        <Skeleton key={i} w="100%" h="30px" />
      ))}
    </main>
  );
}
