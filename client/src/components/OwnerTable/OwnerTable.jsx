import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

const columns = [
  { id: "productname", label: "Product Name", minWidth: 150 },
  {id: "unit",label: "Unit",minWidth: 50,align: "center"},
  {id: "qty",label: "Quantity",minWidth: 50,align: "center"},
  {id: "amount",label: "Amount",minWidth: 100,align: "center"},
  {id: "exprmonths",label: "Exprmonths",minWidth: 100,align: "center"},
  {id: "category",label: "Category",minWidth: 100,align: "center"},
  {id: "units",label: "Stock left",minWidth: 100,align: "center"},
];

const OwnerTable = ({props}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [storeItems, setStoreItems] = useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    try {
      (async () => {
        let { data } = await axios.get(`/product/products/${props.storeid}`);
        setStoreItems(data.products);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [props.storeid]);

  return (
    <Paper sx={{ width: { md: "80%", xs: "100%" }, overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {storeItems
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={item._id}>
                    {columns.map((column) => {
                      const value = item[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={storeItems.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default OwnerTable;
