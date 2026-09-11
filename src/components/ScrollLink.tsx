import { Link, type LinkProps, useLocation } from "react-router-dom";
import type { MouseEvent } from "react";

interface ScrollLinkProps extends LinkProps {
  children: React.ReactNode;
}

/**
 * A Link wrapper that scrolls to top when navigating to the same page.
 * Handles the case where clicking a nav link while already on that page
 * should reset the scroll position to the top.
 */
export function ScrollLink({ to, onClick, children, ...props }: ScrollLinkProps) {
  const { pathname } = useLocation();
  const targetPath = typeof to === "string" ? to : to.pathname ?? "";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    const isSamePage =
      pathname === targetPath ||
      pathname === targetPath + "/" ||
      pathname + "/" === targetPath;

    if (isSamePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
