import { 
  TypedUseSelectorHook, 
  useDispatch as dispatchRedux, 
  useSelector as selectorRedux 
} from "react-redux";
import { 
  TAppDispatch, 
  TRootState
} from "./types";

export const useDispatch = () => dispatchRedux<TAppDispatch>();

export const useSelector: TypedUseSelectorHook<TRootState> = selectorRedux;