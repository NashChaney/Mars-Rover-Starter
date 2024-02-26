const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    it("throws error if message type is NOT passed into constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error('Message type required.'));
      });
    
});

describe('Message class', function() {
  describe('constructor', function() {
    it('sets name', function() {
      const expectedName = 'Message';
      const message = new Message(expectedName);

      expect(message.name).toBe(expectedName);
    });

    it('throws error for missing name', function() {
      try {
        new Message();
      } catch (error) {
        expect(error.message).toBe('Message type required.');
      }
    });
  });
});

describe('Message class', function() {
    describe('constructor', function() {
      // ... other tests
  
      it('contains a commands array passed into the constructor as the 2nd argument', function() {
        const expectedCommands = [
          { commandType: 'testCommand1', value: 'someValue1' },
          { commandType: 'testCommand2', value: 'someValue2' }
        ];
        const message = new Message('Test Message', expectedCommands);
  
        expect(message.commands).toBe(expectedCommands);
      });
    });
  });