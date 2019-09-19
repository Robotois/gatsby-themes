/** @jsx jsx */
import { Link } from 'gatsby';
import { Styled, Flex, jsx } from 'theme-ui';

function Course({ course, currentLessonId }) {
  const { lessons } = course;
  const currentLesson = lessons.find(l => l.id === currentLessonId);
  return (
    <Flex
      sx={{
        p: 3,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <nav
        sx={{
          pt: 11,
          display: ["none", "flex"],
          visibility: ["hidden", "visible"],
          flex: 1,
          // transform: [`translateX(${isOpen ? "0" : "-100%"})`, "none"],
          transition: "300ms cubic-bezier(1, 0, 0, 1)",
        }}
      >
        <Styled.ul role="menu" sx={{ pb: 14 }}>
          {lessons.map(lesson => {
            return (
              <Styled.li key={lesson.id}>
                <Link
                  role="menuitem"
                  activeClassName="active"
                  to={`${course.slug}${lesson.slug}`}>
                  <Styled.h3>{lesson.title}</Styled.h3>
                  <p className="summary">{lesson.description}</p>
                </Link>
              </Styled.li>
            );
          })}
        </Styled.ul>
      </nav>
      <section sx={{ flex: 3 }}>
        <Styled.h1 sx={{ textAlign: 'center' }}>{course.title}</Styled.h1>
        <div sx={{ width: '100%', height: 500 }}>
          <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video"
            src={`https://youtube.com/embed/${currentLesson.videoId}?autoplay=0&controls=1&showinfo=0&autohide=0`}
          />
        </div>
        <article sx={{ p: 8, pb: 14 }}>
          {currentLesson.content.map((content, idx) => <Styled.p key={idx}>{content}</Styled.p>)}
        </article>
      </section>
    </Flex>
  );
}

export default Course;
