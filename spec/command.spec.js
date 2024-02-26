const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

});

describe('Command class', function() {
  describe('constructor', function() {
    it('sets command type', function() {
      const expectedType = 'testCommand';
      const command = new Command(expectedType);

      expect(command.commandType).toBe(expectedType);
    });

    it('throws error for missing command type', function() {
      try {
        new Command();
      } catch (error) {
        expect(error.message).toBe('Command type required.');
      }
    });
  });
});

describe('Command class', function() {
  describe('constructor', function() {
    it('sets value', function() {
      const expectedValue = 'some random value';
      const command = new Command('testCommand', expectedValue);

      expect(command.value).toBe(expectedValue);
    });
  });
});