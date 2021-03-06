import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  materialForm: {
    '& div': {
      '& div': {
        '& div': {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    }
  },
  materialItemAdd: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0 !important'
  },
  textField: {
    margin: '10px !important',
    '& div': {
      '& textarea': {
        padding: '0 1rem !important'
      }
    }
  },
  materialAdd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  saveButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: '.5rem'
  },
  returnButton: {
    margin: theme.spacing(2)
  },
  container: {
    width: '100%',
    padding: 20,
    marginTop: 70
  },
  tabs: {
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'white',
    '& span.MuiTab-wrapper': {
      color: '#3F51B5'
    },
    '& span.MuiTabs-indicator': {
      backgroundColor: '#3F51B5'
    }
  },
  controlsBlock: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  inputError: {
    color: theme.palette.error.main,
    padding: '0 5px'
  },
  colorImages: {
    display: 'flex'
  },
  errorTab: {
    backgroundColor: theme.palette.error.main,
    '& span': {
      color: 'white !important'
    }
  }
}));
