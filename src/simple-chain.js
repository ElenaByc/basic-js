const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
	chainArray: [],

	getLength() {
		return this.chainArray.length;
	},
	addLink(value) {
		if (String(value)) {
			this.chainArray.push(String(value));
			return this;
		}
		this.chainArray.push("");
		return this;
	},
	removeLink(position) {
		if (
			position > this.chainArray.length ||
			position <= 0 ||
			typeof position !== "number"
		) {
			this.chainArray = [];
			throw new Error(`You can't remove incorrect link!`);
		}
		this.chainArray.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.chainArray.reverse();
		return this;
	},
	finishChain() {
		let chainStr = this.chainArray.map((el) => `( ${el} )`).join("~~");
		this.chainArray = [];
		return chainStr;
	},
};

module.exports = {
	chainMaker,
};
