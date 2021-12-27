const getPointsArray = (
  pointsWidth: number
): Array<{ start: number; end: number }> => {
  const pointsHelper: Array<{ start: number; end: number }> = [];
  let start: number = 0;

  for (let i = 0; i < 5; i++) {
    const end = start + pointsWidth;
    pointsHelper.push({ start, end });
    start += pointsWidth;
  }

  return pointsHelper;
};

class GameManager {
  pointsWidth: number;

  points: Array<{ start: number; end: number }>;

  constructor(canvasW: number = 800) {
    this.pointsWidth = canvasW / 5;
    const pointsHelper: Array<{ start: number; end: number }> = getPointsArray(
      this.pointsWidth
    );
    this.points = pointsHelper;
  }
}

// eslint-disable-next-line import/no-mutable-exports
export let Manager: GameManager;

export const initGameManager = (canvasW: number) => {
  Manager = new GameManager(canvasW);
};
