// import * as React from "react"
// import * as AvatarPrimitive from "@radix-ui/react-avatar"

// import { cn } from "@/lib/utils"

// const Avatar = React.forwardRef(({ className, ...props }, ref) => (
//   <AvatarPrimitive.Root
//     ref={ref}
//     className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
//     {...props} />
// ))
// Avatar.displayName = AvatarPrimitive.Root.displayName

// const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
//   <AvatarPrimitive.Image
//     ref={ref}
//     className={cn("aspect-square h-full w-full", className)}
//     {...props} />
// ))
// AvatarImage.displayName = AvatarPrimitive.Image.displayName

// const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
//   <AvatarPrimitive.Fallback
//     ref={ref}
//     className={cn(
//       "flex h-full w-full items-center justify-center rounded-full bg-muted",
//       className
//     )}
//     {...props} />
// ))
// AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

// export { Avatar, AvatarImage, AvatarFallback }

import React from "react";

const Avatar = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`h-10 w-10 rounded-full overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});
Avatar.displayName = "Avatar";

const AvatarImage = ({ src, alt }) => (
  <img src={src || "/placeholder.png"} alt={alt} className="h-full w-full object-cover" />
);

export { Avatar, AvatarImage };
