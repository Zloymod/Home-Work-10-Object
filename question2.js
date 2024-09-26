const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

// console.log(people);

// people.queueNumber = people["queueNumber"].sort(a + b);
// console.log(people.queueNumber);
//   const result = giveTalonsInOrder(people, ordersArr) {
//         let sortt = people.map((people) => people.queueNumber).sort(a+b);
//         console.log(sortt)

// };
// console.log("result", result);

// console.log(ordersArr);
// console.log(people);

// people.queueNumber = ordersArr.id;
// console.log(people);

const giveTalonsInOrder = (people, ordersArr) => {
  for (let i = 0; i < people.length; i++) {
    people[i].queueNumber = ordersArr[i];
  }
  return people;
};
const sortedPeople = giveTalonsInOrder(people, ordersArr);
const result = sortedPeople.sort((a, b) => a.queueNumber - b.queueNumber);
console.log("result", result);
