const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const onlineUsers = users.filter((user) => {
  return user.status === "online";
});
let usersOnlineName = onlineUsers.map((user) => user.username).join(", ");
console.log(usersOnlineName);
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineName}`);

// console.log(onlineUsers);
