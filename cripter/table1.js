const table1 = (data)=> {
    return new Promise((resolve, reject) => {
        let hash = [];
        const dataList = data.split("");
        const registred = [
            ["a", "df2d1"], ["b", "sda24sa"], ["c", "asd78f"], ["d", "jyj3ky"],
            ["e", "iop3pi"], ["f", "rqy57t"], ["g", "aqldvj"], ["h", "asmkvj"],
            ["i", "asfkg91"], ["j", "paçc2"], ["k", "cnvça92"], ["l", "cnvlç48"],
            ["m", "rqydvpv5"], ["n", "r3qyt2f"], ["o", "rqyqa09t"], ["p", "rqsc12yt"],
            ["q", "rsv15t"], ["r", "zpvcq35"], ["s", "askv6545"], ["t", "cknvn25"],
            ["u", "cjnf47i"], ["v", "vnla1v9"], ["w", "vbmxh19"], ["x", "ksklv43"],
            ["y", "456h"], ["z", "dlkglk15"]
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

module.exports = table1;