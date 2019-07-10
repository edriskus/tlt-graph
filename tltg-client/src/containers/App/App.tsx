import React from "react";
import ViewPost from "../ViewPost/ViewPost";
import ListPosts from "../ListPosts/ListPosts";
import AppHeader from "../../components/Header/Header";

import { Layout } from "antd";
import { Switch, Route, BrowserRouter } from "react-router-dom";
const { Content } = Layout;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppHeader />
        <Content>
          <Switch>
            <Route path="/" exact={true} component={ListPosts} />
            <Route path="/:postId" exact={true} component={ViewPost} />
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
