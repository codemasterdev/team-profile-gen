const Employee = require('../lib/Employee');

test(`Instantiates a new Employee object with arguments`, () => {
    const employee = new Employee('Devon', 26, 'skillz1029@gmail.com');

    expect(employee.name).toBe('Devon');
    expect(employee.id).toBe(26);
    expect(employee.email).toBe('skillz1029@gmail.com');
});

test(`getName() returns a string`, () => {
    const employee = new Employee('Devon', 26, 'skillz1029@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test(`getId() returns the id value`, () => {
    const employee = new Employee('Devon', 26, 'skillz1029@gmail.com');

    expect(employee.getId()).toBe(employee.id);
});

test(`getEmail() returns the email value`, () => {
    const employee = new Employee('Devon', 26, 'skillz1029@gmail.com');

    expect(employee.getEmail()).toBe(employee.email);
});

test(`getRole() returns 'Employee'`, () => {
    const employee = new Employee('Devon', 26, 'skillz1029@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});