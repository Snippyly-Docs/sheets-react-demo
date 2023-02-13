
// @ts-ignore
import { Input } from 'react-spreadsheet-grid';

export const DemoColumns: Array<any> = [
  {
    title: () => "Quarter",
    value: (row: any, { focus }: any) => {
      return (
        <Input
          value={row.quarter}
          focus={focus}
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
        />
      )
    }
  },
];

export const DemoRows: Array<any> = [
  {
    id: 0,
    quarter: 'Q1-2020',
    revenue: '$200000',
    operatingCost: '$150000',
    netIncome: '$50000',
    balanceSheet: '$1000000'
  },
  {
    id: 1,
    quarter: 'Q2-2020',
    revenue: '$225000',
    operatingCost: '$160000',
    netIncome: '$65000',
    balanceSheet: '$1065000'
  },
  {
    id: 2,
    quarter: 'Q3-2020',
    revenue: '$240000',
    operatingCost: '$175000',
    netIncome: '$65000',
    balanceSheet: '$1130000'
  },
  {
    id: 3,
    quarter: 'Q4-2020',
    revenue: '$250000',
    operatingCost: '$185000',
    netIncome: '$65000',
    balanceSheet: '$1195000'
  }
];