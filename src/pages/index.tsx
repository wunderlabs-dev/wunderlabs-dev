import { useState } from "react";
import Head from "next/head";
import type { GetStaticProps } from "next";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";

import copy from "@/copy/en-EN.json";

import { INITIAL_WINDOW_POSITION_X, INITIAL_WINDOW_POSITION_Y } from "@/utils/const";

import { HomeFolder } from "@/components/HomeFolder";
import { HomeWindow } from "@/components/HomeWindow";
import { HomeToolbar } from "@/components/HomeToolbar";

const Home = () => {
  const [windowPosition, setWindowPosition] = useState<{ x: number; y: number }>({
    x: INITIAL_WINDOW_POSITION_X,
    y: INITIAL_WINDOW_POSITION_Y,
  });

  const handleDragEnd = (event: DragEndEvent) => {
    setWindowPosition((prev) => ({
      x: prev.x + event.delta.x,
      y: prev.y + event.delta.y,
    }));
  };

  return (
    <>
      <Head>
        <title>{copy.metadata.title}</title>
      </Head>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col min-h-screen">
          <main className="flex flex-1 items-end justify-start gap-4 px-12 py-12">
            <HomeFolder />
            <HomeWindow position={windowPosition} />
          </main>
          <HomeToolbar />
        </div>
      </DndContext>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      messages: copy,
    },
  };
};

export default Home;
