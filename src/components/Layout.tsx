
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // adjust path if needed

function getBackground(pathname: string) {
  if (pathname.startsWith("/destination"))
    return "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop";
  if (pathname.startsWith("/crew"))
    return "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop";
  if (pathname.startsWith("/technology"))
    return "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop";
  return "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop"; // default = home
}

export default function Layout() {
  const location = useLocation();
  const backgroundClass = getBackground(location.pathname);

  return (
    <div className={`${backgroundClass} min-h-screen bg-no-repeat bg-cover`}>
      {/* Navbar always visible on all pages */}
      <Navbar />

      {/* Page content renders here */}
      <main className="pt-20"> 
        <Outlet />
      </main>
    </div>
  );
}
