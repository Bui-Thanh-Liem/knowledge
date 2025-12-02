/**
 * Abstraction in Object-Oriented Programming
 *
 * Tính trừu tượng:
 *
 * - Chỉ cho người dùng thấy những gì cần thiết, giấu chi tiết phức tạp.
 *
 * - Giúp giảm độ phức tạp và tăng tính dễ sử dụng.
 *
 * - Tập trung vào hành vi và chức năng thay vì cách thức thực hiện.
 *
 * - Tái sử dụng mã nguồn và dễ bảo trì.
 *
 * - Thường dùng abstract class hoặc interface.
 *
 */

abstract class Animal {
  // Phương thức trừu tượng, không có phần thân
  abstract makeSound(): void;

  // Phương thức cụ thể
  move(): void {
    console.log("The animal moves.");
  }
}

class Dog extends Animal {
  // Cài đặt phương thức trừu tượng
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  // Cài đặt phương thức trừu tượng
  makeSound(): void {
    console.log("Meow! Meow!");
  }
}

// Sử dụng các lớp con
const myDog: Animal = new Dog();
myDog.makeSound(); // Output: Woof! Woof!
myDog.move(); // Output: The animal moves.

const myCat: Animal = new Cat();
myCat.makeSound(); // Output: Meow! Meow!
myCat.move(); // Output: The animal moves.
