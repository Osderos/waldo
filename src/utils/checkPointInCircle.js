export const checkPointInCircle = (elemX, elemY, centerCircleX, centerCirleY, radius) => {
    let distPoints =
      (elemX - centerCircleX) * (elemX - centerCircleX) +
      (elemY - centerCirleY) * (elemY - centerCirleY);
    radius *= radius;
    if (distPoints < radius) {
      return true;
    }
    return false;
  };