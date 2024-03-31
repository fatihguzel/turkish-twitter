import axiosBase from "@/config/axiosBase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authTypes, blogTypes } from "@/types/apiTypes";
import { LoginDto } from "@/dtos/auth/login/login";
import { RegisterDto } from "@/dtos/auth/register/register";
import { VerifyAccountDto } from "@/dtos/auth/verify/verify";
import { ChangePasswordDto } from "@/dtos/auth/change-password/changePassword";

const registerAction = createAsyncThunk(
  "registerAction/auth",
  async (data: RegisterDto) => {
    const res = await axiosBase.post(`${authTypes.REGISTER}`, {
      ...data,
    });
    return res?.data;
  }
);

const loginAction = createAsyncThunk(
  "loginAction/auth",
  async (data: LoginDto) => {
    const res = await axiosBase.post(`${authTypes.LOGIN}`, {
      ...data,
    });

    return res?.data;
  }
);

const logoutAction = createAsyncThunk("logoutAction/auth", async () => {
  const res = await axiosBase.get(`${authTypes.LOGOUT}`);

  return res?.data;
});

const getProfileAction = createAsyncThunk("getProfileAction/auth", async () => {
  const res = await axiosBase.get(`${authTypes.GET_PROFILE}`);

  return res?.data;
});

const verifyAccountAction = createAsyncThunk(
  "verifyAccountAction/auth",
  async (data: VerifyAccountDto) => {
    const res = await axiosBase.post(`${authTypes.VERIFY_ACCOUNT}`, {
      ...data,
    });
    return res?.data;
  }
);

const changePasswordAction = createAsyncThunk(
  "changePassword/auth",
  async (data: ChangePasswordDto) => {
    const res = await axiosBase.put(`${authTypes.CHANGE_PASSWORD}`, {
      ...data,
    });

    return res?.data;
  }
);

const getUserBlogsAction = createAsyncThunk(
  "getUserBlogs/auth",
  async (data: String) => {
    const res = await axiosBase.post(`${blogTypes.GET_USER_BLOGS}`, {
      email: data,
    });

    return res?.data;
  }
);

export {
  registerAction,
  loginAction,
  getProfileAction,
  logoutAction,
  verifyAccountAction,
  changePasswordAction,
  getUserBlogsAction,
};
