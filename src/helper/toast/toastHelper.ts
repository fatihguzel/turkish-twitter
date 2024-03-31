import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IToastHelper {
  toastInfoNotify: (msg: string) => void;
  toastWarnNotify: (msg: string) => void;
  toastSuccessNotify: (msg: string) => void;
  toastErrorNotify: (msg: string) => void;
}

const toastHelper = (): IToastHelper => {
  const toastInfoNotify = (msg: string) => {
    toast.info(msg);
  };

  const toastWarnNotify = (msg: string) => {
    toast.warn(msg);
  };

  const toastSuccessNotify = (msg: string) => {
    toast.success(msg);
  };

  const toastErrorNotify = (msg: string) => {
    toast.error(msg);
  };

  return {
    toastInfoNotify,
    toastWarnNotify,
    toastSuccessNotify,
    toastErrorNotify,
  };
};

export default toastHelper;
