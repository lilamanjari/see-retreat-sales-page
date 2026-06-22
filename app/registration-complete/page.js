import Link from "next/link";

export const metadata = {
  title: "Registration Complete | SEE Retreat",
  description: "Registration complete for the SEE retreat.",
};

export default function RegistrationCompletePage() {
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
          <p className="eyebrow">Registration Complete</p>
          <h1>Thank you.</h1>
          <p className="thankYouLead">
            Your registration details have been received.
          </p>
          <p className="thankYouText">
            You&apos;ve now completed the registration process and started your
            journey! As soon as we receive your payment, your spot will be
            confirmed.
          </p>
          <p className="thankYouText">
            Your payment link has already been sent to your email. Please let us
            know if you need it to be sent again.
          </p>
          <Link href="/" className="buttonPrimary">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
