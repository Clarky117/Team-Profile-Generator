const Intern = require('../src/employees/intern');
 
 describe('intern Test', () => {
   it("should create a Intern with user data", () => {
      const intern = new Intern(1, 'email@email.com', 'Dan', 'Bootcamp');

      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual('email@email.com');
      expect(intern.name).toEqual('Dan');
      expect(intern.school).toEqual('Bootcamp');
   });
 });