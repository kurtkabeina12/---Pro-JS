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
    constructor() {
        super(amount);
        this.time = this.time;
    }

    CalculateTotal() {
        return this.amount * this.time;
    }

}

class ItemBilling extends Billing {
    constructor() {
        super(amount);
        this.element = this.element;
    }

    CalculateTotal() {
        return this.amount * this.element;
    }

}

