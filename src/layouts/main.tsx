import Navbar from "../components/navbar";
import { Sidebar } from "../components/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-w-screen h-screen">
      <div className=" md:p-10 p-2">
        <Navbar />
      </div>

      <div className="flex flex-1 w-full h-full">
        <div className="flex basis-1/6 h-full">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 md:p-5 p-2 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
