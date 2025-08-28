const fs = require('fs');
const path = require('path');
const { getByRole } = require('@testing-library/dom');
require('@testing-library/jest-dom');

describe('index.html', () => {
  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.body.innerHTML = html;
  });

  test('renders Practice Center heading', () => {
    expect(
      getByRole(document.body, 'heading', {
        name: 'Practice Center',
        level: 1,
        hidden: true,
      })
    ).toBeInTheDocument();
  });
});
