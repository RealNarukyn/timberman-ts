import { Size } from '../types/sizes';

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

class MapManager {
  canvasSize: Size;

  pointsWidth: number;

  points: Array<{ start: number; end: number }>;

  constructor(canvasSize: Size) {
    this.canvasSize = canvasSize;
    this.pointsWidth = canvasSize.width / 5;
    const pointsHelper: Array<{ start: number; end: number }> = getPointsArray(
      this.pointsWidth
    );
    this.points = pointsHelper;
  }
}

// eslint-disable-next-line import/no-mutable-exports
export let mapManager: MapManager;

export const initMapManager = (
  canvasSize: Size = { width: 800, height: 900 }
) => {
  mapManager = new MapManager(canvasSize);
};
