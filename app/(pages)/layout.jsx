import Navbar from "@/components/shared/Navbar";

const PagesLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default PagesLayout;
