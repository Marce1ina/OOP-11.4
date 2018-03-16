function Phone(brand, price, color, system, ram) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.system = system;
    this.ram = ram;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.printSystem = function() {
    console.log("The phone runs on " + this.system + ".");
}

Phone.prototype.printRam = function() {
    console.log("The phone has " + this.ram + "GB RAM.");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "iOS", 4);
var samsungGalaxyS6 = new Phone("Samsung", 3550, "black", "Android", 3);
var onePlusOne = new Phone("OnePlus", 2850, "grey", "Android", 2.8);

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

iPhone6S.printSystem();
samsungGalaxyS6.printSystem();
onePlusOne.printSystem();

iPhone6S.printRam();
samsungGalaxyS6.printRam();
onePlusOne.printRam();
