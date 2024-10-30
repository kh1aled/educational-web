import { createSlice } from '@reduxjs/toolkit';
import enTranslations from '../Translation/En.json';
import arTranslations from  '../Translation/Ar.json';

const translations = {
  en: enTranslations,
  ar: arTranslations
};

const initialState = {
  language: 'en',
  texts: translations['en']
};

const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      state.texts = translations[action.payload];
      document.documentElement.lang = action.payload;
      document.documentElement.dir = action.payload === 'ar' ? 'rtl' : 'ltr';
    }
  }
});

export const { changeLanguage } = translationSlice.actions;
export default translationSlice.reducer;
