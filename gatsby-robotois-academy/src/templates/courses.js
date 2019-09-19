import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import CourseList from '../components/course-list';

function CoursesTemplate() {
  const data = useStaticQuery(graphql`
    query {
      allCourse(sort: { fields: releaseDate, order: ASC }) {
        nodes {
          id
          title
          releaseDate(formatString: "MMMM D, YYYY")
          description
          slug
          lessons {
            slug
          }
        }
      }
    }
  `);

  const courses = data.allCourse.nodes;

  return (
    <Layout>
      <CourseList courses={courses} />
    </Layout>
  );
}

export default CoursesTemplate;
