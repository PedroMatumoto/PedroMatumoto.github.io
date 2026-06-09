import type { Metadata } from "next";
import { mediaBacklogData } from "@/data/hobbies";
import BacklogCategoryView from "../BacklogCategoryView";

export const metadata: Metadata = {
  title: "Backlog de Jogos | Pedro Matumoto",
  description: "Jogos zerados e no backlog.",
};

export default function BacklogJogosPage() {
  return <BacklogCategoryView title="Jogos" category={mediaBacklogData.jogos} accent="text-emerald-600" />;
}
