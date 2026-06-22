import Link from "next/link";

export const metadata = {
  title: "Thank You | SEE Retreat",
  description: "Thank you for applying to the SEE retreat.",
};

export default function ThankYouPage() {
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
          <p className="eyebrow">Application Received</p>
          <h1>Thank you.</h1>
          <p className="thankYouLead">
            Your application for SEE has been received.
          </p>
          <p className="thankYouText">
            We&apos;ll be in touch shortly after reviewing your application.
          </p>
          <Link href="/" className="buttonPrimary">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
