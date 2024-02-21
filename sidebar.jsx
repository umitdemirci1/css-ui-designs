import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      icon: "pi pi-users",
      label: "Customers",
      subMenu: [
        {
          label: "List",
          whereToNavigate: "customers/list",
        },
        {
          label: "Details",
          whereToNavigate: "customers/details",
        },
        {
          label: "Edit",
          whereToNavigate: "customers/details",
        },
      ],
    },
    {
      icon: "pi pi-shopping-bag",
      label: "Products",
      subMenu: [
        {
          label: "List",
          whereToNavigate: "products/list",
        },
        {
          label: "Create",
          whereToNavigate: "products/create",
        },
        {
          label: "Category",
          whereToNavigate: "products/category",
        },
      ],
    },
    {
      icon: "pi pi-shopping-cart",
      label: "Orders",
      subMenu: [
        {
          label: "List",
          whereToNavigate: "orders/list",
        },
        {
          label: "Details",
          whereToNavigate: "orders/details",
        },
      ],
    },
  ];
  return (
    <div className="h-screen bg-sidebar text-white w-[280px]">
      <div className="p-6 flex items-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <i className="pi pi-prime ml-2 text-3xl"></i>
      </div>
      <nav className="">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.label} menuItem={menuItem} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem = ({ menuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <ul
        onClick={toggleSubMenu}
        className={`py-2 my-1 mx-4 text-sm text-gray-300 rounded font-semibold cursor-pointer flex justify-between hover:bg-sidebarHover transition-colors duration-300`}
      >
        <span className="flex items-center justify-between w-full">
          <div>
            {menuItem.icon && <i className={`px-4 ${menuItem.icon}`}></i>}
            {menuItem.label && <span>{menuItem.label}</span>}
          </div>
          <i
            className={`pi pi-angle-right transition-all ${
              isOpen ? "transform rotate-90 " : ""
            } px-4 text-gray-500`}
          />
        </span>
      </ul>
      {menuItem.subMenu && (
        <SubMenu subMenuItems={menuItem.subMenu} isOpen={isOpen} />
      )}
    </div>
  );
};

const SubMenu = ({ subMenuItems, isOpen }) => {
  return (
    <div className="">
      <ul
        className={`px-4 h-0 text-xs overflow-hidden ${
          isOpen ? "h-[108px]" : ""
        } transition-height`}
      >
        {subMenuItems.map((subMenuItem, index) => (
          <li key={index}>
            <NavLink
              to={subMenuItem.whereToNavigate}
              className={`block py-2 my-1 px-12 rounded hover:bg-sidebarHover `}
              activeClassName="bg-gray-200"
            >
              {subMenuItem.icon && <i className={subMenuItem.icon}></i>}
              {subMenuItem.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
