import type { Metadata } from "next";
import { mediaBacklogData } from "@/data/hobbies";
import BacklogCategoryView from "../BacklogCategoryView";

export const metadata: Metadata = {
  title: "Backlog de Filmes | Pedro Matumoto",
  description: "Filmes assistidos e no backlog.",
};

export default function BacklogFilmesPage() {
  return <BacklogCategoryView title="Filmes" category={mediaBacklogData.filmes} accent="text-amber-600" />;
}
