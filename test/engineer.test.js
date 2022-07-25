const Engineer = require('../src/employees/engineer');
 
 describe('Engineer Test', () => {
   it("should create a Engineer with user data", () => {
      const engineer = new Engineer(1, 'email@email.com', 'Dan', 'Clarky117');

      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual('email@email.com');
      expect(engineer.name).toEqual('Dan');
      expect(engineer.github).toEqual('Clarky117');
   });
 });