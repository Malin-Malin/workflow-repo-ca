import  { describe, it, expect} from 'vitest';
import { isActivePath } from './userinterface.js';

describe('isActivePath', () => {
    it('should return true for active paths', () => {
        expect(isActivePath('/home/user/project/src', '/home/user/project/src/components')).toBe(true);
    });

    it('should return false for inactive paths', () => {
        expect(isActivePath('/home/user/project/tests', '/home/user/project/src')).toBe(false);
    });

    //Returns true when current path matches href exactly
    it('should return true for exact match', () => {
        expect(isActivePath('/about', '/about')).toBe(true);
    }   );

    it('should return false for non-matching paths', () => {
        expect(isActivePath('/about', '/contact')).toBe(false);
    }); 

    //Returns true for root path ("/") when path is "/" or "/index.html"
    it('should return true for root path', () => {
        expect(isActivePath('/', '/')).toBe(true);
        expect(isActivePath('/', '/index.html')).toBe(true);
    });
    it('should return false for root path when not root', () => {
        expect(isActivePath('/about', '/home')).toBe(false);
    });

    //Returns true when current path includes the href
    it('should return true when current path includes href', () => {
        expect(isActivePath('/blog', '/blog/post1')).toBe(true);
    });

    it('should return false when current path does not include href', () => {
        expect(isActivePath('/blog', '/about')).toBe(false);
    }); 

});
