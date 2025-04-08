const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 z-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
