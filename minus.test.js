const minus = require('./minus');

// 2 - 1 เท่ากับ 1 
test('2 -1 เท่ากับ 1',()=>{
    expect(minus(2,1)).toBe(1);
});

// 5 - 3.5 เท่ากับ 1.5
test('5 - 3.5 เท่ากับ 1.5', ()=>{
    expect(minus(5,3.5)).toBe(1.5);
});

// -1 - 2 เท่ากับ 1
test('1 - 2 เท่ากับ 1', ()=>{
    expect(minus(-1,-2)).toBe(1)
})

// 500000 - 300000 เท่ากับ 200000
test('50000 - 30000 เท่ากับ 200000', ()=>{
    expect(minus(500000,300000)).toBe(200000)
})

// 12 - 20.5 เท่ากับ -8.5 
test('12 - 20.5 เท่ากับ -8.5',()=>{
    expect(minus(12,20.5)).toBe(-8.5)
})

