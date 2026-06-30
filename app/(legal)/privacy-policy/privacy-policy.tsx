"use client";
import {
  Globe,
  Mail,
  Phone,
  ShieldCheck,
  Database,
  Lock,
  RefreshCw,
  FileText,
} from "lucide-react";

import LegalLayout from "@/components/legal/legal-layout";
import LegalSection from "@/components/legal/legal-section";
import Header from "@/components/header";
import { useState } from "react";

const PrivacyPolicy = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div>
      <Header
        isCartOpen={isCartOpen}
        onCartToggle={() => setIsCartOpen((prev) => !prev)}
      />
      <LegalLayout
        title="Privacy Policy"
        description="Your privacy is important to us. This Privacy Policy explains how Easy Bay collects, uses, and protects your information."
      >
        <LegalSection title="1. Information We Collect">
          <ul className="list-disc space-y-2 pl-6">
            <li>Facebook Page ID</li>
            <li>Facebook Page Access Token (only for authorized publishing)</li>
            <li>Product images uploaded by you</li>
            <li>
              Product information such as title, category, description, and tags
            </li>
            <li>AI-generated captions, hashtags, and scheduling information</li>
          </ul>
        </LegalSection>

        <LegalSection title="2. How We Use Your Information">
          <ul className="list-disc space-y-2 pl-6">
            <li>Generate AI-powered product captions.</li>
            <li>Automatically publish posts to your Facebook Page.</li>
            <li>Store product information for scheduling.</li>
            <li>Improve our services and user experience.</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Third-Party Services">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <Database className="h-5 w-5" />
                Meta (Facebook Graph API)
              </div>
              <p className="text-sm text-muted-foreground">
                Used for publishing content to authorized Facebook Pages.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <Database className="h-5 w-5" />
                Google Gemini AI
              </div>
              <p className="text-sm text-muted-foreground">
                Used to analyze product images and generate marketing content.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <Database className="h-5 w-5" />
                Cloudinary
              </div>
              <p className="text-sm text-muted-foreground">
                Stores uploaded product images securely.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <Database className="h-5 w-5" />
                Vercel & PostgreSQL
              </div>
              <p className="text-sm text-muted-foreground">
                Used for hosting and securely storing application data.
              </p>
            </div>
          </div>
        </LegalSection>

        <LegalSection title="4. Data Security">
          <div className="flex gap-3">
            <ShieldCheck className="mt-1 h-6 w-6 text-green-600" />
            <p>
              We implement reasonable technical and organizational measures to
              protect your information from unauthorized access, disclosure, or
              misuse.
            </p>
          </div>
        </LegalSection>

        <LegalSection title="5. Data Retention">
          <div className="flex gap-3">
            <Lock className="mt-1 h-6 w-6 text-blue-600" />
            <p>
              We retain your information only as long as necessary to provide
              our services and comply with legal obligations.
            </p>
          </div>
        </LegalSection>

        <LegalSection title="6. Updates to This Policy">
          <div className="flex gap-3">
            <RefreshCw className="mt-1 h-6 w-6 text-orange-500" />
            <p>
              This Privacy Policy may be updated from time to time. Any changes
              will be published on this page with an updated effective date.
            </p>
          </div>
        </LegalSection>

        <LegalSection title="7. Contact Information">
          <div className="rounded-xl border bg-muted/30 p-6">
            <h3 className="mb-4 text-xl font-semibold">Easy Bay</h3>

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
                  className="text-primary underline"
                >
                  https://easybay-bd.vercel.app
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5" />
                <span>
                  Shop No. 6, Helal Market,
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

export default PrivacyPolicy;
