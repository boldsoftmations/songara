import CustomAxios from "./api";

const SetupInterceptor = () => {
  CustomAxios.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('accessToken'); // Get the access token from localStorage
      if (accessToken) {
        config.headers = {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        };
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  CustomAxios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      console.log("err response :>> ", err);
      const originalConfig = err.config;

      if (err.response) {
        // Token is not valid
        if (err.response.data.code === "token_not_valid") {
          localStorage.removeItem('accessToken'); // Remove access token from localStorage
          localStorage.removeItem('refreshToken'); // Remove refresh token from localStorage
          window.location.reload(); // Refresh page to redirect user to login screen
        }

        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await CustomAxios.post("/api/token/refresh/", {
              refresh: localStorage.getItem('refreshToken'), // Get the refresh token from localStorage
            });

            const newAccessToken = rs.data.access;
            if (rs.status === 200) {
              localStorage.setItem('accessToken', newAccessToken); // Update access token in localStorage
              originalConfig.headers.Authorization = `Bearer ${newAccessToken}`;
              return CustomAxios(originalConfig);
            }
          } catch (_error) {
            return Promise.reject(_error);
          }
        }

        if (err.response.status === 403 && err.response.data) {
          return Promise.reject(err.response.data);
        }
      }

      return Promise.reject(err);
    }
  );
};

export default SetupInterceptor;
