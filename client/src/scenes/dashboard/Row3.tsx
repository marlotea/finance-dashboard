import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import DashboardBox from '../../components/DashboardBox';
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from '../../state/api';
import BoxHeader from '../../components/BoxHeader';
import { Box, Typography, useTheme } from '@mui/material';
import { Cell, Pie, PieChart } from 'recharts';
import FlexBetween from '../../components/FlexBetween';
import { useMemo } from 'react';

const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  console.log('🚀 ~ Row3 ~ transactionsData:', transactionData);

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory)
        .filter(
          ([key, value]) => typeof value === 'number' && !key.startsWith('$')
        )
        .map(([key, value]) => {
          return [
            { name: key, value: value },
            { name: `${key} of Total`, value: totalExpenses - value },
          ];
        });
    }
  }, [kpiData]);

  const productColumns = [
    {
      field: '_id',
      headerName: 'id',
      flex: 1,
    },
    {
      field: 'expense',
      headerName: 'Expense',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  const transactionColumns = [
    {
      field: '_id',
      headerName: 'id',
      flex: 1,
    },
    {
      field: 'buyer',
      headerName: 'Buyer',
      flex: 0.67,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: 'productIds',
      headerName: 'Count',
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];

  return (
    <>
      <DashboardBox gridArea="g" style={{ maxHeight: '300px' }}>
        <BoxHeader
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
        <Box
          mt="0.7rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            '& .MuiDataGrid-root': { color: palette.grey[300], border: 'none' },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: palette.primary.main,
              color: palette.grey[100],
              borderBottom: `1px solid ${palette.grey[600]} !important`,
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden',
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>

      <DashboardBox gridArea="h" style={{ maxHeight: '400px' }}>
        <BoxHeader
          title="Recent Orders"
          sideText={`${transactionData?.length} latest transactions`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            '& .MuiDataGrid-root': { color: palette.grey[300], border: 'none' },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: palette.primary.main,
              color: palette.grey[100],
              borderBottom: `1px solid ${palette.grey[600]} !important`,
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden',
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={transactionData || []}
            columns={transactionColumns}
          />
        </Box>
      </DashboardBox>

      <DashboardBox gridArea="i" style={{ maxHeight: '200px' }}>
        <BoxHeader title="Expense Breakdown by Category" sideText="+4%" />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={110} height={100}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashboardBox>

      <DashboardBox gridArea="j" style={{ maxHeight: '200px' }}>
        <BoxHeader
          title="Overall Summary and Explanation Data"
          sideText="+13%"
        />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
          Welcome to your personalized finance dashboard! Here, you can track
          your income, expenses, and overall financial health. Monitor your
          monthly spending trends, view detailed reports on different expense
          categories, and set financial goals to keep your budget on track.
        </Typography>
      </DashboardBox>
    </>
  );
};

export default Row3;
