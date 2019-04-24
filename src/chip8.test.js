import { Chip8 } from './chip8';

describe('Chip8', () => {
    test('it is created with default memory state', () => {
        const chip8 = new Chip8();
        const mockChip8 = createMockChip8();

        const equals = isChip8Equal(chip8, mockChip8);
        expect(equals).toBe(true);
    });

    test('it can be reseted back to the default state', () => {
        const chip8 = new Chip8();
        const before = chip8Snapshot(chip8);

        chip8.memory[4000] = 2;
        chip8.V[2] = 3;
        chip8.I = 532;
        chip8.DT = 22;
        chip8.ST = 1111;
        chip8.PC = 0x12;
        chip8.SP = 42;
        chip8.stack[1] = 22;
        chip8.display[4] = 2;

        chip8.reset();

        const equals = isChip8Equal(before, chip8);
        expect(equals).toBe(true);
    });

    describe('Custom constructor options', () => {
        test('it can have a custom memory size', () => {
            const chip8 = new Chip8({memSize: 2});
            const mockChip8 = createMockChip8({memory: new Uint8Array(2)});
    
            const equals = isChip8Equal(chip8, mockChip8);
            expect(equals).toBe(true);
        });

        test('it can start on a custom PC value', () => {
            const chip8 = new Chip8({pcStart: 0x300});
            const mockChip8 = createMockChip8({PC: 0x300});
    
            const equals = isChip8Equal(chip8, mockChip8);
            expect(equals).toBe(true);
        });

        test('it can have a custom stack size', () => {
            const chip8 = new Chip8({stackSize: 50});
            const mockChip8 = createMockChip8({stack: new Uint16Array(50)});
    
            const equals = isChip8Equal(chip8, mockChip8);
            expect(equals).toBe(true);
        });

        test('it can have a custom display size', () => {
            const chip8 = new Chip8({displaySize: 99});
            const mockChip8 = createMockChip8({display: new Uint8Array(99)});
    
            const equals = isChip8Equal(chip8, mockChip8);
            expect(equals).toBe(true);
        });
    });

    describe('Instructions', () => {
        test('it should throw error on invalid opCode', () => {
            const chip8 = new Chip8();

            expect(chip8.cycle).toThrow();
        });

        test('opcode 0x00E0 should clear the screen', () => {
            const chip8 = new Chip8();
            loadOpCode(chip8, 0x200, 0x00E0);
            const snapshot = chip8Snapshot(chip8);

            snapshot.PC +=2;

            chip8.display[1] = 2;
            chip8.display[5] = 3;
            chip8.display[50] = 4;

            chip8.cycle();

            const equals = isChip8Equal(chip8, snapshot);
            expect(equals).toBe(true);
        });

        test('opcode 0x00EE should return from subroutine', () => {
            const chip8 = new Chip8();
            loadOpCode(chip8, 0x200, 0x2EEE);
            loadOpCode(chip8, 0xEEE, 0x00EE);
            chip8.cycle();
            const snapshot = chip8Snapshot(chip8);

            snapshot.SP -= 1;
            snapshot.PC = snapshot.stack[snapshot.SP];

            chip8.cycle();

            const equals = isChip8Equal(chip8, snapshot);
            expect(equals).toBe(true);
        });

        test('opcode 0x1nnn should set PC to nnn', () => {
            const chip8 = new Chip8();
            loadOpCode(chip8, 0x200, 0x1EEE);
            const snapshot = chip8Snapshot(chip8);

            snapshot.PC = 0xEEE;

            chip8.cycle();

            const equals = isChip8Equal(chip8, snapshot);
            expect(equals).toBe(true);
        });

        test('opcode 0x2nnn should call subroutine at nnn', () => {
            const chip8 = new Chip8();
            loadOpCode(chip8, 0x200, 0x2EEE);
            const snapshot = chip8Snapshot(chip8);

            snapshot.stack[snapshot.SP] = snapshot.PC + 2;
            snapshot.SP += 1;
            snapshot.PC = 0xEEE;

            chip8.cycle();

            const equals = isChip8Equal(chip8, snapshot);
            expect(equals).toBe(true);
        });
    });
});
