/**
 * Polymorphism in Object-Oriented Programming
 *
 * Tính đa hình:
 *
 * - Khả năng của các đối tượng thuộc các lớp khác nhau có thể được xử lý thông qua cùng một giao diện chung.
 *
 * - Giúp tăng tính linh hoạt và khả năng mở rộng của mã nguồn.
 *
 * - Thường được thực hiện thông qua kế thừa và ghi đè phương thức (method overriding).
 *
 * - Cho phép sử dụng cùng một phương thức trên các đối tượng khác nhau mà không cần biết chi tiết cụ thể của chúng.
 *
 */

class Shape {
  // Phương thức tính diện tích (sẽ được ghi đè trong các lớp con)
  area(): number {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Ghi đè phương thức area để tính diện tích hình tròn
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  // Ghi đè phương thức area để tính diện tích hình chữ nhật
  area(): number {
    return this.width * this.height;
  }
}
