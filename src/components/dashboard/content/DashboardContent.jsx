import React from "react";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Row, Col, Card, Statistic, Button } from "antd";
const DashboardContent = () => {
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
          />
          <Button style={{ marginTop: 16 }} type="primary">
            Recharge
          </Button>
        </Col>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} loading />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardContent;
