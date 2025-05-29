const practice_base = {
    timeline: [practice_trial_new],
    randomize_order: true
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
            video: "pig_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"pig-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left:650,
                top: 600
            },
        },
        {
            image:"pig-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },


        {
            image:"pig-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"pig-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"sheep-1.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"sheep-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"sheep-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"sheep-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"sheep-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },


        {
            image:"chicken-1.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"chicken-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"chicken-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"chicken-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"chicken-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

 
        {
            image:"duck-1.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"duck-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"duck-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"duck-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"duck-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        }
    ]
};

let practice2 = {
    ...practice_base,
    timeline_variables: [
        {
            image:"pig-1.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

       
        {
            image:"pig-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"pig-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"pig-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"pig-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "pig_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        
        {
            image:"sheep-1.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
 
        {
            image:"sheep-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"sheep-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
    

        {
            image:"sheep-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"sheep-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "sheep_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"chicken-1.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"chicken-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"chicken-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"chicken-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"chicken-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "chicken_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

 
        {
            image:"duck-1.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"duck-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"duck-2.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
        {
            image:"duck-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },

        {
            image:"duck-4.jpg",
            image_position: {
                left: 380,
                top: 200
            },
            video: "duck_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 650,
                top: 600
            },
        },
    ]
};