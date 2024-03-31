/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";

interface ICheckAuth {
  rootType: string;
}

const useCheckAuth = ({ rootType }: ICheckAuth) => {
  const isLogined = useSelector(
    (state: RootState) => state?.auth?.user?.isLogined
  );
  const router = useRouter();

  useEffect(() => {
    if (rootType === "public" && isLogined) {
      router.push("/");
    } else if (rootType === "private" && !isLogined) {
      router.push("/account/login");
    }
  }, [isLogined]);
};

export default useCheckAuth;
