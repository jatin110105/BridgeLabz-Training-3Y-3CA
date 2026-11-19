// Q7. Banking Application (private fields)
class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit amount must be positive.");
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Withdrawal amount must be positive.");
    if (amount > this.#balance) throw new Error("Insufficient balance.");
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(1000);

// Valid deposits
console.log("After deposit 500:", acc.deposit(500));
console.log("After deposit 250:", acc.deposit(250));

// Valid withdrawal
console.log("After withdraw 300:", acc.withdraw(300));

// Invalid withdrawal
try {
  acc.withdraw(5000);
} catch (err) {
  console.log("Error:", err.message);
}

// Invalid deposit
try {
  acc.deposit(-100);
} catch (err) {
  console.log("Error:", err.message);
}

console.log("Final balance:", acc.getBalance());
console.log("Direct access to #balance:", acc.balance); // undefined - truly private
