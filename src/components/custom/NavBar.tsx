import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { contentPath } from "../../paths/content-path";
import { modelPath } from "../../paths/model-paths";

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
              <Link to={modelPath.model}>Models</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="mr-4">
              <Link to={contentPath.content}>Content</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <main className="pt-16"> {children}</main>
      </div>
    </>
  );
}

export default NavBar;
