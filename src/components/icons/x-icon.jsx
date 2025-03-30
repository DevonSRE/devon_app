import * as React from "react";
import { cn } from "@/lib/utils";


const XIcon = React.forwardRef((
  { className, ...props },
  ref
) => {
  return (
    <svg
      ref={ref}
      className={cn("size-6", className)}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.4261 4.24268H20.1862L14.1561 11.0201L21.25 20.2427H15.6956L11.3451 14.6493L6.36723 20.2427H3.60544L10.0552 12.9935L3.25 4.24268H8.94545L12.8779 9.3553L17.4261 4.24268ZM16.4573 18.6181H17.9868L8.11441 5.78196H6.4732L16.4573 18.6181Z"
        fill="currentColor"
      />
    </svg>

  );
});

XIcon.displayName = "XIcon";

export { XIcon };
