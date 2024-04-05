import formSlice from "@/Features/formSlice/formSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: { formSlice } });
