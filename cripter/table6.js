const table6 = (data)=> {
    return new Promise((resolve, reject) => {
        let hash = [];
        const dataList = data.split("");
        const registred = [
            ["a", "asdkd"], ["b", "scmeah"], ["c", "mwjoac"], ["d", "snfkwjha"],
            ["e", "sfkrpeh"], ["f", "sklpvbg"], ["g", "hgkeha"], ["h", "vykhgr"],
            ["i", "bnmxioe"], ["j", "mfgkw"], ["k", "nmsjne"], ["l", "qwthga"],
            ["m", "hjkekhj"], ["n", "hjoeithjf"], ["o", "bnkeg"], ["p", "gddsjie"],
            ["q", "nvjkdo"], ["r", "vcvbpor"], ["s", "hkcka"], ["t", "fkjope"],
            ["u", "nbkawg"], ["v", "nkldgh"], ["w", "yrhghs"], ["x", "rytuyghdh"],
            ["y", "ryhjhh"], ["z", "gfjthrdf"]
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

module.exports = table6