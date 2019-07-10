import React from "react";
import { Card, Comment, Avatar, Form, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

export default function Comments() {
  const comments = [{}, {}, {}];
  return (
    <Card bordered={false}>
      {comments.map((comment, i) => (
        <Comment
          key={i}
          author={<a>Han Solo</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
        />
      ))}
      <div>
        <Form.Item>
          <TextArea rows={4} placeholder="Add a comment" />
        </Form.Item>
      </div>
    </Card>
  );
}
