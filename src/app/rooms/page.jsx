// pages/index.js
"use client"
import RoomCard from "../component/RoomCard";
const rooms = [
  {
    id: 1,
    name: 'Standard Room',
    description: 'A comfortable room with all standard amenities.',
    price: 12000,
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description: 'A spacious room with balcony and premium amenities.',
    price: 13000,
  },
  {
    id: 3,
    name: 'Suite',
    description: 'A luxurious suite with top-notch amenities.',
    price: 15000,
  },
  {
    id: 4,
    name: 'Executive',
    description: 'A luxurious suite with balcony, and top-notch amenities.',
    price: 17000,
  },
];

export default function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to Our Hotel</h1>
        <p>Select from a range of luxurious rooms to suit your needs and budget.</p>
      </header>
      <main>
        <div className="room-selection">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </main>
      <style jsx>{`
        header {
          text-align: center;
          padding: 50px;
          background: #f5f5f5;
        }
        main {
          padding: 20px;
        }
        .room-selection {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
