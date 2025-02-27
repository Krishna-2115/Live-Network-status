import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOnline, setOffline } from './redux/networkSlice';

function NetworkStatus() {
  const status = useSelector((state) => state.network.status);
  const dispatch = useDispatch();

  useEffect(() => {
    // ✅ Check initial network status
    if (navigator.onLine) {
      dispatch(setOnline());
    } else {
      dispatch(setOffline());
    }

    const handleOnline = () => dispatch(setOnline());
    const handleOffline = () => dispatch(setOffline());

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          🌐 Network Status
        </h1>
        <p
          className={`text-2xl font-semibold ${
            status === 'Online' ? 'text-green-500' : 'text-red-500'
          } transition-colors duration-300`}
        >
          {status === 'Online' ? '🟢 You are Online' : '🔴 You are Offline'}
        </p>
        <p className="text-gray-500 mt-4">
          {status === 'Online'
            ? 'You have an active internet connection.'
            : 'Oops! No internet connection detected.'}
        </p>
      </div>
    </div>
  );
}

export default NetworkStatus;
