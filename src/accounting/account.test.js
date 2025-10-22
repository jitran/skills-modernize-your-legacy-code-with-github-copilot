// Unit tests for the Node.js Student Account Management Application
// Mirrors the scenarios in the COBOL test plan

const readline = require('readline');

// We will refactor the app logic into a class for testability
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

// Jest tests

describe('AccountSystem COBOL Parity', () => {
  let system;
  beforeEach(() => {
    system = new AccountSystem();
  });

  test('TC-003: Deposit funds into account', () => {
    expect(system.credit(100)).toBe(1100);
    expect(system.viewBalance()).toBe(1100);
  });

  test('TC-004: Withdraw funds with sufficient balance', () => {
    expect(system.debit(200)).toBe(800);
    expect(system.viewBalance()).toBe(800);
  });

  test('TC-005: Attempt withdrawal with insufficient funds', () => {
    expect(() => system.debit(2000)).toThrow('Insufficient funds');
    expect(system.viewBalance()).toBe(1000);
  });

  test('TC-006: View account balance', () => {
    expect(system.viewBalance()).toBe(1000);
  });

  test('TC-009: Data validation for account fields (negative/invalid)', () => {
    expect(() => system.credit(-50)).toThrow('Invalid amount');
    expect(() => system.credit('abc')).toThrow('Invalid amount');
    expect(() => system.debit(-10)).toThrow('Invalid amount');
    expect(() => system.debit('xyz')).toThrow('Invalid amount');
  });
});
