const Manager = require('../src/employees/manager');
 
 describe('Manager Test', () => {
   it("should create a Manager with user data", () => {
      const manager = new Manager(1, 'email@email.com', 'Dan', '0400111222');

      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual('email@email.com');
      expect(manager.name).toEqual('Dan');
      expect(manager.officeNumber).toEqual('0400111222');
   });
 });