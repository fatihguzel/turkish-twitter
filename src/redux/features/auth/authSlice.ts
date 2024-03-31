import { createSlice } from "@reduxjs/toolkit";
import { authSliceDTO } from "@/dtos/slice/slice";
import {
  changePasswordAction,
  getProfileAction,
  getUserBlogsAction,
  loginAction,
  logoutAction,
  registerAction,
  verifyAccountAction,
} from "./asyncActions";
import Cookies from "js-cookie";
import toastHelper from "@/helper/toast/toastHelper";

const initialState: authSliceDTO = {
  user: {
    id: 0,
    username: "",
    email: "",
    isLogined: false,
    isBlocked: false,
    role: "",
    isConfirmed: false,
    confirmCode: "",
    biography: "",
  },
  user_blogs: [
    {
      _id: "",
      title: "",
      text: "",
      user: "",
      username: "",
      comments: [],
      likes: [],
      isBlocked: false,
      createdAt: "",
      updatedAt: "",
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.user = payload?.data;
      Cookies.set("AUTH_DATA", JSON.stringify(payload?.data));
      toastHelper().toastSuccessNotify("Giriş Başarılı");
    });

    builder.addCase(loginAction.rejected, (state) => {
      state.user = initialState.user;
      Cookies.remove("AUTH_DATA");
      toastHelper().toastErrorNotify("Giriş Başarısız");
    });

    builder.addCase(getProfileAction.fulfilled, (state, { payload }) => {
      state.user = payload?.data;
      Cookies.set("AUTH_DATA", JSON.stringify(payload?.data));
    });

    builder.addCase(getProfileAction.rejected, (state) => {
      state.user = initialState.user;
      Cookies.remove("AUTH_DATA");
    });

    builder.addCase(logoutAction.fulfilled, (state) => {
      state.user = initialState.user;
      Cookies.remove("AUTH_DATA");
      toastHelper().toastSuccessNotify("Çıkış Başarılı");
    });

    builder.addCase(logoutAction.rejected, (state) => {
      state.user = initialState.user;

      Cookies.remove("AUTH_DATA");
      toastHelper().toastErrorNotify("Çıkış Başarısız");
    });

    builder.addCase(registerAction.fulfilled, (_state) => {
      toastHelper().toastSuccessNotify(
        "Kayıt Başarılı. Lütfen Mailinizi Kontrol Ediniz."
      );
    });

    builder.addCase(registerAction.rejected, (_state) => {
      toastHelper().toastErrorNotify("Kayıt Başarısız");
    });

    builder.addCase(verifyAccountAction.fulfilled, (_state) => {
      toastHelper().toastSuccessNotify("Hesap Doğrulama Başarılı");
    });

    builder.addCase(verifyAccountAction.rejected, (_state) => {
      toastHelper().toastErrorNotify("Hesap Doğrulama Başarısız");
    });

    builder.addCase(changePasswordAction.fulfilled, (_state, { payload }) => {
      _state.user = payload?.data;
      Cookies.set("AUTH_DATA", JSON.stringify(payload?.data));
      toastHelper().toastSuccessNotify("Şifre Değiştirme Başarılı");
    });

    builder.addCase(changePasswordAction.rejected, (_state) => {});

    builder.addCase(getUserBlogsAction.fulfilled, (state, { payload }) => {
      state.user_blogs = payload?.data;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
