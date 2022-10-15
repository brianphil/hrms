import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./NavBar.css";
const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="HRMI System"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        open={visible}
      >
        {menu}
      </Drawer>
      <a href="/">
        <span style={{color: 'white'}}>HRMI</span>
        <span
          style={{
            backgroundColor: "white",
            color: "#14C1EC",
            padding: "0.1em",
          }}
        >
          SYSTEM
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
