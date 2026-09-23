import ProductIcon from "../components/ProductIcon";
import { PRODUCTS, productWhatsAppLink, WHATSAPP_LINK } from "../data";

function ProductsPage() {
  return (
    <main className="products-page" id="produtos">
      <section className="products-hero">
        <div className="container products-hero__inner">
          <div>
            <span className="eyebrow">Betão Fight Store</span>
            <h1>Produtos para quem vive o treino</h1>
            <p>
              Vestuário, equipamentos e acessórios para Boxe, Kickboxing e rotina de treino.
            </p>
          </div>

          <a className="button button--ghost" href="#inicio">
            Voltar para a academia
          </a>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Categorias</span>
              <h2>Encontre o que precisa</h2>
            </div>
            <p>Consulte tamanhos, cores e modelos disponíveis diretamente pelo WhatsApp.</p>
          </div>

          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-card__visual" aria-hidden="true">
                  <ProductIcon name={product.icon} />
                  <span>{product.category}</span>
                </div>

                <div className="product-card__content">
                  <div>
                    <span className="product-card__category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>

                  <a
                    className="text-link"
                    href={productWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar modelos →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="products-cta">
        <div className="container products-cta__inner">
          <div>
            <span className="eyebrow">Dúvidas sobre produtos?</span>
            <h2>Fale com a Betão Fight</h2>
            <p>Informe o produto que procura e consulte disponibilidade, tamanhos e valores.</p>
          </div>

          <a className="button button--primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Chamar no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;
