import React from 'react';
import { useSelector } from 'react-redux';
import { TableRow, TableCell, Avatar, Checkbox } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import {
  CustomizedEditIcon,
  CustomizedDeleteIcon
} from '../../components/icons';
import { useStyles } from './table-container-row.styles';
import { config } from '../../configs';

const TableContainerRow = ({
  id,
  image,
  editHandler,
  showAvatar,
  showEdit,
  showDelete,
  showCheckbox,
  deleteHandler,
  clickHandler,
  checkboxChangeHandler,
  ...rest
}) => {
  const { SMALL_SIZE, DEFAULT_SIZE } = config.iconSizes;
  const classes = useStyles();

  const dense = useSelector(({ Table }) => Table.dense);

  const properties = { ...rest };

  const tableCells = Object.values(properties).map((property) => (
    <TableCell variant='body' key={property}>
      {ReactHtmlParser(property)}
    </TableCell>
  ));

  const iconSize = dense ? SMALL_SIZE : DEFAULT_SIZE;
  const avatarSize = dense ? classes.small : classes.medium;

  return (
    <TableRow key={id} hover onClick={(e) => clickHandler(e)}>
      {showCheckbox && (
        <TableCell>
          <Checkbox
            color='default'
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            onClick={(e) => checkboxChangeHandler(e, id)}
          />
        </TableCell>
      )}
      {showAvatar && (
        <TableCell>
          <Avatar className={avatarSize} src={image}>
            <ImageIcon />
          </Avatar>
        </TableCell>
      )}
      {tableCells}
      <TableCell>
        {showEdit && (
          <CustomizedEditIcon size={iconSize} onClickHandler={editHandler} />
        )}
        {showDelete && (
          <CustomizedDeleteIcon
            size={iconSize}
            onClickHandler={deleteHandler}
          />
        )}
      </TableCell>
    </TableRow>
  );
};

TableContainerRow.propTypes = {
  image: PropTypes.string,
  editHandler: PropTypes.func,
  deleteHandler: PropTypes.func,
  clickHandler: PropTypes.func,
  checkboxChangeHandler: PropTypes.func,
  id: PropTypes.string,
  showAvatar: PropTypes.bool,
  showEdit: PropTypes.bool,
  showDelete: PropTypes.bool,
  showCheckbox: PropTypes.bool
};

TableContainerRow.defaultProps = {
  id: '',
  image: '',
  deleteHandler: () => {},
  editHandler: () => {},
  clickHandler: () => {},
  checkboxChangeHandler: () => {},
  showAvatar: true,
  showEdit: true,
  showDelete: true,
  showCheckbox: false
};

export default TableContainerRow;
