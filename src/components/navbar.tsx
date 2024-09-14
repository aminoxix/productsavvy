import { useState } from "react";

import {
  CloseOutlined,
  HeartOutlined,
  HeatMapOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Sidebar } from "./sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex basis-20 justify-between items-center">
      <a href="/" className="text-2xl font-semibold">
        <HeatMapOutlined className="cursor-pointer" />
      </a>
      <div className="flex items-center gap-5">
        <p className="flex items-center gap-1">
          Made with <HeartOutlined /> by{" "}
          <span className="p-1 rounded-md shrink-0">
            <a target="_blank" href="https://github.com/aminoxix">
              <img
                width={20}
                height={20}
                src="https://github.com/aminoxix.png"
              />
            </a>
          </span>
        </p>
      </div>
      <div className="block md:hidden">
        <button onClick={() => setOpen((prev) => !prev)}>
          {open ? <CloseOutlined /> : <MenuOutlined />}
        </button>
        {open && (
          <div className="absolute rounded-md bg-[#1a202c] border border-slate-200 top-10 right-2 z-10">
            <Sidebar />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
