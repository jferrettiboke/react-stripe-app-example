export default ({ className, ...rest }) => (
  <label
    className={[
      "block uppercase text-xs text-grey-darker font-bold tracking-wide",
      className
    ].join(" ")}
    {...rest}
  />
);
