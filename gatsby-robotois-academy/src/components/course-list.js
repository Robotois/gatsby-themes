/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';

function CourseList({ courses }) {
  return (
    <Styled.ul >
      {courses.map(course => {
        const { slug, lessons } = course;
        return (
          <Styled.li key={course.id}>
            <Link to={`${slug}/${lessons[0].slug}`}>
              <Styled.h2>{course.title}</Styled.h2>
              <p className="summary">{course.description}</p>
              <span className="summary">
                {new Date(course.releaseDate).toLocaleDateString('es-MX', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </Link>
          </Styled.li>
        );
      })}
    </Styled.ul>
  );
}

export default CourseList;
