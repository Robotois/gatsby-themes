/** @jsx jsx */
// eslint-disable-next-line
import React from 'react';
import { jsx } from 'theme-ui';
// import { Styled } from 'theme-ui';
import Layout from '../components/layout';
// import { Link } from 'gatsby';

const Success = (props) => (
  <Layout>
    {JSON.stringify(props.location.state)}
  </Layout>
);

export default Success;
