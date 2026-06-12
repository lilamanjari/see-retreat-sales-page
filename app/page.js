import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've done a lot of personal development work, but SEE was the first time I truly understood the patterns running my life. It changed everything.",
    author: "David R.",
    role: "Entrepreneur, USA",
  },
  {
    quote:
      "The combination of deep psychological insight and the medicine ceremony allowed me to see things I couldn't see on my own. Profound.",
    author: "Marie L.",
    role: "Executive Coach, Canada",
  },
  {
    quote:
      "I left with more clarity in one week than I've had in years. I finally feel free to choose differently.",
    author: "James K.",
    role: "Father & Business Owner, UK",
  },
];

const differentiators = [
  {
    icon: "/symbols/1-see.png",
    title: "We teach people how to see.",
    text: "Our curriculum reveals the unconscious patterns that shape your thoughts, emotions, and behavior.",
  },
  {
    icon: "/symbols/2-plant-medicine.png",
    title: "Plant medicine as support.",
    text: "We don't view plant medicine as the transformation itself. We use it as a tool to go deeper, with preparation, intention, and integration.",
  },
  {
    icon: "/symbols/3-community.png",
    title: "Intimate and safe space.",
    text: "A small group held by trust, confidentiality, and a shared commitment to truth and growth.",
  },
  {
    icon: "/symbols/4-psychology.png",
    title: "Psychology. Not spirituality.",
    text: "We work in the dimension of consciousness. No dogma, no ideology. Just insight, responsibility, and choice.",
  },
  {
    icon: "/symbols/5-integration.png",
    title: "Integration that lasts.",
    text: "You leave with practical tools and a new way of living so the insights become your life.",
  },
];

const journeySteps = [
  ["Arrive & Exhale", "Land, settle in, and open.", "/symbols-2/1-tree.png"],
  [
    "Seeing Reality More Clearly",
    "Begin to observe yourself and your mind.",
    "/symbols-2/2-sunrise.png",
  ],
  [
    "Seeing the Patterns",
    "Recognize the conditioning and patterns that shape your life.",
    "/symbols-2/3-talking.png",
  ],
  [
    "Seeing With Compassion",
    "Plant medicine ceremony to go deeper with support and safety.",
    "/symbols-2/4-compassion-2.png",
  ],
  [
    "Integration",
    "Make sense of what you've seen. Connect, share, and reflect.",
    "/symbols-2/5-integration-2.png",
  ],
  [
    "Living Consciously",
    "Explore new ways of being and choosing.",
    "/symbols-2/6-meditation.png",
  ],
  [
    "Returning Home",
    "Bring clarity back into your everyday life.",
    "/symbols-2/7-mountains.png",
  ],
];

const exploreItems = [
  "Why we create emotional suffering",
  "Projection and relationship patterns",
  "Self-deception and defense mechanisms",
  "Fear, pride and unconscious behavior",
  "Responsibility and freedom",
  "Conscious decision-making",
  "Living from clarity rather than conditioning",
];

const team = [
  {
    name: "Jack Levy",
    role: "Founder & Lead Teacher",
    bio: "Over two decades of deep study, Jack has developed precise insights into the intricate details of human psychology. He guides people to recognize the unconscious patterns that keep them trapped so they can live with clarity and freedom.",
    image: "/jack.png",
  },
  {
    name: "Laila Frotjold",
    role: "Curriculum & Experience Designer",
    bio: "Laila is an experienced space holder and expert workshop facilitator. She will be our guide through the entire journey.",
    image: "/laila2.png",
  },
  {
    name: "Itzel Chela",
    role: "Operations & Guest Experience",
    bio: "Itzel holds ceremonial space and workshops with warmth, intuition, and attention to detail, ensuring you feel supported every step of the way.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Plant Medicine Facilitator",
    role: "To Be Announced",
    bio: "An experienced guide in traditional ceremony, holding a safe, sacred space for deep inner exploration and healing.",
    image: null,
  },
];

const quickDetails = [
  ["Aug 31 - Sep 6, 2025", "First week of September 2025"],
  ["Tepic Airport (TPQ)", "Approx. 30 min to retreat center"],
  ["$2,222 USD", "Early bird until July 15: $1,999 USD"],
  [
    "Includes",
    "Accommodation, meals, airport transfers, ceremonies, and more.",
  ],
];

function SectionEyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" id="overview">
        <Image
          src="/HeroArt.png"
          alt="Sunset over a lush mountain lake retreat setting"
          fill
          priority
          className="heroImage"
        />
        <div className="heroOverlay" />
        <header className="topNav">
          <div className="brand">
            <span className="brandTitle">Human Project</span>
            <span className="brandSubtitle">The Art of Being Human</span>
          </div>
          <nav className="navLinks" aria-label="Section navigation">
            <a href="#overview">Overview</a>
            <a href="#journey">The Journey</a>
            <a href="#about">About</a>
            <a href="#location">Location</a>
            <a href="#details">Details</a>
            <a href="#apply">Apply</a>
          </nav>
        </header>

        <div className="heroContent">
          <h1>SEE</h1>
          <p className="heroSubheading">A 7-day transformational retreat</p>
          <div className="heroDivider" />
          <p className="heroQuote">
            We suffer because we cannot see clearly. When we learn to see
            clearly, we gain the freedom to choose differently.
          </p>
          <p className="heroDescription">
            SEE is an immersive retreat that helps you recognize the unconscious
            patterns shaping your life, relationships, decisions, and experience
            of reality.
          </p>

          <div className="heroMeta">
            <div>
              <span className="metaIcon" aria-hidden="true">
                <CalendarDays strokeWidth={1.75} />
              </span>
              <div>
                <strong>Aug 31 - Sep 6, 2025</strong>
                <span>First week of September 2025</span>
              </div>
            </div>
            <div>
              <span className="metaIcon" aria-hidden="true">
                <MapPin strokeWidth={1.75} />
              </span>
              <div>
                <strong>Santa Maria del Oro, Mexico</strong>
                <span>Nayarit</span>
              </div>
            </div>
          </div>

          <a href="#apply" className="buttonPrimary">
            Apply Now
          </a>
        </div>
      </section>

      <section className="section intro">
        <h2>
          Transformation happens when you truly <em>see.</em>
        </h2>
        <div className="testimonialGrid">
          {testimonials.map((item) => (
            <article key={item.author} className="testimonialCard">
              <span className="quoteMark">“</span>
              <p>{item.quote}</p>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section founder" id="about">
        <div className="founderCopy">
          <SectionEyebrow>A Message From Our Founder</SectionEyebrow>
          <h2>
            Why we created <em>SEE.</em>
          </h2>
          <p>
            For over two decades, we&apos;ve worked with thousands of people
            around the world. The patterns are always the same. We created SEE
            to offer a space where those patterns can finally be seen and
            transformed.
          </p>
          <p>Watch this short video from Jack to learn more.</p>
          <p className="signature">Jack Levy</p>
          <a href="#apply" className="buttonSecondary">
            <span className="buttonPlayIcon" aria-hidden="true" />
            Watch Video
          </a>
        </div>

        <div className="videoPlaceholder" aria-label="Video placeholder">
          <div className="videoShade" />
          <div className="playButton" />
          <div className="videoCaption">Founder video placeholder</div>
        </div>
      </section>

      <section className="section differentiators">
        <h2>What makes SEE different?</h2>
        <div className="featureGrid">
          {differentiators.map((item) => (
            <article key={item.title} className="featureCard">
              <div className="featureIcon">
                <Image
                  src={item.icon}
                  alt=""
                  width={72}
                  height={72}
                  className="featureIconImage"
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journeySection" id="journey">
        <div className="journeyInner section">
          <h2 className="journeyHeading">The Journey</h2>
          <div className="journeyTrack">
            {journeySteps.map(([title, text, icon]) => (
              <article key={title} className="journeyStep">
                <div className="journeyNumber">
                  <Image
                    src={icon}
                    alt=""
                    width={68}
                    height={68}
                    className="journeyIconImage"
                  />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="exploreSection">
        <div className="exploreCopy section">
          <div className="exploreText">
            <h2 className="exploreHeading">What You&apos;ll Explore</h2>
            <div className="exploreDivider" aria-hidden="true" />
            <ul className="exploreList">
              {exploreItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="exploreImageWrap">
            <Image
              src="/SharingCircle.png"
              alt="Retreat participants sitting in a sharing circle"
              fill
              className="coverImage"
            />
          </div>
        </div>
      </section>

      <section className="teamSection">
        <div className="section teamGrid">
          {team.map((member) => (
            <article key={member.name} className="teamCard">
              <div className="teamAvatar">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="coverImage"
                  />
                ) : (
                  <div className="avatarFallback" aria-hidden="true" />
                )}
              </div>
              <div>
                <h3>{member.name}</h3>
                <p className="teamRole">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="detailsSection section" id="location">
        <article className="detailBlock">
          <h2 className="detailHeading">The Setting</h2>
          <div className="detailDivider" aria-hidden="true" />
          <p>
            Nestled in the mountains of Nayarit, Mexico, Santa Maria del Oro is
            a magical place of lakes, jungle, and natural beauty.
          </p>
          <p>
            A peaceful, private retreat center where you can exhale, be held by
            nature, and go deep.
          </p>
        </article>

        <article className="detailImageBlock">
          <Image
            src="/hotel-laguna-view.webp"
            alt="Lagoon and mountains near the retreat setting"
            fill
            className="coverImage"
          />
        </article>

        <article className="detailBlock" id="details">
          <h2 className="detailHeading">Quick Details</h2>
          <div className="detailDivider" aria-hidden="true" />
          <div className="detailList">
            {quickDetails.map(([title, text]) => (
              <div key={title} className="detailItem">
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="detailBlock applyBlock" id="apply">
          <h2 className="detailHeading">Apply for SEE</h2>
          <div className="detailDivider" aria-hidden="true" />
          <p>
            SEE is an intimate experience with a limited number of participants.
            Please apply to see if this retreat is the right fit for you.
          </p>
          <a href="#overview" className="buttonPrimary">
            Apply Now
          </a>
          <p className="applyNote">
            Spots are limited. Applications close July 15, 2025.
          </p>
        </article>
      </section>
    </main>
  );
}
