const Employee = require('../src/employees/employee');
 
 describe('Employee Test', () => {
   it("should create an employee with user data", () => {
      const employee = new Employee(1, 'email@email.com', 'Dan');

      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual('email@email.com');
      expect(employee.name).toEqual('Dan');
   });
 });