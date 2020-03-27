export interface FeedItem
{
    id: number | null;
    image: string;
    tags: string[];
    title: string;
    description: string;
    link: string;
    user: User | null;
    date: string | null;
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

export enum AddPostStage
{
    Image = 1,
    Meta = 2
}
export interface UserProfile
{
    user: User;
    posts: Array<FeedItem>;
}