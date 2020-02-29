class VigenereCipheringMachine {
    constructor(dir = true) {
        this.isDir = dir;
    }

    _isArgument(m, k) {
        if (!m || !k || typeof m !== 'string' || typeof k !== 'string') throw Error;
    }

    _equalLength(mes, key) {
        let res = '';

        for (let i = 0, j = 0; i < mes.length; i++) {
            if (/[a-z]/i.test(mes[i])) {
                res += key[j];

                if (j < key.length - 1) {
                    j++;

                } else j = 0;
            } else {
                res += mes[i];
            }
        }

        return res;
    }

    _getCharCode(str) {
        return str.toUpperCase().split('').map(letter => /[a-z]/i.test(letter) ? letter.charCodeAt() - 65 : letter);
    }

    _getStringFromChar(num) {
        return String.fromCharCode(num + 65);
    }

    _checkMod(n1, n2, flag) {
        let tmp = 0;

        if (flag) {
            if (n1 + n2 < 26) {
                tmp = n1 + n2;
            } else {
                tmp = (n1 + n2) - 26;
            }
        } else {
            if (n1 - n2 < 0) {
                tmp = n1 + 26 - n2;
            } else {
                tmp = n1 - n2;
            }
        }

        return tmp;
    }

    encrypt(message, key) {
        this._isArgument(message, key);
        const arrayOfMessages = this._getCharCode(message);
        const arrayOfkeys = this._getCharCode(this._equalLength(message, key));

        const result = arrayOfMessages.map((n, i) => typeof n == 'number' ? this._getStringFromChar(this._checkMod(n, arrayOfkeys[i], true)) : n);

        if (!this.isDir) result.reverse();

        return result.join('');
    }

    decrypt(encryptedMessage, key) {
        this._isArgument(encryptedMessage, key);
        const arrayOfMessages = this._getCharCode(encryptedMessage);
        const arrayOfkeys = this._getCharCode(this._equalLength(encryptedMessage, key));

        const result = arrayOfMessages.map((n, i) => typeof n == 'number' ? this._getStringFromChar(this._checkMod(n, arrayOfkeys[i], false)) : n);

        if (!this.isDir) result.reverse();

        return result.join('');
    }
}




module.exports = VigenereCipheringMachine;
