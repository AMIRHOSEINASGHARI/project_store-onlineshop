// next
import Image from "next/image";
import Link from "next/link";
// utils
import { getServerSession } from "@/utils/session";
// components
import Unlike from "./Unlike";

const MyLikes = ({ likes }) => {
  const session = getServerSession();

  if (likes.length === 0) {
    return <p>No Likes!</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
      {likes.map((el) => {
        if (el.type === "product") {
          return (
            <div
              key={el._id}
              className="cardShadow p-3 rounded-xl flex flex-col justify-between"
            >
              <div>
                <Link
                  href={`/products/${el.product._id}`}
                  target="_blank"
                  className="flex justify-center w-full"
                >
                  <Image
                    src={el.product.image}
                    width={90}
                    height={90}
                    alt={el.product.title}
                    priority
                  />
                </Link>
                <p className="text-[12px] capitalize my-2">Type: {el.type}</p>
              </div>
              <Unlike
                type="product"
                userId={JSON.parse(JSON.stringify(session?.userId))}
                productId={JSON.parse(JSON.stringify(el.product._id))}
                isLikedByUser={true}
              />
            </div>
          );
        } else {
          return (
            <div
              key={el._id}
              className="cardShadow p-3 rounded-xl flex flex-col justify-between"
            >
              <div>
                <Link href={`/blogs/${el.blog._id}`} target="_blank">
                  <Image
                    src={el.blog.image}
                    width={200}
                    height={200}
                    alt={el.blog.title}
                    priority
                    className="rounded-xl"
                  />
                </Link>
                <p className="text-[12px] capitalize my-2">Type: {el.type}</p>
              </div>
              <Unlike
                type="blog"
                userId={JSON.parse(JSON.stringify(session?.userId))}
                blogId={JSON.parse(JSON.stringify(el.blog._id))}
                isLikedByUser={true}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default MyLikes;
