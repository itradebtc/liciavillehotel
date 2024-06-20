"use client"
import { useState } from 'react';
// import styles from '../home.module.css'

const rooms = [
  { id: 1, type: 'Standard', price: 100, features: ['WiFi', 'TV'] },
  { id: 2, type: 'Deluxe', price: 150, features: ['WiFi', 'TV', 'Mini Bar'] },
  { id: 3, type: 'Suite', price: 200, features: ['WiFi', 'TV', 'Mini Bar', 'Ocean View'] },
];

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  const handleRoomChange = (event) => {
    const roomId = parseInt(event.target.value, 10);
    const room = rooms.find((r) => r.id === roomId);
    setSelectedRoom(room);
  };

  return (
    <div>
      <h1>Hotel Room Pricing</h1>
      <div>
        <label htmlFor="roomType">Choose a room type:</label>
        <select id="roomType" onChange={handleRoomChange}>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>Room Details</h2>
        <p>Type: {selectedRoom.type}</p>
        <p>Price: ${selectedRoom.price} per night</p>
        <p>Features:</p>
        <ul>
          {selectedRoom.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
