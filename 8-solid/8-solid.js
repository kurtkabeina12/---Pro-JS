class Billing {
    constructor(amount) {
        this.amount = amount;
    }
}

class FixedBilling extends Billing {
    constructor() {
        super(amount)
    }

    CalculateTotal() {
        return this.amount;
    }

}

class HourBilling extends Billing {
    constructor(amount, time) {
        super(amount);
        this.time = time;
    }

    CalculateTotal() {
        return this.amount * this.time;
    }

}

class ItemBilling extends Billing {
    constructor(amount, element) {
        super(amount);
        this.element = element;
    }

    CalculateTotal() {
        return this.amount * this.element;
    }

}

