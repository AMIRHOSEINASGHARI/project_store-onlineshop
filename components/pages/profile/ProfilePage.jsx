import { profilePages } from "@/constants";
import PersonalInformation from "./ui/PersonalInformation";
import Orders from "./ui/Orders";
import Comments from "./ui/Comments";
import Likes from "./ui/Likes";
import { getUser } from "@/actions/user.action";

const ProfilePage = async ({ page }) => {
  const activePageIndex = profilePages.findIndex((p) => p.route === page);
  const user = await getUser();
  console.log(user);

  if (activePageIndex < 0) {
    return <p>page not found</p>;
  }

  const pageComponent = {
    "personal-information": <PersonalInformation />,
    orders: <Orders />,
    comments: <Comments />,
    likes: <Likes />,
  };

  return (
    <section>
      <h1 className="subheader">{profilePages[activePageIndex].name}</h1>
      {pageComponent[page]}
    </section>
  );
};

export default ProfilePage;
