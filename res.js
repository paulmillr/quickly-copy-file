import {statSync, readFileSync} from 'fs';
import test from 'ava';
import copyFile from './';

test('Basic copying', async t => {
  await copyFile('test.js', 'res.js')
  t.ok(statSync('res.js'));
  t.same(readFileSync('test.js'), readFileSync('res.js'));
});
