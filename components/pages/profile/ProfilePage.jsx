import { profilePages } from "@/constants";
import PersonalInformation from "./ui/PersonalInformation";
import Orders from "./ui/Orders";
import Comments from "./ui/Comments";
import Likes from "./ui/Likes";
import { getUser } from "@/actions/user.action";

const ProfilePage = async ({ page }) => {
  const activePageIndex = profilePages.findIndex((p) => p.route === page);

  if (activePageIndex < 0) {
    return <p>page not found</p>;
  }
  try {
    const data = await getUser();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    const pageComponent = {
      "personal-information": (
        <PersonalInformation {...JSON.parse(JSON.stringify(data?.user))} />
      ),
      orders: <Orders orders={data?.user?.orders} />,
      comments: <Comments comments={data?.user?.comments} />,
      likes: <Likes likes={data?.user?.likes} />,
    };

    return (
      <section>
        <h1 className="subheader mb-[20px]">
          {profilePages[activePageIndex].name}
        </h1>
        {pageComponent[page]}
      </section>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default ProfilePage;
