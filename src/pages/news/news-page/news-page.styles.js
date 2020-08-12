import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  table: {
    textTransform: 'capitalize'
  },
  tableNav: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0'
  },
  container: {
    width: `100%`,
    marginTop: 65,
    position: 'static',
    padding: 20
  },
  paginationDiv: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
  }
}));
