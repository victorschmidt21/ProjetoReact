export function Filter({ children, typeRequest }) {
  if (typeRequest == "discover") {
    return (
      <div className="flex flex-col w-max mt-16 gap-5 items-center">
        {children}
      </div>
    );
  } else {
    <></>;
  }
}
