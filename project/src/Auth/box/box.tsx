import clsx from "clsx";

interface Props {
      children: React.ReactNode;
      className?: string;
      padding_x?: string;
      padding_y?: string;
}

export const Box = ({children , className, padding_x = "px-9", padding_y = "py-9"} : Props ) => {
      return(
            <div className={clsx(
                  "w-full border bg-white border-gray-500 rounded", 
                  padding_x, 
                  padding_y,
                  className
            )}>
                  {children}
            </div>
      )
}