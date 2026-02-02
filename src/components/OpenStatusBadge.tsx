'use client';

import { useState, useEffect } from 'react';
import { getOpenStatus } from '@/lib/utils';

export default function OpenStatusBadge() {
  const [status, setStatus] = useState<{ isOpen: boolean; text: string; nextChange: string } | null>(null);

  useEffect(() => {
    // Update immediately
    setStatus(getOpenStatus());

    // Update every minute
    const interval = setInterval(() => {
      setStatus(getOpenStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className="badge bg-gray-100 text-gray-600 animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`badge ${status.isOpen ? 'badge-open' : 'badge-closed'}`}
      title={status.nextChange}
      aria-label={`${status.text}. ${status.nextChange}`}
    >
      <span
        className={`w-2 h-2 rounded-full mr-2 ${
          status.isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'
        }`}
        aria-hidden="true"
      />
      {status.text}
    </div>
  );
}
