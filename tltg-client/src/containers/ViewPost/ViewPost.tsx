import React from "react";
import Preview from "../../components/Preview/Preview";
import { Row, Col } from "antd";
// import Comments from "../../components/Comments/Comments";

export default function ViewPost() {
  return (
    <Row type="flex" justify="center">
      <Col xs={24} md={18}>
        <Preview />
        {/* <Comments /> */}
      </Col>
    </Row>
  );
}
