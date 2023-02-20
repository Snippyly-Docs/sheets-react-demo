import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { 
  SnippylyProvider, 
  SnippylyCursor, 
  SnippylyComments, 
  SnippylyTags, 
  SnippylyRecorderControlPanel, 
  SnippylyRecorderNotes,
  SnippylyHuddle,
  SnippylyCommentsSidebar
} from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <React.StrictMode>
    {/**
     * Snippyly Code Example
     * Adding the Snippyly root components.
     * Feature: Popover Comments -- Step #1
     * Feature: Live Cursors
     * Feature: Tags -- Step #1
     */}
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <SnippylyRecorderControlPanel />
      <SnippylyRecorderNotes />
      <SnippylyHuddle />
      <SnippylyComments />
      <SnippylyCursor />
      <SnippylyTags />
      <SnippylyCommentsSidebar />
      <App />
    </SnippylyProvider>
  </React.StrictMode>
);