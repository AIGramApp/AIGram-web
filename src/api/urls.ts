export const join = (...args: string[]): string => {
    return args.join("/");
};

export const base = process.env.VUE_APP_API + "/api";
const urls = {
    auth: {
        base: "auth"
    },
    user: {
        base: "user",
        logout: "logout",
        profile: "profile"
    },
    posts: {
        base: "posts",
        upload: "upload",
        publish: "publish"
    },
    feed: {
        base: "feed"
    }
};
export default urls;