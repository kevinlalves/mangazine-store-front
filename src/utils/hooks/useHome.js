import { useContext } from "react";
import { HomeContext } from "../../providers/HomeProvider";

const useHome = () => useContext(HomeContext);

export default useHome;
