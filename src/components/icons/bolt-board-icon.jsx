import * as React from "react";
import { cn } from "@/lib/utils";


const BoltBoardIcon = React.forwardRef((
  { className, ...props },
  ref
) => {
  return (
    <svg
      ref={ref}
      className={cn("size-6", className)}
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33341 14.6666C4.60008 14.6666 3.9723 14.4055 3.45008 13.8833C2.92786 13.3611 2.66675 12.7333 2.66675 12V7.99998C2.66675 7.26665 2.92786 6.63887 3.45008 6.11665C3.9723 5.59442 4.60008 5.33331 5.33341 5.33331H17.3334V14.6666H5.33341ZM5.33341 12H14.6667V7.99998H5.33341V12ZM5.33341 26.6666C4.60008 26.6666 3.9723 26.4055 3.45008 25.8833C2.92786 25.3611 2.66675 24.7333 2.66675 24V20C2.66675 19.2666 2.92786 18.6389 3.45008 18.1166C3.9723 17.5944 4.60008 17.3333 5.33341 17.3333H20.0001V26.6666H5.33341ZM5.33341 24H17.3334V20H5.33341V24ZM22.6667 26.6666V14.6666H20.0001V5.33331H29.3334L26.6667 12H29.3334L22.6667 26.6666ZM6.33341 23H8.33341V21H6.33341V23ZM6.33341 11H8.33341V8.99998H6.33341V11Z"
        fill="#37B34A"
      />
    </svg>
  );
});

BoltBoardIcon.displayName = "BoltBoardIcon";

export { BoltBoardIcon };
