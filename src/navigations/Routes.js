import { FaUser, FaHome, FaShoppingCart, FaUtensils, FaQuestionCircle, FaSignOutAlt, FaFileContract } from "react-icons/fa";
// import formStore from "../stores/signUp";
export const menuItem = [
  {
    // name: "QFC",
    menu: [
      {
        path: ".",
        name: "Dashboard",
        icon: <FaHome />,
      },
      {
        path: "profile",
        name: "Profile",
        icon: <FaUser />,
      },
      {
        path: "orders",
        name: "Orders",
        icon: <FaShoppingCart />,
      },
      {
        path: "menu",
        name: "Menu",
        icon: <FaUtensils />,
      },
      {
        path: "terms&conditions",
        name: "Terms & Conditions",
        icon: <FaFileContract />,
      },

      {
        path: "helpcenter",
        name: "HelpCenter",
        icon: <FaQuestionCircle />,
      },
      {
        path: "logout",
        name: "Logout",
        icon: <FaSignOutAlt />,
      },
    ]
  }
]