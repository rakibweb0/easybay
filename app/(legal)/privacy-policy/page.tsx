import { Metadata } from "next";
import PrivacyPolicy from "./privacy-policy";

export const generateMetadata: Metadata = {
  title: "Privacy Policy | Easy Bay",
  description:
    "Learn how Easy Bay collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
