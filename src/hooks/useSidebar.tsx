import { useContext } from "react";
import DashboardContext from "../context/DashboardContext";

const useSidebar = () => {
  const { sidebar } = useContext(DashboardContext);

  return sidebar;
};

export default useSidebar;
