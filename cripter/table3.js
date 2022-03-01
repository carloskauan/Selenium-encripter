const table3 = (data)=> {
    return new Promise((resolve, reject) => {
        let hash = [];
        const dataList = data.split("");
        const registred = [
            ["a", "!@+=(@&"], ["b", "^]}[;"], ["c", "=_)%@"], ["d", "+´{:<,"],
            ["e", "}[/?¨¨"], ["f", "\"!@$#"], ["g", "+-?><"], ["h", "?`{[:!"],
            ["i", "+§!@#?"], ["j", "+{´~/;."], ["k", "?1@$¨¨^"], ["l", "~?°:.,"],
            ["m", "=_)*/,>"], ["n", "@&¨$_"], ["o", "`^}{\""], ["p", "_ª#²"],
            ["q", "³£¬{°"], ["r", ")§°ª"], ["s", "¨_-~^<"], ["t", "``?/$_º"],
            ["u", "()]^/|\\"], ["v", "¨$²~?\""], ["w", "+{]~¹*"], ["x", "!²{°ª"],
            ["y", "|\\_-§¢¬"], ["z", "#³¨¢%"]
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

module.exports = table3