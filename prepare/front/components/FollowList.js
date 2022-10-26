import React from "react";
import propTypes from "prop-types";
import { Card, Skeleton, List, Avatar } from "antd";

const FollowList = ({ data, header }) => {
  return (
    <div>
      <List
        style={{ marginTop: 20 }}
        itemLayout="horizontal"
        dataSource={data}
        header={<div>{header}</div>}
        bordered
        renderItem={(item) => (
          <Card style={{ margin: 10 }}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random/" />}
                title={<a href="https://ant.design">{item.nickname}</a>}
                description={item.description}
              />
            </Skeleton>
          </Card>
        )}
      />
    </div>
  );
};

export default FollowList;

FollowList.propTypes = {
  data: propTypes.object.isRequired,
  header: propTypes.string.isRequired,
};
