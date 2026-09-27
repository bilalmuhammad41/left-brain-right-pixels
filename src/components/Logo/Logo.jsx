import { LOGO_MARK_PATH, LOGO_VIEWBOX } from "./logoMark";
import "./Logo.css";

export default function Logo({ className = "", title }) {
  const labelled = Boolean(title);

  return (
    <svg
      className={`logo ${className}`.trim()}
      viewBox={LOGO_VIEWBOX}
      fill="currentColor"
      role={labelled ? "img" : undefined}
      aria-label={labelled ? title : undefined}
      aria-hidden={labelled ? undefined : true}
    >
      <path className="logo-mark" fillRule="evenodd" d={LOGO_MARK_PATH} />
    </svg>
  );
}
