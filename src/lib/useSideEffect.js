import { useContext } from "react";
import {EffectContext} from "./provider";

export default function useSideEffect(type) {
  const effects = useContext(EffectContext);
  return params => {
    effects({ type: type, params: params });
  };
}
