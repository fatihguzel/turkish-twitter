export interface IUserBlogs {
  _id: string;
  title: string;
  text: string;
  user: string;
  username: string;
  comments: any[];
  likes: any[];
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  image?: string;
}
