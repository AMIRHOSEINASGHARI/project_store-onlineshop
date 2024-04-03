import Navbar from "@/components/shared/Navbar";

const PagesLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="mt-[90px] maxWidth px-6">{children}</main>
    </div>
  );
};

export default PagesLayout;
