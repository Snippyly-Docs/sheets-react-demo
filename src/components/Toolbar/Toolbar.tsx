import styles from './Toolbar.module.css';

import { VeltPresence, VeltTagTool, VeltRecorderTool, VeltHuddleTool, VeltSidebarButton } from '@veltdev/react';

const Toolbar = () => {

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <div className={styles['icon']}></div>
        <h2>Quarterly Financial Results</h2>
      </div>
      <div className={styles['presence-container']}>
        {/**
         * Velt Code Example
         * Adding the tag tool and presence component.
         * Feature: Tags -- Step #2
         * Feature: Presence
         */}
        <VeltSidebarButton />
        <VeltHuddleTool type="all" />
        <VeltRecorderTool type="all" />
        <VeltTagTool />
        <VeltPresence />
      </div>
    </div>
  );
};

export default Toolbar;