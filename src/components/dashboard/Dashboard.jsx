import React from "react";
import DashboardContent from "./content/DashboardContent";
import Navigation from "./navigation/Navigation";
import { Row, Col, Layout } from "antd";
import NavBar from "./navigation/NavBar";
import SideBar from "./layout/SideBar";
const Dashboard = () => {
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <>
      <Layout>
        <NavBar menu={<Navigation />} />
        {/* <Header>This is header</Header> */}

        <Layout>
          <SideBar menu={<Navigation />} />
          <Content style={{ marginTop: "1em" }}>
            <DashboardContent />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
