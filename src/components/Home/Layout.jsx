/* eslint-disable react/prop-types */
const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block p-32 z-0 bg-light ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
