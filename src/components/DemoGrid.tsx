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

  const getDocumentHeight = () => {
    const body = document.body,
      html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
  };

  // react-spreadsheet-grid requires a pixel header height
  const getHeaderHeight = () => {
    return getDocumentHeight() * 0.085;
  };

  const [headerHeight, setHeaderHeight] = useState(getHeaderHeight());

  window.onresize = () => {
    setHeaderHeight(getHeaderHeight());
  };

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
      headerHeight={headerHeight}
      rowHeight={headerHeight}
    >
    </Grid>
  );
};

export default DemoGrid;