// Node.js Student Account Management Application (COBOL parity)
// This version matches the original COBOL app: single account, 4 menu options.

class AccountSystem {
  constructor() {
    this.balance = 1000.00;
  }
  viewBalance() {
    return this.balance;
  }
  credit(amount) {
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
      throw new Error('Invalid amount');
    }
    this.balance += amount;
    return this.balance;
  }
  debit(amount) {
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
      throw new Error('Invalid amount');
    }
    if (this.balance < amount) {
      throw new Error('Insufficient funds');
    }
    this.balance -= amount;
    return this.balance;
  }
}

if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const system = new AccountSystem();

  function mainMenu() {
    console.log('\nAccount Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    rl.question('Enter your choice (1-4): ', handleMenu);
  }

  function handleMenu(option) {
    switch(option.trim()) {
      case '1':
        console.log(`Current balance: ${system.viewBalance().toFixed(2)}`);
        mainMenu();
        break;
      case '2':
        rl.question('Enter credit amount: ', amt => {
          const amount = parseFloat(amt);
          try {
            system.credit(amount);
            console.log(`Amount credited. New balance: ${system.viewBalance().toFixed(2)}`);
          } catch (e) {
            console.log(e.message);
          }
          mainMenu();
        });
        break;
      case '3':
        rl.question('Enter debit amount: ', amt => {
          const amount = parseFloat(amt);
          try {
            system.debit(amount);
            console.log(`Amount debited. New balance: ${system.viewBalance().toFixed(2)}`);
          } catch (e) {
            console.log(e.message);
          }
          mainMenu();
        });
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Invalid choice, please select 1-4.');
        mainMenu();
    }
  }

  mainMenu();

  rl.on('close', () => {
    console.log('Exiting the program. Goodbye!');
    process.exit(0);
  });
}

module.exports = AccountSystem;
