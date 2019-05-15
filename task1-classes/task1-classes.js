function Hero(name,weapon) {
    this.name = name;
    this.weapon = weapon;
    Hero.prototype.side = {
        isAvenger: true
    };
}
let captainAmerica = new Hero('Steve Rogers', 'shield');
let ironMan = new Hero('Tony Stark', 'robot suit');
let thanos = new Hero('Thanos', 'infinity gauntlet');

thanos.side = {};
thanos.side.isAvenger = false;

console.log(captainAmerica);
console.log(ironMan);
console.log(thanos);

