import type { Metadata } from "next";
import { mediaBacklogData } from "@/data/hobbies";
import BacklogCategoryView from "../BacklogCategoryView";

export const metadata: Metadata = {
  title: "Backlog de Animes | Pedro Matumoto",
  description: "Animes assistidos e no backlog.",
};

export default function BacklogAnimesPage() {
  return <BacklogCategoryView title="Animes" category={mediaBacklogData.animes} accent="text-sky-600" />;
}
