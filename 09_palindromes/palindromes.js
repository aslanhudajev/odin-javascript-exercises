const palindromes = function (str) {
    let puncts = [".", ",", ":", "!", "?", " "]
    let modstr = str.split("").filter((c) => puncts.includes(c) ? false : true).map(c => c.toLowerCase()).join("");
    let rev_modstr= modstr.split("").reverse().join("");

    return rev_modstr === modstr;
};

// Do not edit below this line
module.exports = palindromes;
