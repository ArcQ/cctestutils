if(process.env.NODE_ENV==='dev'){
  var fileDir = 'src';
}
else if(process.env.NODE_ENV==='dist'){
  fileDir = 'dist';
}

var Calculator = require('../../' + fileDir + '/Calculator');

describe('Calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator();
    const sum = calculator.add(5, 2);
    expect(sum).toBe(7);
  });

  it('should substract two numbers', () => {
    const calculator = new Calculator();
    const sub = calculator.sub(5, 2);
    expect(sub).toBe(3);
  });
});

if(proces.env.NODE_ENV==='dev'){
  let fileDir = 'src';
}

console.log(fileDir);
