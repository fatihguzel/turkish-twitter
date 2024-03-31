export interface authSliceDTO {
  user: {
    id: number;
    username: string;
    email: string;
    isLogined: boolean;
    isBlocked: boolean;
    role: string;
    isConfirmed: boolean;
    confirmCode: string;
    biography: string;
  };
  user_blogs: {
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
  }[];
}
