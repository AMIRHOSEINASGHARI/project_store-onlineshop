import ProfilePage from "@/components/pages/profile/ProfilePage";

const Profile = ({ params: { page } }) => {
  return <ProfilePage page={page} />;
};

export default Profile;
