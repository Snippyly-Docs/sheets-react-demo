import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider, SnippylyCursor, SnippylyComments, SnippylyTags } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <>
    {/**
     * Snippyly Code Example
     * Adding the Snippyly root components.
     * Feature: Popover Comments -- Step #1
     * Feature: Live Cursors
     * Feature: Tags -- Step #1
     */}
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <SnippylyComments />
      <SnippylyCursor />
      <SnippylyTags />
      <App />
    </SnippylyProvider>
  </>
);