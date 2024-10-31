'use client';

import { useReportWebVitals } from 'next/web-vitals'
import { usePathname } from 'next/navigation'

export function WebVitals() {
    const pathname = usePathname()

    useReportWebVitals((metric) => {
        const url = process.env.NEXT_PUBLIC_ANALYTICS_URL;

        const data = {
            ...metric,
            pathname: pathname,
        };

        const body = JSON.stringify(data);

        if (navigator.sendBeacon) {
            navigator.sendBeacon(url, body);
        } else {
            fetch(url, { body, method: 'POST', keepalive: true });
        }
    });
    return null;
}