import { Metadata } from "next";
import Terms from "./terms";


export const metadata: Metadata = {
  title: "Terms of Service | Easy Bay",
  description:
    "Read the Terms of Service for using the Easy Bay platform and AI-powered Facebook automation services.",
};

export default function TermsPage() {
  return (
    <Terms/>
  );
}