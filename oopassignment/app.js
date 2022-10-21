class PersonAccount {
    constructor(firstName, lastName, incomes, expenses) {
        this.firstNmae = firstName
        this.lastName = lastName
        this.incomes = Object.values(incomes)
        this.expenses=Object.values(expenses)
    }
    totalIncome() {
        let total = 0;
        this.incomes.forEach(val => {
            total += val
        })
        console.log(`The total Income = ${total}`)
        return total
    }
    totalExpense() {
        let total = 0;
        this.expenses.forEach(val => {
            total += val
        })
        console.log(`The total expenses = ${total}`)
        return total
    }
    addIncome(amount) {
        this.incomes.push(amount)
    }
    addExpense(amount) {
        this.expenses.push(amount)
    }
    accountBalance() {
        let accountBalance = this.totalIncome()-this.totalExpense();
        console.log(`The current account balance = ${accountBalance}`)
    }
}
let PA = new PersonAccount("Muneeb", "Adil",{tuition:5000,callCenter:20000,freelancing:50000,rent:40000},{grocery:30000,medicines:10000,fees:55000});
console.log(PA);
PA.totalIncome();
PA.totalExpense();
PA.accountBalance();
PA.addIncome(10000);
PA.accountBalance();
PA.addExpense(5000);
PA.accountBalance();