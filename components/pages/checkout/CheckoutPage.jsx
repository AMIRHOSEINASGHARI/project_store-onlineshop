import { checkoutPages } from "@/constants";
import { getUser } from "@/actions/user.action";

const CheckoutPage = async ({ page }) => {
  const activePageIndex = checkoutPages.findIndex((p) => p.route === page);

  if (activePageIndex < 0) {
    return <p>page not found</p>;
  }

  try {
    const data = await getUser();
    console.log(data);

    if (data.code !== 200) {
      return <p>Error!</p>;
    }
    return <p>{page}</p>;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default CheckoutPage;
