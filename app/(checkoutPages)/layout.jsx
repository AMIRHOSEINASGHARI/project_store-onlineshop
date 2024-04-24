import { redirect } from "next/navigation";
import { getServerSession } from "@/utils/session";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const CheckoutLayout = ({ children }) => {
  const session = getServerSession();

  if (!session) redirect("/login");

  return (
    <div>
      <Navbar />
      <main className="mt-[90px] pb-[150px] maxWidth pagesPaddingX min-h-screen ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutLayout;
