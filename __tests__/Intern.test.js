const Intern = require('../lib/Intern');

test(`Instantiates a new Intern with arguments`, () => {
    const intern = new Intern('Devon', '23', 'skillz1029@gmail.com', 'School of Devon');

    expect(intern.name).toBe('Devon');
    expect(intern.id).toBe('23');
    expect(intern.email).toBe('skillz1029@gmail.com');
    expect(intern.school).toBe('School of Devon');
});

test(`Getters for inherited methods return the proper values`, () => {
    const intern = new Intern('Devon', '23', 'skillz1029@gmail.com', 'School of Devon');

    expect(intern.getName()).toBe('Devon');
    expect(intern.getId()).toBe('23');
    expect(intern.getEmail()).toBe('skillz1029@gmail.com');
});

test(`getSchool() returns a string`, () => {
    const intern = new Intern('Devon', '23', 'skillz1029@gmail.com', 'School of Devon');

    expect(intern.getCard()).toEqual(expect.any(String));
});


test(`getRole() returns 'Intern'`, () => {
    const intern = new Intern('Devon', '23', 'skillz1029@gmail.com', 'School of Devon');

    expect(intern.getRole()).toBe('Intern');
});

test(`getCard() returns a string`, () => {
    const intern = new Intern('Devon', '23', 'skillz1029@gmail.com', 'School of Devon');

    expect(intern.getCard()).toEqual(expect.any(String));
});