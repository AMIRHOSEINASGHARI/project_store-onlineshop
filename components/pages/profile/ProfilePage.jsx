import { profilePages } from "@/constants";

const ProfilePage = ({ page }) => {
  const activePage = profilePages.findIndex((p) => p.route === page);

  if (activePage < 0) {
    return <p>page not found</p>;
  }
  return <div>{page}</div>;
};

export default ProfilePage;
