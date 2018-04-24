export default ({ ...props }) => (
  <div className="relative">
    <select
      className="block w-full p-2 rounded border bg-white appearance-none"
      {...props}
    />
    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
);
