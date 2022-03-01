const table2 = (data)=> {
    return new Promise((resolve, reject) => {
        let hash = [];
        const dataList = data.split("");
        const registred = [
            ["a", "19284"], ["b", "14876"], ["c", "35498"], ["d", "21877"],
            ["e", "24794"], ["f", "57487"], ["g", "6987543"], ["h", "13829"],
            ["i", "65798"], ["j", "321478"], ["k", "210354"], ["l", "026857"],
            ["m", "80587"], ["n", "48787"], ["o", "1654987"], ["p", "14885"],
            ["q", "15875"], ["r", "198742"], ["s", "06988"], ["t", "156754"],
            ["u", "549850"], ["v", "159784"], ["w", "052487"], ["x", "1638579"],
            ["y", "456189"], ["z", "23104"]
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

module.exports = table2