import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Navigation from "components/Navigation";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <div className="container">
        <h3 className="text-center py-2">Simple CMS</h3>
        <Navigation />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
