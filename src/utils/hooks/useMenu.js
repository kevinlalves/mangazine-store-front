import { useContext } from "react";
import { MenuContext } from "../../providers/MenuProvider";

const useMenu = () => useContext(MenuContext);

export default useMenu;
