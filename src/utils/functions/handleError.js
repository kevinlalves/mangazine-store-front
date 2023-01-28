const handleError = ({ error, navigate, setUser }) => {
  if (error.response?.status === 401) {
    setUser({});

    navigate("/");
  }

  window.alert(error.response?.data);
};

export default handleError;
