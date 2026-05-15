"use client";

import { Drawer as DrawerPrimitive } from "vaul";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";

const Drawer = ({ shouldScaleBackground = true, ...props }: ComponentProps<typeof DrawerPrimitive.Root>) => {
  return <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />;
};

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = ({ className, ...props }: ComponentProps<typeof DrawerPrimitive.Overlay>) => {
  return (
    <DrawerPrimitive.Overlay
      className={cn("fixed inset-0 z-50 bg-gray-400/40 backdrop-blur-xs", className)}
      {...props}
    />
  );
};

const DrawerContent = ({ className, children, ...props }: ComponentProps<typeof DrawerPrimitive.Content>) => {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={cn("fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-3xl bg-gray-400 outline-none", className)}
        {...props}
      >
        <DrawerPrimitive.Handle className="mx-auto mt-4 h-1.5 w-10 rounded-full bg-cream-50" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};

const DrawerTitle = DrawerPrimitive.Title;
const DrawerDescription = DrawerPrimitive.Description;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
