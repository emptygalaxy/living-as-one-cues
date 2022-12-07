import {Cues} from './Cues';
import {expect} from 'chai';

describe('Cues', () => {
  const cues = new Cues();

  describe('wasCreatedBefore', () => {
    it('should remember cues', () => {
      const name = 'test';
      expect(cues.wasCreatedBefore(name)).to.be.false;
      cues.addToHistory(name);
      expect(cues.wasCreatedBefore(name)).to.be.true;
    });
  });
});
