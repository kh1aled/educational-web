import { configureStore } from '@reduxjs/toolkit';
import translationReducer from './TranslationSlice';
import cardsReducer from './CardsDataSlice'
import Games1420Slice from './Games1420Slice';

export const store = configureStore({
  reducer: {
    translation: translationReducer,
    cardsData : cardsReducer,
    games1420:Games1420Slice
  }
});
