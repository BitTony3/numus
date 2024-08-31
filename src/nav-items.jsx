import { HomeIcon, BriefcaseIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Services from "./pages/Services.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <BriefcaseIcon className="h-4 w-4" />,
    page: <Services />,
  },
];
