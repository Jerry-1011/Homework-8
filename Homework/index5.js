//1.
const skins = [
    {
        "id": "266000",
        "num": 0,
        "name": "default",
        "chromas": false
        },
        {
        "id": "266001",
        "num": 1,
        "name": "Justicar Aatrox",
        "chromas": false
        },
        {
        "id": "266002",
        "num": 2,
        "name": "Mecha Aatrox",
        "chromas": true
        }
]
skins.push({
    id: '266003',
    num: 3,
    name: 'Sea Hunter Aatrox',
    chromas: false,
  })
skins.push({
    id: '266007',
    num: 7,
    name: 'Blood Moon Aatrox',
    chromas: false,
  })
skins.push({
    id: '266008',
    num: 8,
    name: 'Blood Moon Aatrox Prestige Edition',
    chromas: false,
  })
skins.push({
    id: '266009',
    num: 9,
    name: 'Victorious Aatrox',
    chromas: true,
  })
skins.push({
    id: '266011',
    num: 11,
    name: 'Odyssey Aatrox',  
    chromas: true,
  })
console.log(skins)
//2.

const findname = skins => skins.map(v => v.name)
console.log(findname)

//3

const find = skins => skins.id.map(v => v.name.id)
console.log(find)

//4
const findid = skins => skins.id.name.map(v => v.name.id)

//5 
const findchromas = (start, end) => {
  const findchromas = []
  for(let i = start; i <= end; i++); {
    if(chromas = true in skins) {
      findchromas.push(i)
    }
  }
    return findchromas;
};

console.log(findchromas(skins));