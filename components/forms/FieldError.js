export default ({ className, children }) => (
  <div className={["text-sm text-red", className].join(" ")}>{children}</div>
);
