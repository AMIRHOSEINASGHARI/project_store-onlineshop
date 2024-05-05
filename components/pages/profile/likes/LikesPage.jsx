// actions
import { getUser } from "@/actions/user.action";
// components
import ProfilePageHeader from "../shared/ProfilePageHeader";
import MyLikes from "./ui/MyLikes";

const LikesPage = async () => {
  try {
    const data = await getUser();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <div>
        <ProfilePageHeader title="My Likes" />
        <MyLikes likes={data?.user?.likes} />
      </div>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default LikesPage;
