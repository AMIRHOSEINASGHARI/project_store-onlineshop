// next
import Image from "next/image";
// utils
import { shorterText } from "@/utils/functions";
// constants
import { icons } from "@/constants";
// components
import moment from "moment";
import ReadMoreButton from "@/components/reusable/ReadMoreButton";

const BlogCard = (props) => {
  const { _id, image, title, description, likes, createdAt } = props._doc;

  return (
    <div className="cardShadow rounded-xl p-3">
      <div className="h-[170px] rounded-xl overflow-hidden">
        <Image
          src={image}
          width={400}
          height={300}
          alt="blog"
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-[8px]">
        <div className="mt-[8px] flex items-center justify-between">
          <span className="subtitle">{moment(createdAt).fromNow()}</span>
          <div className="flex items-center gap-[5px]">
            <p className="subtitle">{likes.length}</p> {icons.heart}
          </div>
        </div>
        <h1 className="subheader">{shorterText(title, 20)}</h1>
        <p className="subtitle">{shorterText(description, 70)}</p>
        <div className="flex justify-end">
          <ReadMoreButton
            href={`/blogs/${_id}`}
            title="Read More"
            icon={icons.rightArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
