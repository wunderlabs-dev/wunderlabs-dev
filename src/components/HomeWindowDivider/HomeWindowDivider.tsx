/*
 * ABOUTME: Desktop window divider component
 * ABOUTME: Visual divider with icon for desktop window sections
 */

import { SvgIconStar } from "@/components/SvgIcon";

const HomeWindowDivider = () => {
  return (
    <div className="flex items-center justify-center gap-3 w-full">
      <div className="flex-1 border-t border-blue-400" />
      <SvgIconStar size="small" />
      <div className="flex-1 border-t border-blue-400" />
    </div>
  );
};

export default HomeWindowDivider;
