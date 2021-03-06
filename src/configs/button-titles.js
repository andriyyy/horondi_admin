const buttonTitles = {
  DELETE_TITLE: 'Видалити',
  EDIT_TITLE: 'Редагувати',
  CREATE_NEWS_TITLE: 'Додати новину',
  CREATE_PATTERN_TITLE: 'Додати гобелен',
  CREATE_MODEL_TITLE: 'Додати модель',
  REMOVE_TITLE: 'Видалити новину',
  MODEL_REMOVE_TITLE: 'Видалити модель',
  MODEL_SAVE_TITLE: 'Зберегти',
  PATTERN_REMOVE_TITLE: 'Видалити гобелен',
  REMOVE_BUSINESS_PAGE_TITLE: 'Видалити сторінку',
  CANCEL_TITLE: 'Відмінити',
  LOGOUT_TITLE: 'Вихід',
  CREATE_BUSINESS_PAGE: 'Додати бізнес сторінку',
  CREATE_CONTACT_TITLE: 'Додати контакти',
  REMOVE_CONTACT_TITLE: 'Видалити контакт',
  REMOVE_USER_TITLE: 'Видалити користувача',
  SWITCH_USER_STATUS_TITLE: 'Змінити статус користувача',
  USER_INACTIVE_TITLE: 'Деактивувати',
  USER_ACTIVE_TITLE: 'Активувати',
  ADD_CATEGORY: 'Додати категорію',
  GO_BACK_TITLE: 'Назад',
  DELETE_CATEGORY: 'Видалити категорію',
  ADD_SUBCATEGORY: 'Додати підкатегорію',
  ADD_CATEGORY_IMAGE: 'Додати зображення',
  ADD_CATEGORY_NAME: 'Додати назву',
  CANCEL: 'Відмінити',
  SAVE_CATEGORY: 'Зберегти категорію',
  SAVE_SUBCATEGORY: 'Зберегти підкатегорію',
  CREATE_SPECIAL_USER: 'Створити спецкористувача',
  ADD_PHOTO_LABEL: '+',
  CREATE_CATEGORY: 'Створити категорію',
  CREATE_SUBCATEGORY: 'Створити підкатегорію',
  PATTERN_REMOVE_MESSAGE: 'Ви впевнені, що хочете видалити цей гобелен?',
  REMOVE_CONTACT_MESSAGE: 'Ви впевнені, що хочете видалити цей контакт?',
  USER_UNACTIVE_TITLE: 'Деактивувати',
  REMOVE_COMMENT_TITLE: 'Видалити коментар',
  SHOW_COMMENTS_TITLE: 'Переглянути коментарі',
  HIDE_COMMENTS_TITLE: 'Приховати коментарі',
  REMOVE_EMAIL_QUESTION: 'Видалити запитання',
  UNDERSTAND: 'Зрозуміло',
  ANSWER: 'Відповісти',
  TO_SPAM: 'У СПАМ',
  DELETE_SELECTED: 'Видалити вибрані',
  MOVE_ALL_TO_SPAM: 'Перемістити у СПАМ',
  REMOVE_MATERIAL_TITLE: 'Видалити матеріал',
  CREATE_MATERIAL_TITLE: 'Створити матеріал',
  CREATE_COLOR_TITLE: 'Створити колір',
  REMOVE_COLOR_TITLE: 'Видалити колір',
  SAVE_MATERIAL: 'Зберегти матеріал',

  titleGenerator: (editMode, isMain) => {
    const editModeMap = new Map([
      [true, 'Зберегти'],
      [false, 'Створити']
    ]);
    const isMainMap = new Map([
      [true, 'категорію'],
      [false, 'підкатегорію']
    ]);
    return `${editModeMap.get(editMode)} ${isMainMap.get(isMain)}`;
  }
};
export default buttonTitles;
