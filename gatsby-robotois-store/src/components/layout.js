import React from 'react';
import { Layout as ThemeLayout, Header, Main, Container } from 'theme-ui';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/use-site-metadata';

function Layout({ children }) {
  const meta = useSiteMetadata();

  return (
    <ThemeLayout>
      <Header>
        <Link to="/">{meta.title}</Link>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  );
}

export default Layout;
