import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="text-white m-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="mr-4">
              <Link to="/">Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="mr-4">
              <Link to="/Models">Models</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="mr-4">
              <Link to="/Content">Content</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <main className="pt-16"> {children}</main>
      </div>
    </>
  );
}

export default NavBar;
