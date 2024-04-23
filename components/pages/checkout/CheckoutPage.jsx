import { checkoutPages } from "@/constants";

const CheckoutPage = ({ page }) => {
  const activePageIndex = checkoutPages.findIndex((p) => p.route === page);

  if (activePageIndex < 0) {
    return <p>page not found</p>;
  }

  try {
    return <p>{page}</p>;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default CheckoutPage;
