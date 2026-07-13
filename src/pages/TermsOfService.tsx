import LegalPageLayout from "../components/LegalPageLayout";

export default function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service" updated="July 12, 2026">
      <p>
        These Terms of Service ("Terms") govern your use of soundledger.ca and any related services operated by
        SoundLedger Technologies Inc. ("SoundLedger," "we," "us," or "our"). By accessing our website, you agree to
        these Terms.
      </p>

      <div>
        <h2 className="text-lg font-semibold text-white">Use of the Website</h2>
        <p className="mt-2">
          This website provides information about SoundLedger Technologies Inc. and its products. You agree to use
          the site only for lawful purposes and in a manner that does not infringe the rights of, or restrict the
          use of, any third party.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white">Products &amp; Services</h2>
        <p className="mt-2">
          Products referenced on this site, including SplitSheet, may be governed by separate terms of service
          specific to that product. Please review those terms before using any SoundLedger product.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white">Intellectual Property</h2>
        <p className="mt-2">
          All content on this website, including trademarks, logos, and text, is the property of SoundLedger
          Technologies Inc. and may not be used without prior written consent.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white">Disclaimer</h2>
        <p className="mt-2">
          This website and its content are provided "as is" without warranties of any kind. SoundLedger
          Technologies Inc. is not liable for any damages arising from the use of this site.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white">Changes to These Terms</h2>
        <p className="mt-2">
          We may update these Terms from time to time. Continued use of the website after changes constitutes
          acceptance of the updated Terms.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white">Contact Us</h2>
        <p className="mt-2">Questions about these Terms can be directed to hello@soundledger.ca.</p>
      </div>
    </LegalPageLayout>
  );
}
