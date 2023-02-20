import styles from './Toolbar.module.css';

import { SnippylyPresence, SnippylyTagTool, SnippylyRecorderTool, SnippylyHuddleTool, SnippylySidebarButton } from '@snippyly/react';

const Toolbar = () => {

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <div className={styles['icon']}></div>
        <h2>Quarterly Financial Results</h2>
      </div>
      <div className={styles['presence-container']}>
        {/**
         * Snippyly Code Example
         * Adding the tag tool and presence component.
         * Feature: Tags -- Step #2
         * Feature: Presence
         */}
        <SnippylySidebarButton />
        <SnippylyHuddleTool type="all" />
        <SnippylyRecorderTool type="all" />
        <SnippylyTagTool />
        <SnippylyPresence />
      </div>
    </div>
  );
};

export default Toolbar;