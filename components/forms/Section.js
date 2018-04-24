export default ({ children, title }) => (
  <fieldset className="my-8">
    <legend className="font-bold tracking-wide uppercase">{title}</legend>
    {children}
  </fieldset>
);
