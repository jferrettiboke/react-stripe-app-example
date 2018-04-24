export default ({ className, children }) => (
  <main className={["py-8 mx-auto w-full md:w-1/2 px-4", className].join(" ")}>
    {children}
  </main>
);
