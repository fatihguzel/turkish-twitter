import { ApiENUM } from "./enum";

const createAuthTypes = (namespace: string) => ({
  LOGIN: `${namespace}/login`,
  REGISTER: `${namespace}/register`,
  LOGOUT: `${namespace}/logout`,
  GET_PROFILE: `${namespace}/profile`,
  VERIFY_ACCOUNT: `${namespace}/confirm`,
  CHANGE_PASSWORD: `${namespace}/resetPassword`,
});

const createBlogTypes = (namespace: string) => ({
  GET_USER_BLOGS: `${namespace}/getUserBlogs`,
});

export const authTypes = createAuthTypes(ApiENUM.AUTH);
export const blogTypes = createBlogTypes(ApiENUM.BLOG);
