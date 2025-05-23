// "use client";

// import React, { useEffect, useState } from 'react'

// const NetworkCheck = () => {

//     const [isOnline, setIsOnline] = useState(navigator.onLine);

//     useEffect(() => {
//         const handleOnline = () => setIsOnline(true);
//         const handleOffline = () => setIsOnline(false);

//         window.addEventListener("online", handleOnline);
//         window.addEventListener("offline", handleOffline);

//         return () => {
//             window.removeEventListener("online", handleOnline);
//             window.removeEventListener("offline", handleOffline);
//         }
//     }, []);

//     return isOnline;
// };

// export default NetworkCheck;
// // This hook can be used in any component to check the network status