//1
function Usercard(num) {//num=[1;3]
    this.getCardOptions = function () {
        this.balance = 100;
        this.transactionLimit = 100;
        this.key = num;
        this.historyLogs = [];
        return this
    };
    this.putCredits = function (money) {
        this.balance = this.balance + money;
        this.historyLogs.push({
            OperationType: 'Received credits',
            Credits: money,
            operationTime: new Date()
        })
        return this.balance;
    };
    this.takeCredits = function (money) {
        if (this.transactionLimit >= money && this.balance - money >= money) {
            this.balance = this.balance - money;
            this.historyLogs.push({
                OperationType: 'Withdrawal of credits',
                Credits: money,
                operationTime: new Date()
            })
        }
        return this.balance
    };
    this.setTransactionLimit = function (limit) {
        this.historyLogs.push({
            OperationType: 'Transaction limit change',
            Credits: limit,
            operationTime: new Date()
        })
        return this.transactionLimit = limit;
    };
    this.transferCredits = function (amount, recipient) {
        if (this.transactionLimit >= amount && this.balance - amount >= amount) {
            this.balance = this.balance - amount;
            recipient.balance = recipient.balance + amount * 0.995;
        }
        return (this.balance);
    }
    return this.getCardOptions()
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    getCardByKey(num) {
        return new Usercard(num);
    }
}

let user = new UserAccount('Bob')
let card1 = user.getCardByKey(1)
let card2 = user.getCardByKey(2)
user.cards.push(card1,card2);

card1.getCardOptions();
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1);
console.log(card2);
console.log(user);

