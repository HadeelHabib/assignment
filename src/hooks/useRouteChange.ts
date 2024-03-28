import { activeNavItem } from "@/configs/constants";
import { useAtom } from "jotai";
const useRouteChange = () =>{
    const [active,setActive] = useAtom(activeNavItem);
    return{active,setActive};
};
export default useRouteChange;