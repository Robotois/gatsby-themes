import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Course from '../components/course';

export const query = graphql`
  query($courseID: String!) {
    course(id: { eq: $courseID }) {
      title
      releaseDate(formatString: "MMMM D, YYYY")
      description
      videoId
      code
    }
  }
`;

function ProductTemplate({ data: { course } }) {
  return (
    <Layout>
      <Course course={course} />
    </Layout>
  );
}

export default ProductTemplate;
