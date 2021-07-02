const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'plumpness'

function judgeVegetable(vegetables, metric) {
let winningNum = 0
let winningPerson = ""
  for (let i = 0; i < vegetables.length; i++ ) {
    if (vegetables[i][metric] > winningNum) {
      winningNum = vegetables[i][metric];
      winningPerson = vegetables[i].submitter
    }
  }
return winningPerson;
}


console.log(judgeVegetable(vegetables, metric))