export interface blogDetailPageType {
    params: { slug: string };
}

export type BlogCardProps = {
    slug: string;
    avatar: string;
    profileName: string;
    title: string;
    blogImage: string;
    date: string;
};