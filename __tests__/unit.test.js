// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('invalid phone number 1', () => {
  expect(isPhoneNumber('hello')).toBe(false);
});

test('invalid phone number 2', () => {
  expect(isPhoneNumber()).toBe(false);
});

test('valid phone number 1', () => {
  expect(isPhoneNumber('(111) 111-1111')).toBe(true);
});

test('valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid email 1', () => {
  expect(isEmail('not_an_email')).toBe(false);
});

test('invalid email 2', () => {
  expect(isEmail('definitelynot@email')).toBe(false);
});

test('valid email 1', () => {
  expect(isEmail('email@domain.com')).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail('interesting@bigol.gov')).toBe(true);
});

test('invalid password 1', () => {
  expect(isStrongPassword('1badpassword')).toBe(false);
});

test('invalid password 2', () => {
  expect(isStrongPassword('no good!')).toBe(false);
});

test('valid password 1', () => {
  expect(isStrongPassword('password1')).toBe(true);
});

test('valid password 2', () => {
  expect(isStrongPassword('pa55word1')).toBe(true);
});

test('invalid date 1', () => {
  expect(isDate('10-10-1001')).toBe(false);
});

test('invalid date 2', () => {
  expect(isDate('10/10/21')).toBe(false);
});

test('valid date 1', () => {
  expect(isDate('02/11/2024')).toBe(true);
});

test('valid date 2', () => {
  expect(isDate('2/4/2025')).toBe(true);
});

test('invalid color 1', () => {
  expect(isHexColor('#5555')).toBe(false);
});

test('invalid color 2', () => {
  expect(isHexColor('#5555555')).toBe(false);
});

test('valid color 1', () => {
  expect(isHexColor('#f0f0f0')).toBe(true);
});

test('valid color 2', () => {
  expect(isHexColor('#B5B')).toBe(true);
});
