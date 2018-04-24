export default ({ className, ...rest }) => (
  <button
    className={[
      "block w-full px-4 py-2 rounded bg-black text-white uppercase text-xs leading-normal font-bold tracking-wide",
      className,
      rest.disabled && "opacity-25"
    ].join(" ")}
    {...rest}
  />
);
