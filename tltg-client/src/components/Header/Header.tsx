import React from "react";
import { PageHeader, Icon } from "antd";
import { withRouter, RouteComponentProps } from "react-router";

function Header(props: RouteComponentProps) {
  const {
    history: { push },
  } = props;
  const goHome = () => push("/");
  return (
    <PageHeader
      onBack={goHome}
      title="TLTG"
      backIcon={<Icon type="file-sync" />}
      subTitle="Graph-powered blog platform"
    />
  );
}

export default withRouter(Header);
