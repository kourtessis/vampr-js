class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampires = this;

    while (currentVampires.creator){
      currentVampires = currentVampires.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

   return this.numberOfVampiresFromOriginal <  vampire.numberOfVampiresFromOriginal

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}


///--------Original's Offspring
const original = new Vampire("Original", 1000);
// console.log(original);

const ansel = new Vampire("Ansel", 1100);
const bart = new Vampire("Bart", 1100);

original.addOffspring(ansel);
original.addOffspring(bart);

//----------Ansel's offspring
const elgort = new Vampire("Elgort", 1200);
const sarah = new Vampire("Sarah", 1200)

ansel.addOffspring(elgort);
ansel.addOffspring(sarah)
//---------Elgorts Offspring

const andrew = new Vampire("Andrew", 1300);

elgort.addOffspring(andrew);

//--------Sarah Zero offspring

console.log(elgort)


module.exports = Vampire;

