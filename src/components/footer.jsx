import React, {useMemo} from 'react';
import useMetricFilter from "../hooks/useMetricFilter";

export default function Footer() {

    const metrics = useMetricFilter();

    return useMemo(() => <footer>Total: {metrics.length} metrics</footer>, [metrics.length])
}
