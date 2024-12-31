interface HasFormatter {
   format(): string;
}

interface Bill extends HasFormatter {
   id: string | number;
   amount: number;
   server: string;
}

const user = {
   id: 1,
   format(): string {
      return `This user has id of ${this.id}`;
   },
};

const bill = {
   id: 2,
   amount: 50,
   server: 'mario',
   format(): string {
      return `Bill with id ${this.id} has Rs.${this.amount} to pay`;
   },
};

function printFormatted(value: HasFormatter): void {
   console.log(value.format());
}

function printBill(value: Bill) {
   console.log(`Server: ${value.server}`);
   console.log(value.format());
}

printFormatted(user);
printFormatted(bill);

// printBill(user); gives error
printBill(bill);
