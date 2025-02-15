export const setToken = (token) => {
    document.cookie = `token=${token}; path=/;`;
  };
  
  export const getToken = () => {
    const match = document.cookie.match(/token=([^;]+)/);
    return match ? match[1] : null;
  };
  
  export const isAuthenticated = () => {
    return !!getToken();
  };
  