module.exports = function () {

    return {
        cards: [
            {
                id: "a",
                title: "Evasive Action",
                album_cover: "IMG_20171102_164759.jpg",
                album_id: '90',
                description:
                    "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                id: "b",
                title: "Est rerum tempore vitae",
                album_id: '91',
                description:
                    "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                id: "c",
                title: "sint nihil reprehenderit dolor beatae",
                album_cover: "IMG_20180121_163630.jpg",
                album_id: '92',
                description:
                    "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                id: "d",
                title: "Betray the Federation",
                album_id: '93',
                description:
                    "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                id: "e",
                title: "Sometimes, Fathers and Sons",
                album_id: '94',
                description: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
        ]
    }
}

//cards on home landing should be caluclate according to a 'relevance factor' 
//which is based off of 
//most updates/changes within the past 3 days (requires taking notice of these changes)
//if a user is logged in, their favorites are also taken into account, so I need to figure out how to calculate relationships between artists
//  perhaps relationships between artists is just based off of favorites?? --so if someone 'likes' an album, we can 
