import styles from './Toolbar.module.css';

import { SnippylyPresence, SnippylyTagTool } from '@snippyly/react';

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
         */}
        <SnippylyTagTool />
        <SnippylyPresence />
      </div>
    </div>
  );
};

export default Toolbar;