const practice_base = {
    timeline: [practice_trial_new],
};

let practice1 = {
    ...practice_base,
    timeline_variables: [
        {
            image:"pig-1.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "answer.png",
            wrong_button_position: {
                left: 700,
                top: 600
            },
        },
        
        {
            image:"sheep-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "answer.png",
            wrong_button_position: {
                left: 700,
                top: 600
            },
        },
        {
            image:"chicken-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "answer.png",
            wrong_button_position: {
                left: 700,
                top: 600
            },
        },
        {
            image:"pig-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "answer.png",
            wrong_button_position: {
                left: 700,
                top: 600
            },
        },
        {
            image:"duck-1.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "answer.png",
            wrong_button_position: {
                left: 700,
                top: 600
            },
        },
    ]
};