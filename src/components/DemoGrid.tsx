import { useEffect, useState } from "react";
import { useSnippylyClient } from '@snippyly/react';
import styles from './DemoGrid.module.css';
// @ts-ignore
import { Grid, Input } from 'react-spreadsheet-grid';
import { DemoRows } from "../util/data";
import './spreadsheet_override.css';

const DemoGrid = () => {

  const { client } = useSnippylyClient();
  const [rows, setRows] = useState(DemoRows);

  const onFieldChange = (rowId: number, field: string) => (value: string) => {
    const row = rows.find(({ id }) => id === rowId);
    row[field] = value;
    setRows([].concat(...rows));
  }

  const initColumns = () => {
    return [
      {
        title: () => "Quarter",
        value: (row: any, { focus }: any) => {
          return (
            <Input
              value={row.quarter}
              focus={focus}
              onChange={onFieldChange(row.id, 'quarter')}
            />
          )
        }
      },
      {
        title: () => "Revenue",
        value: (row: any, { focus }: any) => {
          return (
            <Input
              value={row.revenue}
              focus={focus}
              onChange={onFieldChange(row.id, 'revenue')}
            />
          )
        }
      },
      {
        title: () => "Operating Cost",
        value: (row: any, { focus }: any) => {
          return (
            <Input
              value={row.operatingCost}
              focus={focus}
              onChange={onFieldChange(row.id, 'operatingCost')}
            />
          )
        }
      },
      {
        title: () => "Net Income",
        value: (row: any, { focus }: any) => {
          return (
            <Input
              value={row.netIncome}
              focus={focus}
              onChange={onFieldChange(row.id, 'netIncome')}
            />
          )
        }
      },
      {
        title: () => "Balance Sheet",
        value: (row: any, { focus }: any) => {
          return (
            <Input
              value={row.balanceSheet}
              focus={focus}
              onChange={onFieldChange(row.id, 'balanceSheet')}
            />
          )
        }
      },
    ];
  };

  return (
    <Grid
      columns={initColumns()}
      rows={DemoRows}
      getRowKey={(row: any) => row.id}
    >
    </Grid>
  );
};

export default DemoGrid;