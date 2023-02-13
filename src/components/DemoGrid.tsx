import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import styles from './DemoGrid.module.css';
// @ts-ignore
import { Grid } from 'react-spreadsheet-grid';
import { DemoColumns, DemoRows } from "../util/data";



const DemoGrid = () => {

  const { client } = useSnippylyClient();

  return (
    <Grid
      columns={DemoColumns}
      rows={DemoRows}
      getRowKey={(row: any) => row.id}
    >
    </Grid>
  );
};

export default DemoGrid;