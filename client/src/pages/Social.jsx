import React, { useState, useEffect } from 'react';
import Rankedcard from './rankedCard'; // Import the Card component

function Social() {
  // State to hold the fetched data
  const [userData, setUserData] = useState([]);
  // Your current location coordinates
  const [currentLocation, setCurrentLocation] = useState({ latitude: 43, longitude: -77 });

  // Effect to fetch data from backend (simulated with useEffect)
  useEffect(() => {
    // Simulated fetch request (replace with actual fetch request)
    const fetchData = async () => {
      // Dummy data for demonstration
      const dummyData = [
        { rank: 1, name: 'John Doe', hikesCompleted: 10, points: 100, latitude: 43.01, longitude: -77.01 },
        { rank: 2, name: 'Jane Smith', hikesCompleted: 8, points: 90, latitude: 43.02, longitude: -77.02 },
        { rank: 3, name: 'Alice Johnson', hikesCompleted: 6, points: 80, latitude: 42.99, longitude: -88.99 },
        { rank: 4, name: 'Bob Williams', hikesCompleted: 5, points: 70, latitude: 42.98, longitude: -79.01 }
      ];

      // Filter cards near your current location
      const nearbyCards = dummyData.filter(user => {
        const distance = calculateDistance(currentLocation.latitude, currentLocation.longitude, user.latitude, user.longitude);
        // Considering nearby within 1 degree of latitude and longitude (you can adjust this threshold as needed)
        return distance <= 5;
      });

      setUserData(nearbyCards);
    };

    fetchData();
  }, [currentLocation]); // Update when current location changes

  // Function to calculate distance between two coordinates (in this case, using simple Euclidean distance)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    return Math.sqrt(dLat * dLat + dLon * dLon);
  };

  return (
    <div>
      <h1>Popular Hiker Near You</h1>
      {userData.map(user => (
        <Rankedcard
          key={user.rank}
          rank={`Rank: ${user.rank}`}
          name={`Name: ${user.name}`}
          numHikesVisited={`Hikes Completed: ${user.hikesCompleted}`}
          userPoints={`User Points: ${user.points}`}
        />
      ))}
    </div>
  );
}

export default Social;
