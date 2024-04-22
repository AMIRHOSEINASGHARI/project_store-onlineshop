import { profilePages } from "@/constants";
import PersonalInformation from "./ui/PersonalInformation";
import Orders from "./ui/Orders";
import Comments from "./ui/Comments";
import Likes from "./ui/Likes";

const ProfilePage = ({ page }) => {
  const activePageIndex = profilePages.findIndex((p) => p.route === page);

  const pageComponent = {
    "personal-information": <PersonalInformation />,
    orders: <Orders />,
    comments: <Comments />,
    likes: <Likes />,
  };

  if (activePageIndex < 0) {
    return <p>page not found</p>;
  }
  return (
    <section>
      <h1 className="subheader">{profilePages[activePageIndex].name}</h1>
      {pageComponent[page]}
    </section>
  );
};

export default ProfilePage;
