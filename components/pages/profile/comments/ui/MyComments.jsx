import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import DeleteComment from "./DeleteComment";

const MyComments = ({ comments }) => {
  if (comments.length === 0) {
    return <p>No Comments!</p>;
  }

  // TODO: delete comment server action

  return (
    <div className="space-y-[20px]">
      {comments.map((el) => {
        const {
          _id,
          title,
          description,
          productId,
          answer,
          status,
          published,
          createdAt,
        } = el;
        return (
          <div
            key={_id}
            className="flex lg:flex-row max-lg:flex-col gap-[30px] lg:gap-[60px] cardShadow3 rounded-lg p-4 md:p-6"
          >
            <div className="flex flex-col items-center">
              <Link href={`/products/${productId?._id}`} target="_blank">
                <Image
                  src={productId?.image}
                  width={80}
                  height={80}
                  alt="product"
                  priority
                />
              </Link>

              <p className="font-light text-[10px] w-fit">
                {moment(createdAt).fromNow()}
              </p>
            </div>
            <div className="w-full">
              <div className="flex items-center flex-wrap gap-[10px]">
                {published ? (
                  <p className="bg-green-100 text-green-500 rounded-lg py-1 px-5 text-[12px] font-light">
                    Published
                  </p>
                ) : (
                  <p className="bg-orange-100 text-orange-500 rounded-lg py-1 px-5 text-[12px] font-light">
                    Unpublished
                  </p>
                )}
                {status === "Answered" ? (
                  <p className="bg-green-100 text-green-500 rounded-lg py-1 px-5 text-[12px] font-light">
                    Answered
                  </p>
                ) : (
                  <p className="bg-orange-100 text-orange-500 rounded-lg py-1 px-5 text-[12px] font-light">
                    Not answered
                  </p>
                )}
                <DeleteComment commentId={_id} productId={productId?._id} />
              </div>
              <h1 className="subheader mt-[15px] mb-[5px]">{title}</h1>
              <p className="text-[12px] font-medium mb-[10px]">{description}</p>
              {status === "Answered" && (
                <div className="ml-[20px]">
                  <div className="h-[30px] w-[1px] bg-gray-300" />
                  <div className="cardShadow3 rounded-lg p-3">
                    <h2 className="font-medium text-[14px]">Admin:</h2>
                    <p className="font-light text-[12px]">{answer}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyComments;
