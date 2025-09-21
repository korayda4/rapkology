import mockData from "@/const/mockData.json";
import { blogDetailPageType } from "@/types/blogDetailPageType";

export async function generateBlogMetadata({ params }: blogDetailPageType) {
  const blog = mockData.find(
    (item) => item.type === "posts" && item.attributes.slug === params.slug
  );

  if (!blog) return { title: "Blog Bulunamadı" };

  const seo = blog.attributes.seo;

  return {
    title: seo?.metaTitle || blog.attributes.title,
    description: seo?.metaDescription || blog.attributes.content.slice(0, 150),
  };
}
