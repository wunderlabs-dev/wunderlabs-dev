/*
 * ABOUTME: Window toolbar component
 * ABOUTME: Contains window controls (expand, minimize, close)
 */
import type { HTMLAttributes } from "react";
import type { DraggableAttributes } from "@dnd-kit/core";

import { Button } from "@/components/Button";
import { SvgIconX, SvgIconExpand, SvgIconMinimize } from "@/components/SvgIcon";

type HomeWindowToolbarProps = HTMLAttributes<HTMLDivElement> & {
  listeners?: Record<string, unknown>;
  attributes?: DraggableAttributes;
};

const HomeWindowToolbar = ({ listeners, attributes }: HomeWindowToolbarProps) => {
  return (
    <div
      {...listeners}
      {...attributes}
      className="flex items-center justify-end gap-1 px-1 py-1 bg-beige-200 outline outline-blue-400"
    >
      <Button variant="transparent">
        <SvgIconExpand size="small" />
      </Button>
      <Button variant="transparent">
        <SvgIconMinimize size="small" />
      </Button>
      <Button variant="transparent">
        <SvgIconX size="small" />
      </Button>
    </div>
  );
};

export default HomeWindowToolbar;
