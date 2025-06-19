"use client";
import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { MdInfo } from "react-icons/md";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

interface BannerProps {
  message: string;
}

export const Banner: React.FC<BannerProps> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-yellow-200 text-yellow-900 px-4 py-3 flex items-center justify-between fixed top-0 left-0 z-50 shadow-md animate-fade-in">
      <div className="flex items-center gap-2">
        <span aria-hidden="true" className="inline-block">
          <MdInfo size={24} className="text-yellow-700" />
        </span>
        <span className="font-semibold">{message}</span>
      </div>
      <button
        className="ml-4 text-yellow-900 hover:text-yellow-700 font-bold text-xl focus:outline-none"
        aria-label="Dismiss banner"
        onClick={() => setVisible(false)}
      >
        &times;
      </button>
    </div>
  );
};

export { Alert, AlertTitle, AlertDescription };
