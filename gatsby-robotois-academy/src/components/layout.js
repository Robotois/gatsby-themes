import React from 'react';
import { Layout, Header, Main, Container } from 'theme-ui';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/use-site-metadata';
import ThemeSwitcher from './theme-switcher';
import './layout.css';

function AppLayout(props) {
  const meta = useSiteMetadata();
  const links = meta.headerLinks || [];
  return (
    <Layout>
      <Header>
        <Link to="/">{meta.title}</Link>
        <div />
        {links.map(l => <Link to={l.link} key={l.link}>{l.title}</Link>)}
      </Header>
      <Main>
        <Container>{props.children}</Container>
      </Main>
      <ThemeSwitcher />
    </Layout>
  );
}

export default AppLayout;