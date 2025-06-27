interface PowerBank{
    batteryLevel?: number;
    circuit?: string;

    port(): void;
    charge(): void;
    getCapacity(): number;
}


class WeiPowerBank implements PowerBank{
    batteryLevel?: number | undefined;
    circuit?: string | undefined;

    port(): void {
        console.log("Wei Power Bank port is used.");
    }

    charge(): void {
        this.batteryLevel = 100;
        console.log("Wei Power Bank is charging.");
    }

    getCapacity(): number {
        return this.batteryLevel || 0;
    }
}



class QuanPowerBank implements PowerBank{
    batteryLevel?: number | undefined;
    circuit?: string | undefined;
    port(): void {
        throw new Error("Method not implemented.");
    }
    charge(): void {
        throw new Error("Method not implemented.");
    }
    getCapacity(): number {
        throw new Error("Method not implemented.");
    }

}















interface Payment{
    pay(): void;
    refund(): void;
}


class KBZPay implements Payment{
    pay(): void {
        throw new Error("Method not implemented.");
    }
    refund(): void {
        throw new Error("Method not implemented.");
    }
}


class CBPay implements Payment{
    pay(): void {
        throw new Error("Method not implemented.");
    }
    refund(): void {
        throw new Error("Method not implemented.");
    }
}

var paymentMethod: Payment = new KBZPay();
paymentMethod.pay();










interface PrinterDriver{
    print(): void;
    scan(): void;
}

class EpsonPrinter implements PrinterDriver{
    print(): void {
        console.log("Epson printer is printing.");
    }
    scan(): void {
        console.log("Epson printer is scanning.");
    }
}

class CanonPrinter implements PrinterDriver{
    print(): void {
        console.log("Canon printer is printing.");
    }
    scan(): void {
        console.log("Canon printer is scanning.");
    }
}


var printer = new CanonPrinter();
printer.print();
printer.scan();










