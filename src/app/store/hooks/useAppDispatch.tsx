import { useDispatch } from "react-redux";
import type { AppDispath } from "../store";

export const useAppDispatch = useDispatch.withTypes<AppDispath>();
