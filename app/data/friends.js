[
    {
        name: "Steven",
        photo: "photoURL",
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
        photo: "photoURL",
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

user1 = [2, 2, 2, 2, 5];
guy1 = [1, 1, 2, 2, 1];

function getDiff(user, guy) {
    var diff = 0;
    for (var i = 0; i < user.length; i++) {
        diff += Math.abs(user[i] - guy[i]);
    }

    console.log(diff);
}

getDiff(user1, guy1);