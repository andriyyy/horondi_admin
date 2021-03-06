import React from 'react';
import { TablePagination } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import PaginationController from '../../components/pagination-controller';
import {
  setCurrentPage,
  setRowsPerPage
} from '../../redux/table/table.actions';

import { tableTranslations } from '../../translations/table.translations';

const { ROWS_PER_PAGE } = tableTranslations;

const TablePaginator = () => {
  const dispatch = useDispatch();
  const {
    itemsCount,
    rowsPerPage,
    rowsPerPageOptions,
    currentPage
  } = useSelector(
    ({
      Table: {
        itemsCount,
        pagination: { currentPage, rowsPerPage, rowsPerPageOptions }
      }
    }) => ({
      itemsCount,
      rowsPerPage,
      rowsPerPageOptions,
      currentPage
    })
  );

  const handleChangePage = (event, newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  const handleChangeRowsPerPage = (event) => {
    const rowsPerPageValue = parseInt(event.target.value);
    dispatch(setCurrentPage(0));
    dispatch(setRowsPerPage(rowsPerPageValue));
  };

  const getDisplayedRowsLabel = (from, to, count) => `${from}-${to} з ${count}`;

  return (
    <TablePagination
      component='div'
      rowsPerPageOptions={rowsPerPageOptions}
      count={itemsCount}
      rowsPerPage={rowsPerPage}
      page={currentPage}
      SelectProps={{ native: true }}
      labelRowsPerPage={ROWS_PER_PAGE}
      labelDisplayedRows={({ from, to, count }) =>
        getDisplayedRowsLabel(from, to, count)
      }
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      ActionsComponent={PaginationController}
    />
  );
};

export default TablePaginator;
