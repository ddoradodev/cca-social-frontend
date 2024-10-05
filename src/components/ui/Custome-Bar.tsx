import React from 'react';
import { 
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger 
} from "@/components/ui/menubar"; // Ensure this is the correct path to your UI components
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";

export const CustomeBar: React.FC = () => {
  return (
    <Menubar className="w-full bg-gray-800 text-white">
      <MenubarMenu>
        <MenubarTrigger className="text-white"> {/* Keep icon color fixed */}
          <CiMenuBurger size={24} />
        </MenubarTrigger>
        <MenubarContent className="bg-gray-800 text-white">
          <MenubarItem>
            <Link to="/" className="hover:text-blue-400 transition duration-200">
              Home
            </Link>
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Link to="/about" className="hover:text-blue-400 transition duration-200">
              About
            </Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link to="/contact" className="hover:text-blue-400 transition duration-200">
              Contact
            </Link>
          </MenubarItem>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
