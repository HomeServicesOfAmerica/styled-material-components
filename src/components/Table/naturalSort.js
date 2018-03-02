// ESLint gets mad about a lot of the regex in this file, so its disabled.

// Major credits to bubkoo @ https://github.com/bubkoo/natsort

/* eslint-disable */
const natsort = (options = {}) => {
  const GREATER = options.desc ? -1 : 1;
  const SMALLER = -GREATER;

  const ore = /^0/;
  const sre = /\s+/g;
  const tre = /^\s+|\s+$/g;
  // unicode
  const ure = /[^\x00-\x80]/;
  // hex
  const hre = /^0x[0-9a-f]+$/i;
  // numeric
  const nre = /(0x[\da-fA-F]+|(^[\+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|\d+)/g;
  // datetime
  const dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/;

  const lowerCase = (s) => {
    if (s.toLocaleLowerCase) {
      return s.toLocaleLowerCase();
    }
    return s.toLowerCase();
  };

  const normalize = options.insensitive ?
    s => lowerCase(`${s}`).replace(tre, '') : s => (`${s}`).replace(tre, '');


  function tokenize(s) {
    return s.replace(nre, '\0$1\0')
      .replace(/\0$/, '')
      .replace(/^\0/, '')
      .split('\0');
  }

  function parse(s, l) {
    // normalize spaces; find floats not starting with '0',
    // string or 0 if not defined (Clint Priest)
    return ((!s.match(ore) || l === 1)
      && parseFloat(s))
      || s.replace(sre, ' ').replace(tre, '')
      || 0;
  }


  return (a, b) => {
    // trim pre-post whitespace
    const x = normalize(a);
    const y = normalize(b);

    // return immediately if at least one of the values is empty.
    // - empty string < any others
    if (!x && !y) {
      return 0;
    }

    if (!x && y) {
      return SMALLER;
    }

    if (x && !y) {
      return GREATER;
    }


    // tokenize: split numeric strings and default strings
    const xArr = tokenize(x);
    const yArr = tokenize(y);

    // hex or date detection
    const xD = parseInt(x.match(hre), 16) || (xArr.length !== 1 && Date.parse(x));
    const yD = parseInt(y.match(hre), 16) || xD && y.match(dre) && Date.parse(y) || null;

    // try and sort Hex codes or Dates
    if (yD) {
      if (xD < yD) {
        return SMALLER;
      } else if (xD > yD) {
        return GREATER;
      }
    }

    const xL = xArr.length;
    const yL = yArr.length;

    // handle numeric strings and default strings
    for (let i = 0, l = Math.max(xL, yL); i < l; i += 1) {
      const xF = parse(xArr[i] || '', xL);
      const yF = parse(yArr[i] || '', yL);


      // handle numeric vs string comparison
      // - numeric < string - (Kyle Adams)
      if (isNaN(xF) !== isNaN(yF)) {
        return isNaN(xF) ? GREATER : SMALLER;
      }


      // if unicode use locale comparison
      if (ure.test(xF + yF) && xF.localeCompare) {
        const comp = xF.localeCompare(yF);

        if (comp > 0) {
          return GREATER;
        } else if (comp < 0) {
          return SMALLER;
        }
        if (i === l - 1) {
          return 0;
        }
      }

      if (xF < yF) {
        return SMALLER;
      } else if (xF > yF) {
        return GREATER;
      }
    }

    return 0;
  };
};

export default natsort;
