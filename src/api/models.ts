export interface FeedItem
{
    image: string;
    tags: string[];
    title: string;
    description: string;
    link: string;
}

export interface User
{
    id: number;
    username: string;
    name: string;
    avatar: string;
}
export interface GithubAuth
{
    state: string;
    code: string;
}