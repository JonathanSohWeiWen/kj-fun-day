import { GAME_LIST } from "../constants/games";
import { HARD_TILE_POSITIONS } from "../constants/tilePositions";
import GameDescription from "../interface/gameDescription";
import PlayerPositionProps from "../interface/playerPositions";

export const checkValidPath = (
  index: number,
  rollNumber: number,
  hard: boolean,
  prevDirection: "START" | "LEFT" | "RIGHT" | "UP" | "DOWN"
): number[] => {
  const factor = hard ? 21 : 12;

  //Base case
  if (rollNumber > 1) {
    const { left, up, right, down } = checkValidSteps(hard, index);
    let combined: number[] = [];
    if (left && prevDirection !== "RIGHT")
      combined = [
        ...combined,
        ...checkValidPath(index - 1, rollNumber - 1, hard, "LEFT"),
      ];
    if (up && prevDirection !== "DOWN")
      combined = [
        ...combined,
        ...checkValidPath(index - factor, rollNumber - 1, hard, "UP"),
      ];
    if (down && prevDirection !== "UP")
      combined = [
        ...combined,
        ...checkValidPath(index + factor, rollNumber - 1, hard, "DOWN"),
      ];
    if (right && prevDirection !== "LEFT")
      combined = [
        ...combined,
        ...checkValidPath(index + 1, rollNumber - 1, hard, "RIGHT"),
      ];
    return combined;
  } else {
    const { left, up, right, down } = checkValidSteps(hard, index);
    const positions: number[] = [];
    if (left && prevDirection !== "RIGHT") positions.push(index - 1);
    if (up && prevDirection !== "DOWN") positions.push(index - factor);
    if (right && prevDirection !== "LEFT") positions.push(index + 1);
    if (down && prevDirection !== "UP") positions.push(index + factor);
    return positions;
  }
};

const checkValidSteps = (hard: boolean, pos: number) => {
  const grid = HARD_TILE_POSITIONS;
  const factor = 21;
  let up = false,
    down = false,
    left = false,
    right = false;
  if (pos >= factor && grid[pos - factor]) up = true;
  if (grid.length - factor > pos && grid[pos + factor]) down = true;
  if (pos % factor > 0 && grid[pos - 1]) left = true;
  if (pos % factor < factor - 1 && grid[pos + 1]) right = true;
  return { left, up, right, down };
};

export const getBorderColor = (
  index: number,
  positions: PlayerPositionProps
) => {
  const groups = Object.keys(positions);
  for (const group of groups) {
    if (positions[group].position === index) return positions[group].color;
  }
  return "";
};

export const selectGame = (playerPositions: PlayerPositionProps) => {
  const groups = Object.keys(playerPositions);
  const currentGames = groups.map((group) => {
    return playerPositions[group].currentGame;
  });
  let selectedGame: GameDescription | undefined = undefined;
  while (true) {
    selectedGame = GAME_LIST[Math.floor(Math.random() * GAME_LIST.length)];
    if (
      !currentGames.includes(selectedGame.name) &&
      selectedGame.pointSystem.upperPrimary !== undefined
    )
      return selectedGame?.name;
  }
};
