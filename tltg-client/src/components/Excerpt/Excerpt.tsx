import React from "react";
import { Card, Row, Col, Button, Icon, Skeleton } from "antd";
import { Link } from "react-router-dom";
import Paragraph from "antd/lib/typography/Paragraph";
import { IPostExcerpt } from "../../types/Post";

export interface IExcerptProps {
  post?: IPostExcerpt | null;
}

export default function Excerpt(props: IExcerptProps) {
  const { post } = props;
  const cover = post ? (
    <img
      alt="example"
      src={`https://picsum.photos/600/400?grayscale&random=${post.id}`}
    />
  ) : (
    undefined
  );
  const title = post ? (
    post.title
  ) : (
    <Skeleton active={true} paragraph={false} />
  );
  return (
    <Card title={title} bordered={false} cover={cover}>
      {post ? (
        <>
          <Paragraph ellipsis={{ rows: 3 }}>{post.excerpt}</Paragraph>
          <Row type="flex" justify="end">
            <Col>
              <Link to="/post9823">
                <Button type="link">
                  Read more <Icon type="right" />
                </Button>
              </Link>
            </Col>
          </Row>
        </>
      ) : (
        <Skeleton active={true} title={false} paragraph={{ rows: 8 }} />
      )}
    </Card>
  );
}
