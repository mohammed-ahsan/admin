import axios from "axios";
// import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import Cookies from "js-cookie";
import { notifyError } from "@/utils/toast";
import { AdminContext } from "@/context/AdminContext";

const useAsync = (asyncFunction) => {
  const { dispatch } = useContext(AdminContext);

  const [data, setData] = useState([] || {});
  const [error, setError] = useState("");
  // const [errCode, setErrCode] = useState('');
  const [loading, setLoading] = useState(true);
  const {
    invoice,
    status,
    zone,
    time,
    source,
    limitData,
    startDate,
    endDate,
    method,
    isUpdate,
    setIsUpdate,
    currentPage,
    category,
    searchText,
    sortedField,
  } = useContext(SidebarContext);

  const handleErrorNotificationTwo = (err) => {
    console.log("handleErrorNotificationTwo", err);
    if (
      err?.response?.data?.message === "jwt expired" ||
      err?.response?.data?.message === "jwt malformed" ||
      err?.response?.data?.message === "invalid signature" ||
      err?.response?.data?.message === "Unauthorized Access!"
    ) {
      dispatch({ type: "USER_LOGOUT" });
      Cookies.remove("_adminInfo");
      Cookies.remove("_cname");

      notifyError("Your Session is expired! Please Click on Login again");
      const timeoutId = setTimeout(() => {
        // history?.replace(`/login`);
        window.location.replace(
          `https://${import.meta.env.VITE_APP_ADMIN_DOMAIN}/login`
        );
      }, 2500);
      return () => clearTimeout(timeoutId);
    }
  };

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    (async () => {
      try {
        const res = await asyncFunction({ cancelToken: source.token });
        if (!unmounted) {
          setData(res);
          setError("");
          setLoading(false);
        }
      } catch (err) {
        if (!unmounted) {
          setError(err.message);
          handleErrorNotificationTwo(err);
          if (axios.isCancel(err)) {
            setError(err.message);
            setLoading(false);
            setData([]);
          } else {
            setError(err.message);
            setLoading(false);
            setData([]);
          }
        }
      }
    })();

    setIsUpdate(false);

    return () => {
      unmounted = true;
      source.cancel("Cancelled in cleanup");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    invoice,
    status,
    zone,
    time,
    method,
    source,
    limitData,
    startDate,
    endDate,
    isUpdate,
    currentPage,
    category,
    searchText,
    sortedField,
  ]);

  return {
    data,
    error,
    loading,
  };
};

export default useAsync;
