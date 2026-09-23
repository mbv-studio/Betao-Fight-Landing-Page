import { useEffect, useState } from "react";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const getCurrentPage = (): "home" | "products" =>
  window.location.hash.startsWith("#/produtos") ? "products" : "home";

function App() {
  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getCurrentPage();

      setPage((currentPage) => {
        if (currentPage !== nextPage) {
          window.scrollTo({ top: 0, behavior: "auto" });
        }

        return nextPage;
      });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <SiteHeader activePage={page} />
      {page === "products" ? <ProductsPage /> : <HomePage />}
      <SiteFooter />
    </>
  );
}

export default App;
