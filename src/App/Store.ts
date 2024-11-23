import { configureStore } from '@reduxjs/toolkit';
import  FileTreeSlice  from './Features/FileTreeSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    fileTree:FileTreeSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Fixing useAppDispatch
export default store; // Correct default export