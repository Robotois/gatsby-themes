/** @jsx jsx */
import { Link } from 'gatsby';
import { Styled, Flex, jsx } from 'theme-ui';
const data = [{
  id: 1,
  title: 'Introduccion',
  description: 'Summary. Lorem ipsum dolor sit amet.',
},
{
  id: 2,
  title: 'Introduccion II',
  description: 'Summary. Lorem ipsum dolor sit amet.',
},
{
  id: 3,
  title: 'Introduccion III',
  description: 'Summary. Lorem ipsum dolor sit amet.',
}]

function Course({ course }) {
  const videos = course.videos || data;
  return (
    <Flex
      sx={{
        p: 3,
        //display: ["flex", "none"],
        // visibility: ["visible", "hidden"],
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <nav
        sx={{
          // transform: [`translateX(${isOpen ? "0" : "-100%"})`, "none"],
          transition: "300ms cubic-bezier(1, 0, 0, 1)",
        }}
      >
        <Styled.ul role="menu" sx={{ pb: 14 }}>
          {videos.map(video => {
            return (
              <Styled.li key={video.id}>
                <Link
                  role="menuitem"
                  activeClassName="active"
                  to={course.slug}>
                  <Styled.h2 >{video.title}</Styled.h2>
                  <p className="summary">{video.description}</p>
                </Link>
              </Styled.li>
            );
          })}
        </Styled.ul>
      </nav>
      <section>
        <div sx={{ width: '100%', height: 500, border: '1px solid red', bg: 'primary' }}>video</div>
        <article sx={{ p: 8, pb: 14 }}>
          <Styled.p>
            Corned beef pork belly prosciutto tenderloin shank capicola. Swine spare ribs pork chop shank ham hock leberkas meatball. Prosciutto venison flank drumstick, bacon sausage pancetta leberkas meatloaf doner shoulder. Sausage ball tip pork chop alcatra, fatback brisket short loin.
          </Styled.p>
          <Styled.p>
            Flank pork belly leberkas pig jowl corned beef. Hamburger ham salami, venison pastrami strip steak spare ribs pork belly brisket. Bacon chicken tenderloin shankle tongue doner, corned beef shoulder burgdoggen cupim chuck pig turkey. Biltong brisket doner sirloin kielbasa short ribs porchetta prosciutto turkey leberkas ground round landjaeger spare ribs. Kevin strip steak tongue, bacon cupim chicken drumstick rump.
          </Styled.p>
        </article>
      </section>
    </Flex>
  );
}

export default Course;
