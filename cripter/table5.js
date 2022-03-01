const table5 = (data)=> {
    return new Promise((resolve, reject) => {
        let hash = [];
        const dataList = data.split("");
        const registred = [
            ["a", "a3$h6&"], ["b", "m9*d4º"], ["c", "d7{f5£"], ["d", "zx5%7d}"],
            ["e", "(65yha_12"], ["f", "akj6*d~ç"], ["g", "|9adk²^"], ["h", "gm7!@\``"],
            ["i", "!@3hrº"], ["j", "p_*9dm103"], ["k", ">12dm*)"], ["l", "¨|cs9^<"],
            ["m", "ak$²l_=§"], ["n", "s4m,d¬&1"], ["o", "*6>8;?3"], ["p", "&m^kd96af;"],
            ["q", ",d2wl^<.3"], ["r", "fki1!#d"], ["s", "+sv1:;2"], ["t", "al/|kd8_"],
            ["u", "s,d¨lkw85"], ["v", "aa&s6S^!"], ["w", "_&d584+@"], ["x", "dl2ldç^çs#"],
            ["y", "@la,xp$_"], ["z", "da,*u2§ld5ª|\\"]
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
;
module.exports = table5