/** @jsx jsx */
import { Link } from 'gatsby';
import { Styled, Flex, jsx } from 'theme-ui';
import FileDownloader from './file-downloader'

function Course({ course, currentLessonId }) {
  const { lessons } = course;
  const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
  const currentLesson = lessons[currentIndex];
  const nextLesson = lessons[currentIndex + 1];
  const previousLesson = lessons[currentIndex - 1];
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
          height: 700,
          overflowY: 'scroll',
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
          {currentLesson.videoId ? (
            <iframe
              frameBorder="0"
              height="100%"
              width="100%"
              title="Video"
              allowfullscreen="allowfullscreen"
              src={`https://youtube.com/embed/${currentLesson.videoId}?autoplay=0&controls=1&showinfo=0&autohide=0`}
            />
          ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
                <h3>Muy pronto tendremos esta lección disponible ...</h3>
                <span role="img" aria-label="light mode" style={{
                  paddingTop: 30,
                  fontSize: 100,
                }}>
                  👨🏽‍💻
                </span>
              </div>
            )}

        </div>
        <article sx={{ p: 8, pb: 6 }}>
          {currentLesson.content.map((content, idx) => <Styled.p key={idx}>{content}</Styled.p>)}
        </article>

        <Flex sx={{
          justifyContent: 'center',
          pb: 10
        }}>
          {
            currentLesson.file ? <FileDownloader link={currentLesson.file} /> : null}
        </Flex>
        <Flex sx={{
          justifyContent: 'space-between',
          pb: 10,
        }}>
          {
            previousLesson ? <Link
              sx={{
                color: 'title',
                textDecoration: 'underline',
                fontFamily: 'system-ui, sans-serif',
              }}
              to={`${course.slug}${previousLesson.slug}`}>
              {previousLesson.title}
            </Link> : null}
          {
            nextLesson ? <Link
              sx={{
                color: 'title',
                textDecoration: 'underline',
                fontFamily: 'system-ui, sans-serif',
              }}
              to={`${course.slug}${nextLesson.slug}`}>
              {nextLesson.title}
            </Link> : null}
        </Flex>
      </section>
    </Flex>
  );
}

export default Course;
