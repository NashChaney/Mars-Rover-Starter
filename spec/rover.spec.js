const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

  describe('Rover class', function() {
      it('sets position and default values for mode and generatorWatts', function() {
        const rover = new Rover(Number);
        expect(rover.position).toBe(Number);
        expect(rover.mode).toBe('NORMAL');
        expect(rover.generatorWatts).toBe(110);
      });
    });
    describe('recieveMessage', function() {
      it('returns a response containing the message name', function() {
        const rover = new Rover();
        const messageName = 'Test Message';
        const commands = [new Command('MOVE', 10)];
        const message = new Message(messageName, commands);
  
        const response = rover.recieveMessage(message);
  
        expect(response.message).toBe(messageName);
      });
    });
     describe('recieveMessage', function() {
        it('returns a response with two results for two commands', function() {
          const rover = new Rover();
          const messageName = 'Test Message';
          const commands = [
            new Command('STATUS_CHECK'),
            new Command('MOVE', 10),
          ];
          const message = new Message(messageName, commands);
    
          const response = rover.recieveMessage(message);
    
          expect(response.results.length).toBe(2);
        });
      });  
     describe('recieveMessage', function() {
        it('responds correctly to the STATUS_CHECK command', function() {
          const rover = new Rover(100, 'LOW_POWER', 200);
          const messageName = 'Status Check';
          const command = new Command('STATUS_CHECK');
          const message = new Message(messageName, [command]);
    
          const response = rover.recieveMessage(message);
          const expectedStatus = {
            mode: rover.mode,
            generatorWatts: rover.generatorWatts,
            position: rover.position,
          };
    
          expect(response.results[0].completed).toBe(true);
          expect(response.results[0].roverStatus).toEqual(expectedStatus);
        });
      });
      describe('recieveMessage', function() {
        it('responds correctly to the MODE_CHANGE command', function() {
          const rover = new Rover(100, 'NORMAL');
          const lowPowerCommand = new Command('MODE_CHANGE', 'LOW_POWER');
          const lowPowerMessage = new Message('Mode Change', [lowPowerCommand]);
          const lowPowerResponse = rover.recieveMessage(lowPowerMessage);

          expect(lowPowerResponse.results[0].completed).toBe(true);
          expect(rover.mode).toBe('LOW_POWER');

          const normalCommand = new Command('MODE_CHANGE', 'NORMAL');
          const normalMessage = new Message('Mode Change', [normalCommand]);
          const normalResponse = rover.recieveMessage(normalMessage);
    
          expect(normalResponse.results[0].completed).toBe(true);
          expect(rover.mode).toBe('NORMAL');
        });
      });
      describe('recieveMessage', function() {
        it('responds with a false completed value when attempting to move in LOW_POWER mode', function() {
          const initialPosition = 100;
          const rover = new Rover(initialPosition, 'LOW_POWER');
    
          const moveCommand = new Command('MOVE', 20);
          const message = new Message('Move', [moveCommand]);
          const response = rover.recieveMessage(message);
    
          expect(response.results[0].completed).toBe(false);
          expect(rover.position).toBe(initialPosition);
        });
      });
      describe('recieveMessage', function() {
        it('responds with the position for the MOVE command', function() {
          const initialPosition = 100;
          const rover = new Rover(initialPosition, 'NORMAL');
    
          const newPosition = 200;
          const moveCommand = new Command('MOVE', newPosition);
          const message = new Message('Move', [moveCommand]);
          const response = rover.recieveMessage(message);
    
          expect(response.results[0].completed).toBe(true);
          expect(rover.position).toBe(newPosition);
        });
      });