import React, { useState } from "react";
import { ACTIONS, EFFECTS } from "../constants/constants";
import useSideEffect from "../lib/useSideEffect";
import { useSelector } from "react-redux";
import { selectFilter } from "../reducer/storeReducer";
import useDispatch from "../lib/useDispatch";

export default function Header() {
  const [count, setCount] = useState(5);
  const [interval, setInterval] = useState(100);

  // store
  const filter = useSelector(selectFilter);

  // side effects
  const loadMetricsHandler = useSideEffect(EFFECTS.METRICS_LOAD);
  useSideEffect(EFFECTS.METRIC_RESTART_UPDATES)({ count, interval });

  // dispatch
  const filterChangedHandler = useDispatch(ACTIONS.FILTER_CHANGED);

  return (
    <header>
      <input
          type="button"
          value="add 50 new metrics"
          onClick={() => loadMetricsHandler()}
      />

      <div className={'filter'}>
        Filter metrics:
        <input
            type="string"
            value={filter}
            onChange={e => filterChangedHandler(e.target.value)}
        />
      </div>

      <div>
        Update random
        <input
            type="number"
            min="0" max="10000"
            value={count}
            onChange={e => setCount(parseInt(e.target.value))}
        />
        metrics every
        <input
            type="number"
            min="10" max="600000"
            value={interval}
            onChange={e => setInterval(parseInt(e.target.value))}
        />
        ms.
      </div>


    </header>
  );
}
