import Link from "next/link";

export const metadata = {
  title: "Message Received | SEE Retreat",
  description: "Thank you for reaching out to the SEE retreat team.",
};

export default function ContactThankYouPage() {
  return (
    <main className="thankYouPage">
      <section className="thankYouHero">
        <div className="thankYouOverlay" />

        <header className="thankYouHeader">
          <div className="brand">
            <span className="brandTitle">Human Project</span>
            <span className="brandSubtitle">The Art of Being Human</span>
          </div>
        </header>

        <div className="thankYouCard">
          <p className="eyebrow">Message Sent</p>
          <h1>Thank you.</h1>
          <p className="thankYouLead">
            Your message has been sent to the SEE team.
          </p>
          <p className="thankYouText">
            We&apos;ll be in touch shortly after reviewing your question.
          </p>
          <Link href="/" className="buttonPrimary">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
