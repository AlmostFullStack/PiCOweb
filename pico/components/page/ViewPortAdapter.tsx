import { ReactNode } from "react";

const ViewPortAdapter = ({children,className}:{children:ReactNode,className:string}):ReactNode =>{
    return <div className={`h-[calc(var(--vh,1vh)*100)] ${className}}`}>{children}</div>
}

export default ViewPortAdapter;