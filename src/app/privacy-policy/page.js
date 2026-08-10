import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read Lingoscribe's Privacy Policy. Learn how Lingoscribe.ai collects, uses, and protects your information when you use our AI speech-to-text, translation, NER, and summarization services.",
  alternates: {
    canonical: "https://lingoscribe.ai/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="w-full bg-black/80 backdrop-blur-sm text-white py-6 px-6 md:px-20 flex justify-between items-center border-b border-white/10">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Lingoscribe Logo"
            className="w-[150px] cursor-pointer"
            width={120}
            height={120}
          />
        </Link>
        <Link
          href="/"
          className="px-5 py-1.5 border border-white rounded-full text-md font-medium hover:bg-white hover:text-black transition-all duration-200"
        >
          Back to Home
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#7EC8F5] via-[#C08CFA] to-[#A05CEB] bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: May 11, 2026</p>

        <Section title="1. Introduction">
          <p>
            Lingoscribe.ai, Inc. (&quot;Lingoscribe,&quot; &quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;) operates an AI-powered speech
            and language technology platform purpose-built for underserved
            languages and indigenous dialects. This Privacy Policy explains how
            we collect, use, disclose, and protect your information when you
            access or use our website at lingoscribe.ai, our APIs, and related
            services (collectively, the &quot;Services&quot;).
          </p>
          <p>
            Lingoscribe is committed to data minimization. We do not store
            sensitive or personally identifying content from end users beyond
            what is strictly necessary to deliver the Services you request.
          </p>
          <p>
            By using our Services, you agree to the collection and use of
            information as described in this policy. If you do not agree,
            please do not use our Services.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <SubHeading>Account Information</SubHeading>
          <p>
            When you create an account, we collect your name, email address,
            and authentication credentials. If you sign in through a
            third-party provider (e.g., Google), we receive your name, email,
            and profile information from that provider.
          </p>

          <SubHeading>Payment Information</SubHeading>
          <p>
            When you subscribe to a paid plan, our third-party payment
            processor collects your billing details, including name, billing
            address, and payment card information. We do not store your full
            card number on our servers.
          </p>

          <SubHeading>Audio, Text & Content Data</SubHeading>
          <p>
            Our Services process audio files, voice recordings, and text input
            that you provide in order to deliver features such as
            transcription, translation, named entity recognition (NER), and
            summarization. We do not store sensitive or informative content
            data from end users beyond what is required to return your result
            and operate the Service. Audio and text submitted for processing
            are handled in line with Section 5 (Content Data Handling).
          </p>

          <SubHeading>Usage Information</SubHeading>
          <p>
            We automatically collect limited information about how you interact
            with our Services, including IP address, browser type, device
            information, pages visited, API calls made, timestamps, and
            referring URLs. This information is used to operate, secure, and
            improve the Services.
          </p>

          <SubHeading>Communications</SubHeading>
          <p>
            When you contact us for support or provide feedback, we collect the
            contents of your message along with your contact information so we
            can respond.
          </p>
        </Section>

        <Section title="3. Legal Basis for Processing">
          <p>
            We process your personal information on the following legal bases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Contract Performance:</strong> Processing necessary to
              provide our Services to you (e.g., account management, payment
              processing, delivering transcription and translation results).
            </li>
            <li>
              <strong>Legitimate Interests:</strong> Processing for our
              legitimate business interests, such as improving our Services,
              fraud prevention, and security, where these interests are not
              overridden by your rights.
            </li>
            <li>
              <strong>Consent:</strong> Where you have given explicit consent,
              such as opting in to marketing communications.
            </li>
            <li>
              <strong>Legal Obligation:</strong> Processing necessary to comply
              with applicable laws and regulations.
            </li>
          </ul>
        </Section>

        <Section title="4. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our Services</li>
            <li>Process your transactions and manage your account</li>
            <li>
              Process audio, text, and other content you submit in order to
              deliver the transcription, translation, NER, or summarization
              result you requested
            </li>
            <li>
              Communicate with you about your account, updates, and
              service-related notices
            </li>
            <li>
              Send marketing communications (with your consent, which you may
              withdraw at any time)
            </li>
            <li>Monitor and analyze usage trends to improve our platform</li>
            <li>
              Detect, investigate, and prevent fraudulent or unauthorized
              activity
            </li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="5. Content Data Handling">
          <p>
            We understand that audio recordings and text submitted to a speech
            platform can be sensitive. Lingoscribe is built around a principle
            of data minimization:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We do not store sensitive or informative end-user content beyond
              what is required to return your requested output.
            </li>
            <li>
              Audio and text submitted through our Services are processed to
              produce the requested transcription, translation, NER, or
              summary, and are then deleted or anonymized in line with our
              retention practices in Section 8.
            </li>
            <li>
              We do not sell, rent, or share your content data with third
              parties for advertising purposes.
            </li>
          </ul>

          <SubHeading>Model Training</SubHeading>
          <p>
            We do not use identifiable end-user audio or text to train our
            models without consent. Where we use any content data to evaluate
            or improve our models, we use de-identified and aggregated data
            only. Account holders can contact us at{" "}
            <a
              href="mailto:contact@lingoscribe.ai"
              className="text-purple-400 hover:underline"
            >
              contact@lingoscribe.ai
            </a>{" "}
            to opt out of any future use of their content for model
            improvement.
          </p>
        </Section>

        <Section title="6. How We Share Your Information">
          <p>We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> With third-party vendors who
              assist us in operating our Services (e.g., payment processors,
              cloud hosting providers, analytics tools), bound by data
              processing agreements and confidentiality obligations.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law,
              subpoena, or government request, or to protect our rights,
              safety, or property. Where legally permitted, we will make
              reasonable efforts to notify you before disclosing your
              information in response to such requests.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets, your information may be
              transferred as part of that transaction. We will notify you of
              any such change and any choices you may have regarding your
              information.
            </li>
            <li>
              <strong>With Your Consent:</strong> When you direct us to share
              information with a third party.
            </li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </Section>

        <Section title="7. Cookies & Tracking">
          <p>We use the following types of cookies and similar technologies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for the Services to
              function (e.g., session management, authentication). These
              cannot be disabled.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how you
              use our Services. These collect aggregate usage data.
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your settings and
              preferences for a better experience.
            </li>
          </ul>
          <p>
            You can control non-essential cookies through your browser
            settings. Disabling cookies may affect the functionality of our
            Services.
          </p>
        </Section>

        <Section title="8. Data Retention">
          <p>
            We retain your personal information only for as long as needed to
            provide the Services and for the purposes described in this
            policy. Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information is retained while your account is active.</li>
            <li>
              Audio and text content submitted for processing is retained only
              as long as needed to deliver the requested result, after which
              it is deleted or anonymized.
            </li>
            <li>
              Usage logs may be retained in anonymized form for up to 24
              months.
            </li>
            <li>
              Payment records are retained as required by tax and financial
              regulations.
            </li>
          </ul>
          <p>
            When you delete your account, we will delete or anonymize your
            personal information within 30 calendar days, except where
            retention is required by law. You can delete your account or
            request deletion by contacting us at{" "}
            <a
              href="mailto:contact@lingoscribe.ai"
              className="text-purple-400 hover:underline"
            >
              contact@lingoscribe.ai
            </a>
            .
          </p>
        </Section>

        <Section title="9. Data Security">
          <p>
            We implement appropriate technical and organizational measures to
            protect your information against unauthorized access, alteration,
            disclosure, or destruction. These include encryption in transit
            (TLS) and at rest, access controls, and regular security
            assessments.
          </p>
          <p>
            No method of transmission over the internet is 100% secure. While
            we strive to protect your data, we cannot guarantee absolute
            security.
          </p>
        </Section>

        <Section title="10. Data Breach Notification">
          <p>
            In the event of a data breach that affects your personal
            information, we will notify affected users and applicable
            regulatory authorities as required by applicable law (including
            GDPR where applicable). Where required, we will provide
            notification within 72 hours of becoming aware of the breach,
            including details about the nature of the breach, the data
            affected, and the steps we are taking in response.
          </p>
        </Section>

        <Section title="11. International Data Transfers">
          <p>
            Your information may be transferred to and processed in countries
            other than your country of residence, where our servers and
            service providers are located. For transfers from the European
            Economic Area (EEA), United Kingdom, or Switzerland, we rely on
            appropriate safeguards such as Standard Contractual Clauses
            approved by the European Commission or other lawful transfer
            mechanisms.
          </p>
        </Section>

        <Section title="12. Children's Privacy">
          <p>
            Our Services are not intended for individuals under the age of 18.
            We do not knowingly collect personal information from children. If
            we become aware that we have collected information from a child
            under 18, we will take steps to delete it promptly. If you believe
            a child has provided us with personal information, please contact
            us at{" "}
            <a
              href="mailto:contact@lingoscribe.ai"
              className="text-purple-400 hover:underline"
            >
              contact@lingoscribe.ai
            </a>
            .
          </p>
        </Section>

        <Section title="13. Your Rights">
          <p>
            Depending on your jurisdiction, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Access:</strong> Request a copy of the personal
              information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or
              incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal
              information.
            </li>
            <li>
              <strong>Portability:</strong> Request a portable copy of your
              data in a commonly used format.
            </li>
            <li>
              <strong>Restriction:</strong> Request restriction of processing
              in certain circumstances.
            </li>
            <li>
              <strong>Objection:</strong> Object to processing based on
              legitimate interests.
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Where processing is based on
              consent, withdraw that consent at any time.
            </li>
            <li>
              <strong>Opt-Out:</strong> Opt out of marketing communications at
              any time.
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:contact@lingoscribe.ai"
              className="text-purple-400 hover:underline"
            >
              contact@lingoscribe.ai
            </a>
            . We will respond to your request within 30 days (or sooner if
            required by applicable law). We will not discriminate against you
            for exercising your rights.
          </p>
        </Section>

        <Section title="14. California Privacy Rights">
          <p>
            If you are a California resident, the California Consumer Privacy
            Act (CCPA) and the California Privacy Rights Act (CPRA) provide
            you with additional rights, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The right to know what personal information we collect, use, and
              disclose.
            </li>
            <li>The right to delete your personal information.</li>
            <li>
              The right to opt out of the sale or sharing of your personal
              information. We do not sell or share personal information as
              defined under CCPA/CPRA.
            </li>
            <li>The right to correct inaccurate personal information.</li>
            <li>The right to limit the use of sensitive personal information.</li>
            <li>The right to non-discrimination for exercising your rights.</li>
          </ul>
          <p>
            To exercise your California privacy rights, contact us at{" "}
            <a
              href="mailto:contact@lingoscribe.ai"
              className="text-purple-400 hover:underline"
            >
              contact@lingoscribe.ai
            </a>
            .
          </p>
        </Section>

        <Section title="15. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will
            notify you of material changes by posting the updated policy on
            this page and updating the &quot;Last updated&quot; date. For
            material changes that affect how we process your personal
            information, we will provide at least 30 days&apos; notice via
            email or prominent notice in our Services before the changes take
            effect. Your continued use of our Services after changes are
            posted constitutes your acceptance of the updated policy.
          </p>
        </Section>

        <Section title="16. Contact Us">
          <p>
            If you have questions about this Privacy Policy or wish to
            exercise your rights, contact us at:
          </p>
          <p>
            <strong>Lingoscribe.ai</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:contact@lingoscribe.ai"
              className="text-purple-400 hover:underline"
            >
              contact@lingoscribe.ai
            </a>
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
        {title}
      </h2>
      <div className="space-y-4 text-gray-300 leading-relaxed text-base">
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="text-lg font-semibold text-purple-300 mt-4">{children}</h3>
  );
}
