import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Course from '../components/course';

export const query = graphql`
  query($courseId: String!) {
    course(id: { eq: $courseId }) {
      title
      releaseDate(formatString: "MMMM D, YYYY")
      description
      slug
      lessons {
        id
        videoId
        title
        description
        content
        code
        codeType
        file
        slug
      }
    }
  }
`;

function ProductTemplate({ data: { course, lesson }, pageContext }) {
  const { currentLessonId } = pageContext;
  return (
    <Layout>
      <Course course={course} currentLessonId={currentLessonId} />
    </Layout>
  );
}

export default ProductTemplate;
