/** @jsx jsx */
import { Layout, Header, Main, jsx } from 'theme-ui';
// eslint-disable-next-line
import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/use-site-metadata';
import ThemeSwitcher from './theme-switcher';
import './layout.css';

function AppLayout({ children }) {
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
        <div style={{ width: '99vw' }}>{children}</div>
      </Main>
      <ThemeSwitcher />
    </Layout>
  );
}

export default AppLayout;
