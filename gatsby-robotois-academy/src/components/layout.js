import React from 'react';
import { Layout, Header as HeaderWrapper, Main, Container } from 'theme-ui';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/use-site-metadata';

import './layout.css';

function AppLayout(props) {
  const meta = useSiteMetadata();
  const links = meta.headerLinks || [];
  return (
    <Layout>
      <HeaderWrapper>
        <Link to="/">{meta.title}</Link>
        <div />
        {links.map(l => <Link to={l.link} key={l.link}>{l.title}</Link>)}
      </HeaderWrapper>
      <Main>
        <Container>{props.children}</Container>
      </Main>
    </Layout>
  );
}

export default AppLayout;