import React from 'react';
import { Layout, Header as HeaderWrapper, Main, Container, useColorMode } from 'theme-ui';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/use-site-metadata';

import './layout.css';

function AppLayout(props) {
  const meta = useSiteMetadata();
  const links = meta.headerLinks || [];
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Layout>
      <HeaderWrapper>
        <Link to="/">{meta.title}</Link>
        <div />
        {links.map(l => <Link to={l.link} key={l.link}>{l.title}</Link>)}
      </HeaderWrapper>
      <button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
      <Main>
        <Container>{props.children}</Container>
      </Main>
    </Layout>
  );
}

export default AppLayout;