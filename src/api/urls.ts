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
        logout: "logout"
    },
    posts: {
        base: "posts",
        upload: "upload"
    }
};
export default urls;