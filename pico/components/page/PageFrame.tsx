import { ReactNode } from "react";

const PageFrame = ({children,className}:{children:ReactNode,className:string}):ReactNode =>{
    return <div className={`lg:h-screen h-[100svh] overscroll-y-contain ${className}}`}>{children}</div>
}

export default PageFrame;