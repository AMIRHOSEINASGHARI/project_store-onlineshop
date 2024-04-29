import { getUser } from "@/actions/user.action";
import InformationForm from "./ui/InformationForm";
import ProfilePageHeader from "../shared/ProfilePageHeader";

const PersonalInformationPage = async () => {
  try {
    const data = await getUser();

    if (data.code !== 200) {
      return <p>Error!</p>;
    }

    return (
      <div>
        <ProfilePageHeader title="Personal Information" />
        <InformationForm {...JSON.parse(JSON.stringify(data?.user))} />
      </div>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default PersonalInformationPage;
