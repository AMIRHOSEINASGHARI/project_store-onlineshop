import CheckoutPage from "@/components/pages/checkout/CheckoutPage";

const Checkout = ({ params: { page } }) => {
  return <CheckoutPage page={page} />;
};

export default Checkout;
