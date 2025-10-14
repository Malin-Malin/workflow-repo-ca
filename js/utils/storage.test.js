import { describe, it, expect, beforeEach } from 'vitest';
import { getUsername, saveUser } from './storage';

describe('getUsername', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should return null when no user is stored', () => {
    expect(getUsername()).toBe(null);
  });

  it('should return the correct user name when user is stored', () => {
    const testUser = { name: 'John Doe', email: 'john@example.com' };
    saveUser(testUser);
    expect(getUsername()).toBe('John Doe');
  });
});
