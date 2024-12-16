function Filter({children, typeRequest}) {
  if(typeRequest == "discover") {
  return (
    <div className="flex flex-col mt-16 gap-5 transition-all duration-300">
      {children}
    </div>
  );
}else{
  <></>
}
}

export default Filter;
