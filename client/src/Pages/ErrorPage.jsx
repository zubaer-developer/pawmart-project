import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, an unexpected error has occurred or the page you are looking for
        does not exist.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
