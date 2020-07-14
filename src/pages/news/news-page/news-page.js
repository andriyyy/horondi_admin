import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useStyles } from './news-page.styles';
import { config } from '../../../configs';
import { getNews, deleteNewsItem } from '../../../redux/news/news.actions';

import {
  setDialogStatus,
  setDialogTitle,
  setDialogContent,
  setButtonTitle,
  setEventHandler
} from '../../../redux/dialog-window/dialog-window.actions';

import TableContainerRow from '../../../components/table-container-row';
import TableContainerGenerator from '../../../components/table-container-generator';
import LoadingBar from '../../../components/loading-bar';

const { routes } = config.app;
const { REMOVE_MESSAGE } = config.messages;
const { REMOVE_TITLE } = config.buttonTitles;

const { CREATE_NEWS_TITLE } = config.buttonTitles;

const pathToNewsAddPage = routes.pathToAddNews;
const tableTitles = config.tableHeadRowTitles.news;

const NewsPage = () => {
  const classes = useStyles();
  const { list, loading } = useSelector(({ News }) => ({
    list: News.list,
    loading: News.loading
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const openSuccessSnackbar = (eventHandler) => {
    dispatch(setDialogTitle(REMOVE_TITLE));
    dispatch(setDialogContent(REMOVE_MESSAGE));
    dispatch(setButtonTitle(REMOVE_TITLE));
    dispatch(setEventHandler(eventHandler));
    dispatch(setDialogStatus(true));
  };

  const newsDeleteHandler = (id) => {
    const removeNews = async () => {
      dispatch(setDialogStatus(false));
      await dispatch(deleteNewsItem(id));
    };
    openSuccessSnackbar(removeNews);
  };

  const newsItems =
    list !== undefined
      ? list.map((newsItem, index) => (
        <TableContainerRow
          key={index}
          id={newsItem.id}
          author={newsItem.author.name[0].value}
          title={newsItem.title[0].value}
          deleteHandler={() => newsDeleteHandler(newsItem._id)}
          editHandler={() => {
            dispatch(push(`/news/${newsItem._id}`));
          }}
        />
      ))
      : null;

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.tableNav}>
        <Button
          id='add-news'
          component={Link}
          to={pathToNewsAddPage}
          variant='contained'
          color='primary'
        >
          {CREATE_NEWS_TITLE}
        </Button>
      </div>
      <TableContainerGenerator
        id='newsTable'
        tableTitles={tableTitles}
        tableItems={newsItems}
      />
    </div>
  );
};

export default NewsPage;
