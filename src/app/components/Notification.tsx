import React from 'react';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
}

const typeStyles = {
  success: {
    bg: 'bg-green-100 dark:bg-green-900',
    border: 'border-green-500 dark:border-green-700',
    text: 'text-green-900 dark:text-green-100',
    icon: 'text-green-600',
  },
  error: {
    bg: 'bg-red-100 dark:bg-red-900',
    border: 'border-red-500 dark:border-red-700',
    text: 'text-red-900 dark:text-red-100',
    icon: 'text-red-600',
  },
};

const Notification: React.FC<NotificationProps> = ({ type, message }) => {
  const { bg, border, text, icon } = typeStyles[type];

  return (
    <div
      role="alert"
      className={`${bg} ${border} ${text} p-3 rounded-lg flex items-center transition duration-300 ease-in-out transform hover:scale-105 mb-4`}
    >
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className={`h-5 w-5 flex-shrink-0 mr-2 ${icon}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

export default Notification;
