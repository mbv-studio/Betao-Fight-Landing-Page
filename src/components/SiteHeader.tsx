interface SiteHeaderProps {
  activePage: "home" | "products";
}

function SiteHeader({ activePage }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-brand" href="#inicio" aria-label="Ir para o início">
          Betão <span>Fight</span>
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          <a className={activePage === "home" ? "is-active" : ""} href="#inicio">
            Início
          </a>
          <a
            className={activePage === "products" ? "is-active" : ""}
            href="#/produtos"
          >
            Produtos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
