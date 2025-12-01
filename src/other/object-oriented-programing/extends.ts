/**
 * Extends in Object-Oriented Programming
 *
 * Kế thừa:
 *
 * - Cho phép một lớp con (subclass) kế thừa thuộc tính và phương thức từ một lớp cha (superclass).
 *
 * - Giúp tái sử dụng mã nguồn và giảm thiểu sự trùng lặp.
 *
 * - Lớp con có thể mở rộng hoặc ghi đè (override) các phương thức của lớp cha để tùy chỉnh hành vi.
 *
 * - Hỗ trợ tính đa hình (polymorphism) khi kết hợp với kế thừa.
 *
 */

class Human {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

class MyUser extends Human {
  email: string;

  constructor(name: string, email: string) {
    super(name); // Gọi constructor của lớp cha
    this.email = email;
  }

  // Ghi đè phương thức eat
  eat(): void {
    console.log(`${this.name} with email ${this.email} is eating.`);
  }

  login(): void {
    console.log(`${this.name} has logged in with email ${this.email}.`);
  }
}
