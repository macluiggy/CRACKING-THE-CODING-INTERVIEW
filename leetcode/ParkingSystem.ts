const CAR_TYPE = {
  BIG: 1,
  MEDIUM: 2,
  SMALL: 3,
};
class ParkingSystem {
  bigCount;
  mediumCount;
  smallCount;
  constructor(big: number, medium: number, small: number) {
    this.bigCount = big;
    this.smallCount = small;
    this.mediumCount = medium;
  }

  addCar(carType: number): boolean {
    let count = 0;
    if (carType === CAR_TYPE.BIG) {
      count = --this.bigCount;
    } else if (carType === CAR_TYPE.MEDIUM) {
      count = --this.mediumCount;
    } else {
      count = --this.smallCount;
    }
    return count >= 0;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
const parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.
