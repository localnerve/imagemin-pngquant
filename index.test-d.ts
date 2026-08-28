import * as fs from 'node:fs';
import * as path from 'node:path';
import {expectType} from 'tsd';
import pngquant from './index.js';

const buffer = fs.readFileSync(path.join(import.meta.dirname, 'fixture.png'));

async function test() {
	expectType<Buffer>(await pngquant()(buffer));
	expectType<Buffer>(await pngquant({
		speed: 10,
		quality: [0.8, 1],
	})(buffer));
}

await test();
