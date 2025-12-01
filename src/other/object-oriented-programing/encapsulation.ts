/**
 * Encapsulation in Object-Oriented Programming
 *
 * Tính đóng gói:
 *
 * - Dữ liệu (thuộc tính) và hành vi (phương thức) được gói gọn trong một class.
 *
 * - Dùng private/protected để giấu thông tin không cho bên ngoài chạm trực tiếp.
 *
 * - Cung cấp các phương thức công khai (public) để truy cập và thao tác với dữ liệu.
 *
 * - Giúp bảo vệ tính toàn vẹn của dữ liệu và giảm thiểu sự phụ thuộc giữa các thành phần.
 */

class BankAccount {
  // Thuộc tính private để giấu thông tin số dư
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Phương thức public để nạp tiền vào tài khoản
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Phương thức public để rút tiền từ tài khoản
  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Insufficient funds or invalid amount.");
    }
  }

  // Phương thức public để kiểm tra số dư tài khoản
  public getBalance(): number {
    return this.balance;
  }
}

// Sử dụng lớp BankAccount
const myAccount = new BankAccount(1_000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(`Current Balance: $${myAccount.getBalance()}`);

// Thử truy cập trực tiếp vào thuộc tính private (sẽ lỗi)
// console.log(myAccount.balance); // Lỗi: Property 'balance' is private and only accessible within class 'BankAccount'.
