const amount = 600;
const choice = "снять"


let bankAccount = {
    balance: 500,

    deposit: function (amount) {
        console.log(this.balance + amount)
    },

    withdraw: function (amount) {
        console.log(this.balance - amount)
    },
};



if (choice === "внести") {
    bankAccount.deposit(amount)
} else if (choice === "снять") {
    if (amount > bankAccount.balance) {
        console.log("Недостаточно средств на счете")
    } else { bankAccount.withdraw(amount) }

}
