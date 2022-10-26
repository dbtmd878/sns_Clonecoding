import React, { useCallback, useState } from "react";
import { Avatar, Card, Dropdown, Menu, Skeleton } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  LogoutOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import propTypes from "prop-types";
import Link from "next/link";

const UserProfile = ({ setIsLoggedIn }) => {
  const [loading, setLoading] = useState(false);
  const logout = useCallback(() => {
    setIsLoggedIn((prev) => !prev);
  }, [setIsLoggedIn]);
  const menu = (
    <Menu
      items={[
        {
          label: "글쓰기",
          key: "edit",
          icon: (
            <Link href="/signup">
              <a>
                <EditOutlined />
              </a>
            </Link>
          ),
        },
        {
          label: "설정",
          key: "setting",
          icon: (
            <Link href="/signup">
              <a>
                <SettingOutlined />
              </a>
            </Link>
          ),
        },
        {
          label: "로그아웃",
          key: "logout",
          icon: <LogoutOutlined onClick={logout} />,
        },
      ]}
    />
  );
  return (
    <div>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <div key="followings">
            팔로잉
            <br />0
          </div>,
          <div key="followers">
            팔로워
            <br />0
          </div>,

          <Dropdown key="ellip" overlay={menu}>
            <EllipsisOutlined style={{ marginTop: "10px" }} />
          </Dropdown>,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Card.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="description"
          />
        </Skeleton>
      </Card>
    </div>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  setIsLoggedIn: propTypes.bool,
};
