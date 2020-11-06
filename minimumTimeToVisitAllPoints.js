const solution = (points) => {
  let totalDistance = 0;

  for (let index = 0; index < points.length - 1; index++) {
    const xDistance = Math.abs(points[index][0] - points[index + 1][0]);
    const yDistance = Math.abs(points[index][1] - points[index + 1][1]);
    totalDistance += Math.max(xDistance, yDistance);
  }

  return totalDistance;
};

const recursiveSolution = (points, xDistance = 0, yDistance = 0, totalDistance, index) => {
  if (index === points.length - 1) {
    return totalDistance;
  }

  return recursiveSolution(
    points,
    xDistance = Math.abs(points[index][0] - points[index + 1][0]),
    yDistance = Math.abs(points[index][1] - points[index + 1][1]),
    totalDistance = Math.max(xDistance, yDistance),
    index + 1,
  )
};
