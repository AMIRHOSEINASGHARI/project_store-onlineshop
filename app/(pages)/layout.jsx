import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const PagesLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="mt-[90px] pb-[150px] maxWidth pagesPaddingX min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PagesLayout;
