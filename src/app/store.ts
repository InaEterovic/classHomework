import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/userSlice";
import logger from "../middleware/logger";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // optional: add thunk manually too
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
