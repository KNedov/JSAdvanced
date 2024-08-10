import { workforceManagement } from "../workforceManagement.js";
import { expect } from "chai";


describe('workforceManagement', () => {
  describe('recruitStaff', () => {
    it('should recruit a suitable Developer', () => {
      const result = workforceManagement.recruitStaff('Alice', 'Developer', 4);
      expect(result).to.equal('Alice has been successfully recruited for the role of Developer.');
    });

    it('should not recruit an unsuitable Developer', () => {
      const result = workforceManagement.recruitStaff('Bob', 'Developer', 3);
      expect(result).to.equal('Bob is not suitable for this role.');
    });

    it('should throw an error for non-Developer roles', () => {
      expect(() => workforceManagement.recruitStaff('Charlie', 'Designer', 5)).to.throw('We are not currently hiring for this role.');
    });
  });

  describe('computeWages', () => {
    it('should compute wages correctly for valid hours', () => {
      const result = workforceManagement.computeWages(160);
      expect(result).to.equal(2880);
    });

    it('should add bonus for hours over 160', () => {
      const result = workforceManagement.computeWages(170);
      expect(result).to.equal(4560);
    });

    it('should throw an error for invalid hours', () => {
      expect(() => workforceManagement.computeWages('a')).to.throw('Invalid hours');
      expect(() => workforceManagement.computeWages(-10)).to.throw('Invalid hours');
    });
  });

  describe('dismissEmployee', () => {
    const workforce = ['Alice', 'Bob', 'Charlie'];

    it('should dismiss the correct employee', () => {
      const result = workforceManagement.dismissEmployee(workforce, 1);
      expect(result).to.equal('Alice, Charlie');
    });

    

    it('should throw an error for invalid input', () => {
      expect(() => workforceManagement.dismissEmployee('not an array', 1)).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee(workforce, -1)).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee(workforce, 3)).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee(workforce, '3')).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee([], 3)).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee({}, 2)).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee('', 2)).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee(undefined, 2)).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee(2, 2)).to.throw('Invalid input');
      expect(() => workforceManagement.dismissEmployee(NaN, 2)).to.throw('Invalid input');
    });
  });
});