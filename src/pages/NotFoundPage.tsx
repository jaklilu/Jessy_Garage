import { Link, useLocation } from "react-router-dom";
import { Seo } from "../components/Seo";
import "./NotFoundPage.css";

export function NotFoundPage() {
  const { pathname } = useLocation();
  const isSpanish = pathname.startsWith("/es");
  const homePath = isSpanish ? "/es" : "/en";

  const title = isSpanish ? "Página no encontrada" : "Page not found";
  const message = isSpanish
    ? "Lo sentimos, la página que busca no existe."
    : "Sorry, the page you are looking for does not exist.";
  const backHome = isSpanish ? "Volver al inicio" : "Back to home";

  return (
    <>
      <Seo title={`404 — ${title}`} description={message} />
      <div className="not-found-page">
        <div className="container">
          <h1>404</h1>
          <p className="not-found-title">{title}</p>
          <p className="not-found-message">{message}</p>
          <Link to={homePath} className="btn btn-primary">
            {backHome}
          </Link>
        </div>
      </div>
    </>
  );
}
