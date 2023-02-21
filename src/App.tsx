import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import DemoGrid from "./components/DemoGrid/DemoGrid";
import Toolbar from "./components/Toolbar/Toolbar";
import styles from './App.module.css';

const App = () => {

  useEffect(() => {

    const isDataReset = window.sessionStorage.getItem('_snippyly_demo_reset');

    if (isDataReset === null) {
      fetch(
        "https://us-central1-snippyly-sdk-prod.cloudfunctions.net/resetDemoData",
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ documentId: 'sheets-react-demo' }),
        }
      );
      window.sessionStorage.setItem('_snippyly_demo_reset', 'true');
    }
    
  }, []);

  /**
   * Snippyly Code Example
   * Initializes the Snippyly SDK.
   * In this example, we enable popover mode for comments.
   * Feature: Popover Comments -- Step #2
   */
  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    
    const commentElement = client.getCommentElement();
    commentElement.enablePopoverMode(true);

    client.setDocumentId('sheets-react-demo');

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <Toolbar />
      <DemoGrid />
    </div>
  );
};

export default App;