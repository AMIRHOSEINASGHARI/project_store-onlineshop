// actions
import { getUser } from "@/actions/user.action";
// components
import ProfilePageHeader from "../shared/ProfilePageHeader";
import MyComments from "./ui/MyComments";

const CommentsPage = async () => {
  try {
    const data = await getUser();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <div>
        <ProfilePageHeader title="My Comments" />
        <MyComments comments={data?.user?.comments} />
      </div>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default CommentsPage;
