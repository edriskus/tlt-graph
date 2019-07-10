import React from "react";
import { Card, PageHeader } from "antd";
import ReactMarkdown from "react-markdown";
import { IFullPost } from "../../types/Post";
import { withRouter, RouteComponentProps } from "react-router";

export interface IPreviewProps extends RouteComponentProps {
  post?: IFullPost;
}

const fakePost: IFullPost = {
  id: "1",
  title: "Post title",
  excerpt: "",
  content: `
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.<br>

### npm run build

Builds the app for production to the build folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### npm run eject

**Note: this is a one-way operation. Once you eject, you can’t go back!**
  `,
};

function Preview(props: IPreviewProps) {
  const {
    post: { content, title } = fakePost,
    history: { goBack },
  } = props;
  return (
    <Card
      className="preview-card"
      title={<PageHeader onBack={goBack} title={title} />}
      bordered={false}
    >
      <ReactMarkdown source={content} />
    </Card>
  );
}

export default withRouter(Preview);
