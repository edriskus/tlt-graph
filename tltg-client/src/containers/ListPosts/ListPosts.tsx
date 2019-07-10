import React from "react";
import { Row, Col } from "antd";
import Excerpt from "../../components/Excerpt/Excerpt";

const excerpt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`;

export default function ListPosts() {
  const posts = [
    { id: "1", excerpt, title: "Post 1" },
    { id: "2", excerpt, title: "Post 2" },
    null,
  ];
  return (
    <Row type="flex" justify="center">
      <Col xs={24} md={18}>
        <Row gutter={16}>
          {posts.map((post, i) => (
            <Col xs={24} md={12} lg={8} key={i}>
              <Excerpt post={post} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
