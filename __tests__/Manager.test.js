const Manager = require('../lib/Manager');

test(`Instantiates a new Manager with arguments`, () => {
    const manager = new Manager('Devon', '26', 'skillz1029@gmail.com', 212);

    expect(manager.name).toBe('Devon');
    expect(manager.id).toBe('26');
    expect(manager.email).toBe('skillz1029@gmail.com');
    expect(manager.officeNumber).toBe(212);
});

test(`Getters for inherited methods return the proper values`, () => {
    const manager = new Manager('Devon', '26', 'skillz1029@gmail.com', 212);

    expect(manager.getName()).toBe('Devon');
    expect(manager.getId()).toBe('26');
    expect(manager.getEmail()).toBe('skillz1029@gmail.com');
});

test(`getOfficeNumber() returns a number`, () => {
    const manager = new Manager('Devon', '26', 'skillz1029@gmail.com', 212);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});


test(`getRole() returns 'Manager'`, () => {
    const manager = new Manager('Devon', '26', 'skillz1029@gmail.com', 212);

    expect(manager.getRole()).toBe('Manager'); ''

});

test(`getCard() returns a string`, () => {
    const manager = new Manager('Devon', '26', 'skillz1029@gmail.com', 'School of Devon');

    expect(manager.getCard()).toEqual(expect.any(String));
});