import BigNumber from 'bignumber.js';

export var distances: BigNumber[][] = [
    [
        new BigNumber(0),
        new BigNumber(1000),
        new BigNumber(5000),
        new BigNumber(10000),
    ],
    [
        new BigNumber(1000),
        new BigNumber(0),
        new BigNumber(20000),
        new BigNumber(40000),
    ],
    [
        new BigNumber(5000),
        new BigNumber(20000),
        new BigNumber(0),
        new BigNumber(100000),
    ],
    [
        new BigNumber(10000),
        new BigNumber(100000),
        new BigNumber(40000),
        new BigNumber(0),
    ],
];