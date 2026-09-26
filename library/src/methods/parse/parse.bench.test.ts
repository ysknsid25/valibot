import { describe, test } from 'vitest';
import { transform } from '../../actions/index.ts';
import { object, string } from '../../schemas/index.ts';
import { pipe } from '../pipe/index.ts';
import { parse } from './parse.ts';

describe('parse', () => {
  const entries = {
    key: pipe(
      string(),
      transform((input) => input.length)
    ),
  };

  test('parsing performance [foo]', async ({ bench }) => {
    await bench('parse', { writeResult: './benchmarks/foo.parse.json' }, () => {
      parse(object(entries), { key: 'foo' });
    }).run();
  });
});
