export default interface PlayerPositionProps {
  [key: string]: {
    color: string;
    position: number;
    rollNumber: number;
    currentGame: string;
    points: number;
  };
}
