import Link from "next/link";

// components/RoomCard.js
export default function RoomCard({ room }) {
  return (
    <div className="room-card">
      <h3>{room.name}</h3>
      <p>{room.description}</p>
      <p>Price: ₦{room.price} per night</p>
      <Link href='./booknow'>
      <button>Book Now</button>
      </Link>
      <style jsx>{`
        .room-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          margin: 10px;
          text-align: center;
        }
        .room-card h3 {
          margin-top: 0;
        }
        .room-card button {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .room-card button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
}
