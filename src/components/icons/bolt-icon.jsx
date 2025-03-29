import * as React from "react";
import { cn } from "@/lib/utils";


const BoltIcon = React.forwardRef((
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
        d="M14.0666 24.2667L20.9666 16H15.6333L16.5999 8.43335L10.4333 17.3334H15.0666L14.0666 24.2667ZM10.6666 29.3334L11.9999 20H5.33325L17.3333 2.66669H19.9999L18.6666 13.3334H26.6666L13.3333 29.3334H10.6666Z"
        fill="#37B34A"
      />
    </svg>
  );
});

BoltIcon.displayName = "BoltIcon";

export { BoltIcon };

