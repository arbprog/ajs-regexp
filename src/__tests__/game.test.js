import Validator from '../game';

test.each(['1Bob', '-Bob', '_Bob'])(
  'Имя не должно начинаться цифрами, символами подчёркивания или тире',
  (userName) => {
    const validator = new Validator(userName);

    const textErr = 'Имя не должно начинаться цифрами, символами подчёркивания или тире';
    expect(() => validator.validateUsername()).toThrowError(new Error(textErr));
  },
);

test.each(['Bob1', 'Bob-', 'Bob_'])(
  'Имя не должно заканчиваться цифрами, символами подчёркивания или тире',
  (userName) => {
    const validator = new Validator(userName);

    const textErr = 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире';
    expect(() => validator.validateUsername()).toThrowError(new Error(textErr));
  },
);

test('Имя не должно содержать подряд более трёх цифр', () => {
  const validator = new Validator('Jo1234hn');

  const textErr = 'Имя не должно содержать подряд более трёх цифр';
  expect(() => validator.validateUsername()).toThrowError(new Error(textErr));
});

test('Проверка имени персонажа', () => {
  const validator = new Validator('Bob');

  expect(validator.validateUsername()).toBe('Bob');
});
