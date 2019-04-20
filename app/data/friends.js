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
            1,
            2,
            3,
            4,
            4,
            2,
            3,
            5,
            4,
            1
        ]
    },
    {
        name: "Rob",
        photo: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/253924_10150327989869993_5368321_n.jpg?_nc_cat=110&_nc_ht=scontent-atl3-1.xx&oh=e423ded0bd973e3a8d53e3f645cc68ce&oe=5D46F066",
        scores: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        name: "Mallory",
        photo: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/44930453_10212044556728259_7078879842166374400_n.jpg?_nc_cat=102&_nc_ht=scontent-atl3-1.xx&oh=f650947b4df3be6eff095eec712c6275&oe=5D766ECA",
        scores: [
            3,
            5,
            4,
            2,
            3,
            4,
            2,
            3,
            4,
            4
        ]
    }
]

// Takes two arrays and gets total difference between each position
function getDiff(user, guy) {
    var totalDiff = 0;
    for (var i = 0; i < user.length; i++) {
        totalDiff += Math.abs(user[i] - guy[i]);
    }

    return totalDiff;
}

module.exports = {
    friends: friends,
    getDiff: getDiff,
};

