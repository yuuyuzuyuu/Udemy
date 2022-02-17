const person = {
  name: ['Tom', 'Tim'],
  age: [20, 21],
  interests: {
    music: 'piano',
    sports: 'soccer'
  },
  getfullName: function() {
    console.log(this.name[0]+this.name[1])
  }
};

console.log(person.name[0]);
console.log(person.interests.music);
person.getfullName();