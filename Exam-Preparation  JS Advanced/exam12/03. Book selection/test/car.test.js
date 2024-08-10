describe('bookSelection', () => {
    describe('isGenreSuitable', () => {
      it('should return not suitable message for Thriller genre and age <= 12', () => {
        assert.strictEqual(bookSelection.isGenreSuitable('Thriller', 10), 'Books with Thriller genre are not suitable for kids at 10 age');
      });
  
      it('should return not suitable message for Horror genre and age <= 12', () => {
        assert.strictEqual(bookSelection.isGenreSuitable('Horror', 12), 'Books with Horror genre are not suitable for kids at 12 age');
      });
  
      it('should return suitable message for other genres or age > 12', () => {
        assert.strictEqual(bookSelection.isGenreSuitable('Comedy', 10), 'Those books are suitable');
        assert.strictEqual(bookSelection.isGenreSuitable('Horror', 13), 'Those books are suitable');
      });
    });
  
    describe('isItAffordable', () => {
      it('should throw an error if price or budget is not a number', () => {
        assert.throws(() => bookSelection.isItAffordable('10', 20), /Invalid input/);
        assert.throws(() => bookSelection.isItAffordable(10, '20'), /Invalid input/);
      });
  
      it('should return not enough money message if budget is less than price', () => {
        assert.strictEqual(bookSelection.isItAffordable(30, 20), "You don't have enough money");
      });
  
      it('should return bought message with remaining money if budget is sufficient', () => {
        assert.strictEqual(bookSelection.isItAffordable(10, 20), 'Book bought. You have 10$ left');
      });
    });
  
    describe('suitableTitles', () => {
      it('should throw an error if array is not an array or wantedGenre is not a string', () => {
        assert.throws(() => bookSelection.suitableTitles('not an array', 'Thriller'), /Invalid input/);
        assert.throws(() => bookSelection.suitableTitles([], 123), /Invalid input/);
        assert.throws(() => bookSelection.suitableTitles(true, ''), /Invalid input/);
        assert.throws(() => bookSelection.suitableTitles('', 12), /Invalid input/);
        assert.throws(() => bookSelection.suitableTitles(21, true), /Invalid input/);
        assert.throws(() => bookSelection.suitableTitles([], []), /Invalid input/);
        assert.throws(() => bookSelection.suitableTitles({}, {}), /Invalid input/);
        assert.throws(() => bookSelection.suitableTitles(12, undefined), /Invalid input/);
        assert.throws(() => bookSelection.suitableTitles(undefined, 12), /Invalid input/);
      });
  
      it('should return an array of titles that match the wanted genre', () => {
        const books = [
          { title: 'Book1', genre: 'Thriller' },
          { title: 'Book2', genre: 'Comedy' },
          { title: 'Book3', genre: 'Thriller' },
        ];
  
        assert.deepStrictEqual(bookSelection.suitableTitles(books, 'Thriller'), ['Book1', 'Book3']);
        assert.deepStrictEqual(bookSelection.suitableTitles(books, 'Comedy'), ['Book2']);
      });
  
      it('should return an empty array if no books match the wanted genre', () => {
        const books = [
          { title: 'Book1', genre: 'Thriller' },
          { title: 'Book2', genre: 'Comedy' },
        ];
  
        assert.deepStrictEqual(bookSelection.suitableTitles(books, 'Horror'), []);
      });
    });
  });