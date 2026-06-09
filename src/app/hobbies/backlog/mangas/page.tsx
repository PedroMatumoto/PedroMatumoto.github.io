import type { Metadata } from "next";
import { mediaBacklogData } from "@/data/hobbies";
import BacklogCategoryView from "../BacklogCategoryView";

export const metadata: Metadata = {
  title: "Backlog de Mangás | Pedro Matumoto",
  description: "Mangás lidos e no backlog.",
};

export default function BacklogMangasPage() {
  return <BacklogCategoryView title="Mangás" category={mediaBacklogData.mangas} accent="text-rose-600" />;
}
