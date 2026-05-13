import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function OldArticlePage({ params }: Props) {
  const { slug } = await params;
  redirect(`/apt/article/${slug}`);
}
