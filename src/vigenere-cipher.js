const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {

	constructor(direct = true) {
		this.direct = direct;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error("Incorrect arguments!");
		}
		message = message.toUpperCase();
		key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

		for (let i = 0; i < message.length; i++) {
			if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        // only latin alphabet, all other symbols remain unchanged
				result += String.fromCharCode(((message.charCodeAt(i) +
						key.charCodeAt(keyIndex % key.length) - 130) % 26) + 65
				);
				keyIndex++;
			} else {
        result += message[i];
      }
		}
    if (!this.direct) {
      // reverse machine 
      result = result.split("").reverse().join("");
    }
		return result;
	}

	decrypt(message, key) {
		if (!message || !key) {
			throw new Error("Incorrect arguments!");
		}

    message = message.toUpperCase();
		key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

		for (let i = 0; i < message.length; i++) {
			if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode((message.charCodeAt(i) + 
            26 - key.charCodeAt(keyIndex % key.length)) % 26 + 65);
        keyIndex++;
      } else {
        result += message[i];
      }
	  }
    if (!this.direct) {
      // reverse machine 
      result = result.split("").reverse().join("");
    }
		return result;
  }
}

module.exports = {
	VigenereCipheringMachine,
};
