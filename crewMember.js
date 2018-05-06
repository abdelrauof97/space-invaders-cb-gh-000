class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }
  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
  }
  setsInvisibility() {
    return this.position === "Defender" && this.currentShip !== "Looking for a Rig" ? this.currentShip.cloaked = true : "had no effect";
  }
  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
  }
}
