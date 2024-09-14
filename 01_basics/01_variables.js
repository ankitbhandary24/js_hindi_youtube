const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;//undefined

// accountId = 2 // not allowed
// console.log (accountId) ;

/*
It's preferred not to use " var "
(because of use in block scope & functional scope)
because it does not supports { }; "let" supports it.

not declearing variable is also not preferred but is possible.
*/
accountEmail="ankit@gmail.com"
accountPassword="4545"
accountCity="singur"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])