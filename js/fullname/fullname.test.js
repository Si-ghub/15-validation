const fullname = require('./fullname');

test('correct fullname', () => {
    expect(fullname('Vardenis', 'Pavardenis')).toBe('Vardenis Pavardenis');
});

test('error with numbers in first name', () => {
    expect(fullname('Vardenis2', 'Pavardenis')).toBe(false);
});

test('error without firstname', () => {
    expect(fullname('', 'Pavardenis')).toBe(false);
});

test('error without lastname', () => {
    expect(fullname('Vardenis', '')).toBe(false);
});

test('error with firstname and spaces around', () => {
    expect(fullname('', 'Pavardenis')).toBe(false);
});

test('error with firstname and spaces around', () => {
    expect(fullname(' Vardenis ', '')).toBe(false);
});

test('fix firstname and spaces around', () => {
    expect(fullname(' Vardenis ', '')).toBe('Vardenis Pavardenis');
    expect(fullname(' Vardenis    ', '')).toBe('Vardenis Pavardenis');
    expect(fullname('Vardenis ', '')).toBe('Vardenis Pavardenis');
    expect(fullname(' Vardenis ', '')).toBe('Vardenis Pavardenis');
});

test('fix lastname and spaces around', () => {
    expect(fullname('', 'Pavardenis ')).toBe('Vardenis Pavardenis');
    expect(fullname('', ' Pavardenis')).toBe('Vardenis Pavardenis');
    expect(fullname('', '  Pavardenis  ')).toBe('Vardenis Pavardenis');
    expect(fullname('', '  Pavardenis ')).toBe('Vardenis Pavardenis');
});


