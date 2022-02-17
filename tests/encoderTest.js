import { test, assert } from './test.js';
import { Instruction } from "../core/Instruction.js";

// R-TYPE
test('decode - add', function () {
    let inst = new Instruction("add x5, x6, x7");
    assert(inst.binary == '00000000011100110000001010110011');
})

// I-TYPE
test('decode - addi', function () {
    let inst = new Instruction("addi x15, x1, -50");
    assert(inst.hex == "0xfce08793");
    assert(inst.binary == "11111100111000001000011110010011");
})

test('decode - lw', function () {
    let inst = new Instruction("lw x10, 12(x8)");
    assert(inst.binary == "00000000110001000010010100000011");
})