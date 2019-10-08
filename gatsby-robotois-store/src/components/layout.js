/** @jsx jsx */
import { Layout, Header, Main, jsx } from 'theme-ui';
// eslint-disable-next-line
import React from 'react';
import { Link } from 'gatsby';
import SearchInput from './search-input'
import useSiteMetadata from '../hooks/use-site-metadata';
import ThemeSwitcher from './theme-switcher';
import { FilterContextProvider } from '../context/FilterContext';
import './layout.css';

function AppLayout({ children, hasSearch }) {
  const meta = useSiteMetadata();
  const links = meta.headerLinks || [];

  return (
    <Layout>
      <FilterContextProvider value={{ query: '' }}>
        <Header>
          <Link to="/">{meta.title}</Link>
          <div>
            {hasSearch ? <SearchInput header /> : null}
          </div>
          {links.map(l => <Link to={l.link} key={l.link}>{l.title}</Link>)}
        </Header>
        <Main>
          {hasSearch ? <SearchInput /> : null}
          <div style={{ width: '99vw' }}>{children}</div>
        </Main>
        <ThemeSwitcher />
      </FilterContextProvider>
    </Layout>
  );
}

export default AppLayout;
