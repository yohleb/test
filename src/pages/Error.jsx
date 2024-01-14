import {useRouteError , Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
  
    if (error.status === 404) {
      return (
        <main className="grid min-h-[100vh] place-items-center px-8">
          <div className="text-center">
            <p className="text-9xl font-semibold text-primary">404</p>
            <h1 className="color-black mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              page not found
            </h1>
            <div className="mt-10">
              <Link to="/" className="btn btn-secondary">
                Go to Home
              </Link>
            </div>
          </div>
        </main>
      );
    }
  
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <h4 className="text-center font-bold text-4xl">There was an error..</h4>
      </main>
    );
  };
  
  export default Error;