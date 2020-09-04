import React from 'react';
import { TextField, Paper, Grid, Tabs, Tab, AppBar } from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import TabPanel from '../../../components/tab-panel';
import { SaveButton } from '../../../components/buttons';
import LoadingBar from '../../../components/loading-bar';
import useMaterialHandlers from '../../../utils/use-material-handlers';
import { useStyles } from './material-add.styles';
import { addMaterial } from '../../../redux/material/material.actions';
import { config } from '../../../configs';

const { languages } = config;
const { materialErrorMessages } = config;

const MaterialAdd = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(({ Material }) => Material.materialLoading);
  const {
    purpose,
    createMaterial,
    tabsValue,
    handleTabsChange
  } = useMaterialHandlers();

  const langValues = languages.map((lang) => ({
    [`${lang}Name`]: '',
    [`${lang}Description`]: ''
  }));
  const formikValues = langValues !== null ? Object.assign(...langValues) : {};

  const formSchema = Yup.object().shape({
    ukName: Yup.string()
      .min(2, materialErrorMessages.MIN_LENGTH_MESSAGE)
      .max(100, materialErrorMessages.MAX_LENGTH_MESSAGE)
      .required(materialErrorMessages.VALIDATION_ERROR),

    enName: Yup.string()
      .min(2, materialErrorMessages.MIN_LENGTH_MESSAGE)
      .max(100, materialErrorMessages.MAX_LENGTH_MESSAGE)
      .required(materialErrorMessages.VALIDATION_ERROR),

    ukDescription: Yup.string()
      .min(2, materialErrorMessages.MIN_LENGTH_MESSAGE)
      .max(100, materialErrorMessages.MAX_LENGTH_MESSAGE)
      .required(materialErrorMessages.VALIDATION_ERROR),

    enDescription: Yup.string()
      .min(2, materialErrorMessages.MIN_LENGTH_MESSAGE)
      .max(100, materialErrorMessages.MAX_LENGTH_MESSAGE)
      .required(materialErrorMessages.VALIDATION_ERROR),

    purpose: Yup.string()
      .min(2, materialErrorMessages.MIN_LENGTH_MESSAGE)
      .max(100, materialErrorMessages.MAX_LENGTH_MESSAGE)
      .required(materialErrorMessages.VALIDATION_ERROR)
  });

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    validationSchema: formSchema,
    validateOnBlur: true,
    initialValues: {
      ...formikValues,
      purpose
    },
    onSubmit: () => {
      const material = createMaterial(values);
      dispatch(addMaterial(material));
    }
  });

  const TabPanels =
    languages.length > 0
      ? languages.map((lang, index) => (
          <TabPanel key={index} value={tabsValue} index={index}>
            <Paper className={styles.materialItemAdd}>
              <TextField
                data-cy={`${lang}Name`}
                id={`${lang}Name`}
                className={styles.textfield}
                variant='outlined'
                label='Назва'
                error={touched[`${lang}Name`] && !!errors[`${lang}Name`]}
                multiline
                value={values[`${lang}Name`]}
                onChange={handleChange}
              />
              {touched[`${lang}Name`] && errors[`${lang}Name`] && (
                <div className={styles.inputError}>{errors[`${lang}Name`]}</div>
              )}
              <TextField
                data-cy={`${lang}Description`}
                id={`${lang}Description`}
                className={styles.textfield}
                variant='outlined'
                label='Опис'
                multiline
                error={
                  touched[`${lang}Description`] &&
                  !!errors[`${lang}Description`]
                }
                value={values[`${lang}Description`]}
                onChange={handleChange}
              />
              {touched[`${lang}Description`] &&
                errors[`${lang}Description`] && (
                  <div className={styles.inputError}>
                    {errors[`${lang}Description`]}
                  </div>
                )}
            </Paper>
          </TabPanel>
        ))
      : null;

  const languageTabs =
    languages.length > 0
      ? languages.map((lang, index) => <Tab label={lang} key={index} />)
      : null;

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsBlock}>
          {/* <div>{languageCheckboxes}</div> */}
          <SaveButton
            className={styles.saveButton}
            data-cy='save'
            type='submit'
            title='Зберегти'
          />
        </div>
        <Grid item xs={12}>
          <Paper className={styles.materialItemAdd}>
            <TextField
              data-cy='photo'
              id='photo'
              className={styles.textfield}
              variant='outlined'
              label='Фото'
              value={values.Photo}
              onChange={handleChange}
              required
            />
          </Paper>
          <Paper className={styles.materialItemAdd}>
            <TextField
              data-cy='purpose'
              id='purpose'
              className={styles.textfield}
              variant='outlined'
              label='Призначення'
              value={values.purpose}
              onChange={handleChange}
              error={touched.purpose && !!errors.purpose}
            />
            {touched.purpose && errors.purpose && (
              <div className={styles.inputError}>{errors.purpose}</div>
            )}
          </Paper>
        </Grid>
        {languages.length > 0 ? (
          <div>
            <AppBar position='static'>
              <Tabs
                className={styles.tabs}
                value={tabsValue}
                onChange={handleTabsChange}
                aria-label='tabs'
              >
                {languageTabs}
              </Tabs>
            </AppBar>
            {TabPanels}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default MaterialAdd;
