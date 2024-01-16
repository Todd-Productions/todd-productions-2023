import { Content, SectionHeading, VideoPlayer } from "@/ui/atoms"
import { getCanonicalLink } from "../../../utils/common"
import { InternalTemplate } from "../../ui/templates"
import { getDefaultProps } from "../actions"

import { socialLinks } from "../../../siteMeta"

// types
import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

import "./styles.css"

const crumbs: ICrumb[] = [
  {
    label: "Home",
    url: ".",
  },
  {
    label: "25 Year Announcement",
  },
]

export function generateMetadata() {
  return {
    title: "25 Year Announcement",
    description:
      "Video Production, Web Design, Graphic Designs - What Do You Need?",
    alternates: {
      canonical: getCanonicalLink("contact-us"),
    },
  }
}

const ContactPage = () => (
  <InternalTemplate crumbs={crumbs} {...getDefaultProps()}>
    <SectionHeading>
      Todd Productions Inc. Celebrates 25 Years of Excellence in Digital Media
      Production
    </SectionHeading>
    <Content>
      <div className="announcementArticle">
        <p>
          <i>
            Maumee area experts in video, audio, graphic design and web
            development marks business anniversary with streaming documentary
          </i>
        </p>
        <p>
          <strong>Maumee, Ohio, January 15, 2024</strong> - Todd Productions
          Inc., a leading media production company based in Maumee, Ohio, is
          proud to announce its 25th business anniversary. Since its founding in
          1999, the company has produced award-winning documentaries, TV spots,
          corporate videos, branding, and educational materials for clients
          across northwest Ohio, and throughout the East Coast.
        </p>
        <p>
          Todd Stanton, the founder and CEO of Todd Productions Inc., said:
          &quot;We are thrilled to celebrate this milestone with our loyal
          clients, partners, and creative team. For 25 years, we have been
          committed to delivering high-quality digital media products that
          inform, inspire, and entertain. We are grateful for the trust and
          support we have received from our clients and the community over the
          years. We look forward to continuing our mission of creative media
          excellence for many more years to come.&quot;
        </p>
        <p>
          <strong>About the Company:</strong> Todd Productions Inc. offers a
          full range of media production services, including video production,
          logo animation, graphic design, audio/visual services and digital
          distribution, plus website programming, hosting, SEO strategy, and web
          application development. The company employs a talented team of
          professionals who can handle any project from concept to completion.
          Some of the company&apos;s notable works include The Paul Schlegel
          Documentary; development of the Maumee Palooza daytime music stage and
          4-hour live stream; as well as numerous corporate training and
          promotional videos, convention reels, legacy films, music videos,
          ecommerce and marketing websites, as well as emerging media
          applications.
        </p>

        <p>
          The company will debut a new documentary, titled{" "}
          <strong>
            &quot;Todd Productions: 25 Years of Creative Media&quot;
          </strong>{" "}
          which on <em>January 23 at 10a.m.</em> Watch below or visit{" "}
          <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>{" "}
          and{" "}
          <a href={socialLinks.youtube} target="_blank" rel="noreferrer">
            YouTube
          </a>
        </p>
        <br />

        <VideoPlayer videoId="X-gPqQQhoRU" />
      </div>
    </Content>
  </InternalTemplate>
)

export default ContactPage
