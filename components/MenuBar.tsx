import Title from "./Title";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

const MenuBar = () => {
    return (
        <div className="w-full h-12 bg-red-600">
            <div className="container">
                <Title level={3} className="text-white text">Manauaradiesel</Title>
            </div>
        </div>
    );
}
 
export default MenuBar;