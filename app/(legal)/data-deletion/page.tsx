import { Metadata } from "next";
import DataDelation from "./data-delation";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | Easy Bay",
  description:
    "Learn how to request deletion of your data associated with the Easy Bay application.",
};

export default function DataDeletionPage() {
  return <DataDelation />;
}
