import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { VeltProvider, VeltCursor, VeltComments, VeltTags } from '@veltdev/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <>
    {/**
     * Velt Code Example
     * Adding the Velt root components.
     * Feature: Popover Comments -- Step #1
     * Feature: Live Cursors
     * Feature: Tags -- Step #1
     */}
    <VeltProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <VeltComments />
      <VeltCursor />
      <VeltTags />
      <App />
    </VeltProvider>
  </>
);