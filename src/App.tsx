import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import DemoGrid from "./components/DemoGrid";
import styles from './App.module.css';

const App = () => {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);

  }, [client]);

  return (
    <DemoGrid />
    // <div className={styles['app-container']}>
    // </div>
  );
};

export default App;