"use client";
import {
  AlertTriangle,
  CheckCircle2,
  FileText,
  Globe,
  Image,
  Mail,
  Phone,
  Scale,
  Shield,
  Sparkles,
} from "lucide-react";

import LegalLayout from "@/components/legal/legal-layout";
import LegalSection from "@/components/legal/legal-section";
import { useState } from "react";
import Header from "@/components/header";

const Terms = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div>
      <Header
        isCartOpen={isCartOpen}
        onCartToggle={() => setIsCartOpen((prev) => !prev)}
      />
      <LegalLayout
        title="Terms of Service"
        description="Please read these Terms of Service carefully before using Easy Bay."
      >
        <LegalSection title="1. Acceptance of Terms">
          <div className="flex gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />
            <p>
              By accessing or using Easy Bay, you agree to comply with and be
              bound by these Terms of Service. If you do not agree with any part
              of these terms, you should not use our services.
            </p>
          </div>
        </LegalSection>

        <LegalSection title="2. Services We Provide">
          <p className="mb-4">
            Easy Bay provides AI-powered tools designed to simplify social media
            marketing and product management.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-5">
              <div className="mb-3 flex items-center gap-2 font-semibold">
                <Sparkles className="h-5 w-5 text-primary" />
                AI Content Generation
              </div>

              <p className="text-sm text-muted-foreground">
                Automatically generate marketing captions, titles and hashtags
                for your products.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <div className="mb-3 flex items-center gap-2 font-semibold">
                <Image className="h-5 w-5 text-primary" />
                Product Image Analysis
              </div>

              <p className="text-sm text-muted-foreground">
                AI analyzes uploaded product images to identify product type,
                color, style and other useful attributes.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <div className="mb-3 flex items-center gap-2 font-semibold">
                <Globe className="h-5 w-5 text-primary" />
                Facebook Automation
              </div>

              <p className="text-sm text-muted-foreground">
                Schedule and automatically publish content to your authorized
                Facebook Pages.
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <div className="mb-3 flex items-center gap-2 font-semibold">
                <FileText className="h-5 w-5 text-primary" />
                Product Management
              </div>

              <p className="text-sm text-muted-foreground">
                Organize products, captions and publishing schedules from one
                platform.
              </p>
            </div>
          </div>
        </LegalSection>

        <LegalSection title="3. User Responsibilities">
          <ul className="list-disc space-y-3 pl-6">
            <li>
              You are responsible for all content uploaded through the platform.
            </li>

            <li>
              You confirm that you own or have permission to use uploaded
              product images and related content.
            </li>

            <li>
              You are responsible for maintaining the security of your Facebook
              Page credentials and access permissions.
            </li>

            <li>
              You agree not to use Easy Bay for illegal, fraudulent, misleading,
              abusive or harmful activities.
            </li>

            <li>
              You agree not to violate Meta Platform Policies or any applicable
              laws while using our services.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Intellectual Property">
          <div className="flex gap-3">
            <Shield className="mt-1 h-6 w-6 text-blue-600" />

            <div className="space-y-3">
              <p>
                All trademarks, branding and software related to Easy Bay remain
                the property of Easy Bay.
              </p>

              <p>
                Product images and content uploaded by users remain the property
                of their respective owners.
              </p>

              <p>
                AI-generated captions should be reviewed before publishing.
                Although we strive for accuracy, we cannot guarantee that every
                generated response is error-free.
              </p>
            </div>
          </div>
        </LegalSection>

        <LegalSection title="5. Availability of Service">
          <p>
            We continuously improve our platform, but we cannot guarantee
            uninterrupted service. Temporary downtime may occur due to server
            maintenance, third-party provider issues, Facebook API limitations,
            internet outages or other technical reasons.
          </p>
        </LegalSection>

        <LegalSection title="6. Limitation of Liability">
          <div className="flex gap-3">
            <AlertTriangle className="mt-1 h-6 w-6 text-amber-500" />

            <div className="space-y-3">
              <p>
                Easy Bay is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis.
              </p>

              <p>We are not responsible for:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Facebook API outages or policy changes.</li>

                <li>Temporary AI service interruptions.</li>

                <li>Incorrect AI-generated content.</li>

                <li>Publishing failures caused by expired access tokens.</li>

                <li>
                  Loss of business, revenue or profits resulting from service
                  interruptions.
                </li>

                <li>User mistakes or incorrect platform configuration.</li>
              </ul>
            </div>
          </div>
        </LegalSection>

        <LegalSection title="7. Termination">
          <p>
            We reserve the right to suspend or terminate access to Easy Bay if a
            user violates these Terms of Service, applicable laws or Meta
            Platform Policies.
          </p>
        </LegalSection>

        <LegalSection title="8. Changes to These Terms">
          <p>
            Easy Bay may modify these Terms of Service at any time. Updated
            terms will be published on this page. Continued use of the service
            after changes become effective constitutes acceptance of the revised
            Terms.
          </p>
        </LegalSection>

        <LegalSection title="9. Governing Law">
          <div className="flex gap-3">
            <Scale className="mt-1 h-6 w-6 text-indigo-600" />

            <p>
              These Terms shall be governed by and interpreted in accordance
              with the applicable laws of Bangladesh, without regard to conflict
              of law principles.
            </p>
          </div>
        </LegalSection>

        <LegalSection title="10. Contact Information">
          <div className="rounded-xl border bg-muted/30 p-6">
            <h3 className="mb-5 text-xl font-semibold">Easy Bay</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />

                <span>+8801521426630</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />

                <span>support@easybay-bd.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5" />

                <a
                  href="https://easybay-bd.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  https://easybay-bd.vercel.app
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5" />

                <span>
                  Shop No. 6,
                  <br />
                  Helal Market,
                  <br />
                  Grand Hotel Mor,
                  <br />
                  Rangpur, Bangladesh.
                </span>
              </div>
            </div>
          </div>
        </LegalSection>
      </LegalLayout>
    </div>
  );
};

export default Terms;
