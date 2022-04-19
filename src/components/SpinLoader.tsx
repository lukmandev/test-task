import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SpinLoader = () => {
  return (
    <div className="spin-loader">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} />
    </div>
  );
};

export default SpinLoader;
