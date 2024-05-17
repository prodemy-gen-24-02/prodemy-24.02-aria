var user = {
  username: "JohnDoe",
  userEmail: "johndoe@ymail.com",
  userPassword: "hello123",
  balance: 500000,
  verifiedUser: true,
  id: 123,
  checkBalance: function () {
    return "Account:\n" + this.username + ":" + this.balance;
  },
  shopCart: {
    item1: "Apple",
    item2: "Pizza"
  }
};
console.log("User Info:\n");
console.log(user);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function editProperty(object, key, value) {
  object[key] = value;
}
var recursiveAsyncReadLine = function () {
  rl.question('Edit Select Key : ', (select) => {
    if (select == 'exit') return rl.close();
    if (select in user) {
      rl.question('Edit Value : ', (val) => {
        user[select] = val;
        console.log("New User Info:");
        console.log(user);
        recursiveAsyncReadLine();
      });
    } else console.log("Error: property not found\n");
    recursiveAsyncReadLine();
  });
};
recursiveAsyncReadLine();



