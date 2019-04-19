var friends = [
    {
        name: "Steven",
        photo: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11053291_10153005456429775_2450781186804093059_n.jpg?_nc_cat=109&_nc_ht=scontent-atl3-1.xx&oh=15973664a711c76548a70100326fed8d&oe=5D36C498",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name: "Julie",
        photo: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11703157_10152792658471377_2626546588617922501_n.jpg?_nc_cat=109&_nc_ht=scontent-atl3-1.xx&oh=191bc91eea51868e264f0d6edf223075&oe=5D33DC90",
        scores: [
            3,
            2,
            3,
            3,
            1,
            2,
            2,
            5,
            4,
            1
        ]
    }
]


function getDiff(user, guy) {
    var totalDiff = 0;
    for (var i = 0; i < user.length; i++) {
        totalDiff += Math.abs(user[i] - guy[i]);
    }

    console.log(totalDiff);
}

module.exports = {
    friends: friends,
    getDiff: getDiff,
};

