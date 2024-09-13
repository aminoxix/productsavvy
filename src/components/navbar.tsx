import {
  HeartOutlined,
  HeatMapOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="flex basis-20 justify-between items-center">
      <HeatMapOutlined />
      <div className="flex items-center gap-5">
        <p>
          Made with <HeartOutlined /> by{" "}
          <span className="p-1 border border-white rounded-md shrink-0">
            <a target="_blank" href="https://github.com/aminoxix">
              <UserOutlined />
            </a>
          </span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
