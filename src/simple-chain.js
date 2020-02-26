const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (!this.links[position - 1] || typeof position !== 'number') {
      this.links = [];
      throw Error;
    }

    this.links.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.links.reverse();

    return this;
  },
  finishChain() {
    let result = '';

    this.links.forEach(link => result += `${link}~~`);
    this.links = [];

    return result.slice(0, -2);
  }
};

module.exports = chainMaker;
