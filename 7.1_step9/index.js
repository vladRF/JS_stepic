let budget = {
    income: 5,
    expenses: 130000,
    calculateProfit() {

        if (this.income - this.expenses > 0) {
            console.log(`Ваша прибыль составляет ${this.income - this.expenses} рублей`)

        } else if ((this.income - this.expenses) === 0) {
            console.log(`Вы отработали в 0`)
        } else {
            console.log(`Вы ушли в минус на ${this.expenses - this.income} рублей`)
        }

    }


};

budget.calculateProfit()