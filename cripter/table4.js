const table4 = (data)=> {
    return new Promise((resolve, reject) => {
        let hash = [];
        const dataList = data.split("");
        const registred = [
            ["a", "&(lsk*"], ["b", "?:id\\%"], ["c", "s(s]c^{ios"], ["d", "ç)\'§zqd"],
            ["e", "@kslo¬w"], ["f", "da&°\``"], ["g", "¹dkl^?t!"], ["h", "=§p~b$by"],
            ["i", "¨¨sng_-m"], ["j", "<fal,;"], ["k", "¹²mx{.|"], ["l", "+las¨³("],
            ["m", "kªq¢c¬+!"], ["n", "kah%ºo"], ["o", "z$p°)"], ["p", "^@#äyd"],
            ["q", "!@ç{abh"], ["r", "+_p%²Sç"], ["s", "a_|*tx"], ["t", "_-\"alv{"],
            ["u", "@apfx&²"], ["v", "§qx.<°"], ["w", "gc(!#>a"], ["x", "?%¹hu>;"],
            ["y", "^`\`!)"], ["z", "+c>¬|zl"]
        ];
        dataList.forEach(element => {
            registred.forEach(e => {
                if (element === e[0]) {
                    hash.push(`${e[1]}`);
                };
            });
        });
        hash = hash.join('');
        resolve(hash);
    });
};

module.exports = table4;