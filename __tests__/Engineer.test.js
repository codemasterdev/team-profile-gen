const Engineer = require('../lib/Engineer');

test(`Instantiates a new Engineer with arguments`, () => {
    const engineer = new Engineer('Devon', 26, 'skillz1029@gmail.com', 'codemasterdev');

    expect(engineer.name).toBe('Devon');
    expect(engineer.id).toBe(26);
    expect(engineer.email).toBe('skillz1029@gmail.com');
    expect(engineer.github).toBe('codemasterdev');
});

test(`Getters for inherited methods return the proper values`, () => {
    const engineer = new Engineer('Devon', 26, 'skillz1029@gmail.com', 'codemasterdev');

    expect(engineer.getName()).toBe('Devon');
    expect(engineer.getId()).toBe(26);
    expect(engineer.getEmail()).toBe('skillz1029@gmail.com');
});

test(`getGithub() returns a string`, () => {
    const engineer = new Engineer('Devon', 26, 'skillz1029@gmail.com', 'codemasterdev');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});


test(`getRole() returns 'Engineer'`, () => {
    const engineer = new Engineer('Devon', 26, 'skillz1029@gmail.com', 'codemasterdev');

    expect(engineer.getRole()).toBe('Engineer');
});

test(`getCard() returns a string`, () => {
    const engineer = new Engineer('Devon', 26, 'skillz1029@gmail.com', 'codemasterdev');

    expect(engineer.getCard()).toEqual(expect.any(String));
});
