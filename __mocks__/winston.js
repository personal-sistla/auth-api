const logger = {
  info: jest.fn(),
  debug: jest.fn(),
  error: jest.fn(),
  log: jest.fn(),
};

const winston = {
  format: {
    json: jest.fn(),
    label: jest.fn(),
    timestamp: jest.fn(),
    combine: jest.fn(),
    printf: jest.fn(),
  },
  transports: {
    Console: jest.fn(),
    File: jest.fn(),
  },
  createLogger: jest.fn().mockImplementation((c) => {
    console.log('creating logger with conf', JSON.stringify(c));
    return logger;
  }),
};

module.exports = winston;
