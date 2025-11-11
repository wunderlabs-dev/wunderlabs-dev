/*
 * ABOUTME: Desktop selection component
 * ABOUTME: Creates selection rectangles on drag like Windows desktop
 */
"use client";

import { useState } from "react";
import { useEventListener } from "usehooks-ts";

import { cssToUnit } from "@/utils/helpers";

type Position = {
  x: number;
  y: number;
};

type SelectionBox = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const HomeSelection = () => {
  const [startPosition, setStartPosition] = useState<Position | null>(null);
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);

  const calculateSelectionBox = (): SelectionBox | null => {
    if (startPosition === null || currentPosition === null) {
      return null;
    }

    const left = Math.min(startPosition.x, currentPosition.x);
    const top = Math.min(startPosition.y, currentPosition.y);
    const width = Math.abs(currentPosition.x - startPosition.x);
    const height = Math.abs(currentPosition.y - startPosition.y);

    return { left, top, width, height };
  };

  const handleMouseDown = (event: MouseEvent) => {
    if (event.button !== 0) return;

    setStartPosition({
      x: event.clientX,
      y: event.clientY,
    });
    setCurrentPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (startPosition === null) return;

    setCurrentPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseUp = () => {
    setStartPosition(null);
    setCurrentPosition(null);
  };

  useEventListener("mousedown", handleMouseDown);
  useEventListener("mousemove", handleMouseMove);
  useEventListener("mouseup", handleMouseUp);

  const selectionBox = calculateSelectionBox();

  return selectionBox !== null ? (
    <div
      className="pointer-events-none fixed z-0 border border-blue-400 bg-blue-400/20"
      style={{
        left: cssToUnit(selectionBox.left),
        top: cssToUnit(selectionBox.top),
        width: cssToUnit(selectionBox.width),
        height: cssToUnit(selectionBox.height),
      }}
    />
  ) : null;
};

export default HomeSelection;
