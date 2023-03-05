import { rootReducer } from "../services/rootReducer";

export type TRootState = ReturnType<typeof rootReducer>;

export type TEmail = {
  email: string;
};

export type TEmailAndPassword = {
  password: string;
} & TEmail;

export type TUserFullForm = {
  name: string;
} & TEmailAndPassword;

export type TResetPassword = {
  token: string;
} & TEmail;