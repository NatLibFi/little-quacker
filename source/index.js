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

/* eslint-disable no-unused-vars */

'use strict';

import 'babel-polyfill'; // eslint-disable-line import/no-unassigned-import

/**
* Check if 'it' quacks like a 'duck'
* @param {object} it - Object to test
* @param {object} duck - Object to test against
* @returns {boolean} -  If it quacks like a duck, walks like a duck then it's a duck
*/
export default function quacksLike(it, duck) {
	return Object.getOwnPropertyNames(duck)
		.filter(name => {
			return typeof duck[name] === 'function';
		})
		.every(name => {
			return Object.hasOwnProperty.call(it, name) && typeof it[name] === 'function';
		});
}
