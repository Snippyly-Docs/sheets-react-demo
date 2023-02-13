import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import DemoGrid from "./components/DemoGrid";
import styles from './App.module.css';
import './App.css';

const App = () => {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);

  }, [client]);

  return (
    <div className="app-container">
      <DemoGrid />
    </div>
  );
};

export default App;