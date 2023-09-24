import {  useState } from "react";
import { scrollContext } from "./index";

export const ScrollContext = ({children})=> {
  const [isScroll,setScroll]=useState(scrollContext);
  return (<>
          {children}
        </>)

}
 
