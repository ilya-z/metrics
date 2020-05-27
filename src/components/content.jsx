import React from "react";
import Card from "./card";
import useMetricFilter from "../hooks/useMetricFilter";

export default function Content() {

  const metrics = useMetricFilter();

  return (
      <main>
          <div className={'content'}>
              {metrics.map(m => (<Card metric={m} key={m.id} />))}
          </div>
      </main>
    )
}
