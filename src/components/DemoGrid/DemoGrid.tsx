import { useEffect, useState } from "react";
import { SnippylyCommentTool } from '@snippyly/react';
// @ts-ignore
import { Grid, Input } from 'react-spreadsheet-grid';
import { DemoRows } from "../../util/data";

import './DemoGrid.css';

const DemoGrid = () => {

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
            <div className="cell-container">
              <div className="comment-tool-container">
                {/**
                 * Snippyly Code Example
                 * The comment tool can have a targetCommentElementId to attach it to that element.
                 */}
                <SnippylyCommentTool targetCommentElementId={`quarter-cell-${row.id}`} />
              </div>
              <div id={`quarter-cell-${row.id}`} className="cell">
                <Input
                  value={row.quarter}
                  onChange={onFieldChange(row.id, 'quarter')}
                />
              </div>
            </div>
          )
        }
      },
      {
        title: () => "Revenue",
        value: (row: any, { focus }: any) => {
          return (
            <div id={`revenue-cell-${row.id}`} className="cell-container">
              <div className="comment-tool-container">
                <SnippylyCommentTool targetCommentElementId={`revenue-cell-${row.id}`} />
              </div>
              <div className="cell">
                <Input
                  value={row.revenue}
                  onChange={onFieldChange(row.id, 'revenue')}
                />
              </div>
            </div>
          )
        }
      },
      {
        title: () => "Operating Cost",
        value: (row: any, { focus }: any) => {
          return (
            <div id={`operatingCost-cell-${row.id}`} className="cell-container">
              <div className="comment-tool-container">
                <SnippylyCommentTool targetCommentElementId={`operatingCost-cell-${row.id}`} />
              </div>
              <div className="cell">
                <Input
                  value={row.operatingCost}
                  onChange={onFieldChange(row.id, 'operatingCost')}
                />
              </div>
            </div>
          )
        }
      },
      {
        title: () => "Net Income",
        value: (row: any, { focus }: any) => {
          return (
            <div id={`netIncome-cell-${row.id}`} className="cell-container">
              <div className="comment-tool-container">
                <SnippylyCommentTool targetCommentElementId={`netIncome-cell-${row.id}`} />
              </div>
              <div className="cell">
                <Input
                  value={row.netIncome}
                  onChange={onFieldChange(row.id, 'netIncome')}
                />
              </div>
            </div>
          )
        }
      },
      {
        title: () => "Balance Sheet",
        value: (row: any, { focus }: any) => {
          return (
            <div id={`balanceSheet-cell-${row.id}`} className="cell-container">
              <div className="comment-tool-container">
                <SnippylyCommentTool targetCommentElementId={`balanceSheet-cell-${row.id}`} />
              </div>
              <div className="cell">
                <Input
                  value={row.balanceSheet}
                  onChange={onFieldChange(row.id, 'balanceSheet')}
                />
              </div>
            </div>
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