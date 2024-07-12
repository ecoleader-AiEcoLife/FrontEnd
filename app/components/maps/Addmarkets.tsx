import axios from "axios";
import { useEffect, useState } from "react";
import EventMarker from "./EventMarker";

interface PositionProps {
  title: string;
  latlng: {
    lat: number;
    lng: number;
  };
}

export default function Addmarkers() {
  const [positions, setPositions] = useState<PositionProps[]>([]);

  const getPositions = async () => {
    try {
      const response = await axios.get<PositionProps[]>(
        "http://localhost:3001/position"
      );
      setPositions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPositions();
  }, []);

  return (
    <div>
      {positions.map((position: PositionProps) => (
        <EventMarker position={position.latlng} title={position.title} />
      ))}
    </div>
  );
}
