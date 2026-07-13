import LegalPageLayout from "../components/LegalPageLayout";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 12, 2026">
      <p>
        SoundLedger Technologies Inc. ("SoundLedger," "we," "us," or "our") respects your privacy. This Privacy
        Policy explains how we collect, use, and protect information when you visit soundledger.ca or interact
        with our products, including SplitSheet.
      </p>

      <div>
        <h2 className="text-lg font-semibold text-white">Information We Collect</h2>
        <p className="mt-2">
          We may collect information you provide directly to us (such as your name and email address when you
          contact us), as well as technical information collected automatically, such as browser type, device
          information, and usage analytics.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white">How We Use Information</h2>
        <p className="mt-2">
          We use collected information to operate and improve our website and products, respond to inquiries,
          communicate updates, and comply with legal obligations.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white">Sharing of Information</h2>
        <p className="mt-2">
          We do not sell personal information. We may share limited information with trusted service providers who
          help us operate our business, subject to appropriate confidentiality obligations.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white">Your Rights</h2>
        <p className="mt-2">
          You may request access to, correction of, or deletion of your personal information by contacting us at
          hello@soundledger.ca.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white">Contact Us</h2>
        <p className="mt-2">
          Questions about this Privacy Policy can be directed to hello@soundledger.ca.
        </p>
      </div>
    </LegalPageLayout>
  );
}
