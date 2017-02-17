/**
*
* @licstart  The following is the entire license notice for the JavaScript code in this file.
*
* Tiny duck typing module for Javascript
*
* Copyright (C) 2017 University Of Helsinki (The National Library Of Finland)
*
* This file is part of little-quacker
*
* little-quacker program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* little-quacker is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
* @licend  The above is the entire license notice
* for the JavaScript code in this file.
*
*/

/* eslint-disable no-undef, max-nested-callbacks, no-unused-expressions */

'use strict';

import {expect} from 'chai';
import quacksLike from '../source/index';

describe('index', () => {
	it('Should return true because neither object has function properties', () => {
		expect(quacksLike({}, {})).to.be.true;
	});
	it('Should return true because the duck doesn\'t have function properties', () => {
		expect(quacksLike({
			foo: () => {}
		}, {})).to.be.true;
	});
	it('Should return true because \'it\' has all of the duck\'s function properties', () => {
		expect(quacksLike({
			foo: () => {}
		}, {
			foo: () => {}
		})).to.be.true;
	});
	it('Should return false because \'it\' doesn\'t have function properties', () => {
		expect(quacksLike({}, {
			foo: () => {}
		})).to.be.false;
	});
	it('Should return false because \'it\' doesn\'t have all of the duck\'s function properties', () => {
		expect(quacksLike({
			foo: () => {},
			bar: 'foo'
		}, {
			foo: () => {},
			bar: () => {}
		})).to.be.false;
	});
});
