import React, { useState } from "react";
import Link from "next/link";
import propTypes from "prop-types";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import {
  SmileOutlined,
  InstagramOutlined,
  HomeOutlined,
  SearchOutlined,
  CompassOutlined,
  HeartOutlined,
  UserAddOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Menu, Row, Col, Input } from "antd";

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ marginTop: 20 }}>
      <Row gutter={10}>
        <Col xs={1} md={6}>
          <Menu mode="vertical">
            <Menu.Item>
              <InstagramOutlined />
              <Link href={"/"}>
                <a style={{ paddingLeft: "16px" }}>Intagram</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <HomeOutlined />
              <Link href={"/"}>
                <a style={{ paddingLeft: "16px" }}>홈</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <SearchOutlined />
              <span style={{ marginLeft: "0", paddingLeft: "16px" }}>검색</span>
            </Menu.Item>
            <Menu.Item>
              <CompassOutlined />
              <Link href={"/"}>
                <a style={{ paddingLeft: "16px" }}>탐색</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <HeartOutlined />
              <Link href={"/"}>
                <a style={{ paddingLeft: "16px" }}>알림</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <UserAddOutlined />
              <Link href={"/signup"}>
                <a style={{ paddingLeft: "16px" }}>회원가입</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <SmileOutlined />
              <Link href={"/profile"}>
                <a style={{ paddingLeft: "16px" }}>프로필</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <WhatsAppOutlined />
              <a
                href="https://9uk-e.tistory.com/"
                target="_blank"
                rel="noreferrer noopener"
                style={{ paddingLeft: "16px" }}
              >
                블로그
              </a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col xs={19} md={12}>
          <Input.Search placeholder="#OOTD #맞팔" enterButton></Input.Search>
          {children}
        </Col>
        <Col xs={4} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  items: propTypes.node.isRequired,
};

export default AppLayout;
