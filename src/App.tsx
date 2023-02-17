import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import DemoGrid from "./components/DemoGrid";
import Toolbar from "./components/Toolbar";
import styles from './App.module.css';

const App = () => {

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