const accountId = 12345
let accountEmail = "apu@gmail.com"
var accountPassword = "54321"
accountCity = "Guwahati"
let accountState;

//accountId = 2

/*
  we shouldn't use var beacuse of the issue in block scope and functional scope 
*/

accountEmail = "ricksinha@gmail.com"
accountPassword = "976431"
accountCity= "Bengluru"

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
