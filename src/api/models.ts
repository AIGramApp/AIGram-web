export interface FeedItem
{
    id: number;
    image: string;
    tags: string[];
    title: string;
    description: string;
    link: string;
    user: User;
    date: string;
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