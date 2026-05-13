import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function OldCategoryPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/apt/category/${slug}`);
}
