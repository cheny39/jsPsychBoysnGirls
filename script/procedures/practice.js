const practice_base = {
    timeline: [practice_trial_new],
    randomize_order: true
};

let practice1 = {
    ...practice_base,
    timeline_variables: [
        {
            image:"pig-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            video: "pig_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy2_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },

        {
            image:"pig-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "pig_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left:685,
                top: 600
            },
            person_image: "boy2_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
        {
            image:"pig-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "pig_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
        {
            image:"pig-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "pig_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy2_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
        {
            image:"pig-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "pig_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy2_boy3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
        {
            image:"sheep-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "sheep_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
        {
            image:"sheep-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            video: "sheep_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy2_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
            
        },
        {
            image:"sheep-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            video: "sheep_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy2_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
            
        },
        {
            image:"sheep-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "sheep_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy2_boy3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },

        {
            image:"sheep-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "sheep_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },


        {
            image:"chicken-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "chicken_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy2_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },

        {
            image:"chicken-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "chicken_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
        {
            image:"chicken-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "chicken_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy2_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },

        {
            image:"chicken-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "chicken_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy2_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
        {
            image:"chicken-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "chicken_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy2_boy3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },

 
        {
            image:"duck-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "duck_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy2_boy3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
        {
            image:"duck-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "duck_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy2_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
        {
            image:"duck-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "duck_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy2_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
      
        {
            image:"duck-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "duck_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy2_boy3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },

        {
            image:"duck-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "duck_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,

            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "boy1_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
        },
        {
            image:"orange-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "orange_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl2_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },

        {
            image:"orange-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "orange_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl2_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },


        {
            image:"orange-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "orange_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },


        {
            image:"orange-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "orange_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl2_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },

        {
            image:"orange-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            video: "orange_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl2_girl3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },

        {
            image:"cherry-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "cherry_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },

        {
            image:"cherry-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "cherry_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl2_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },


        {
            image:"cherry-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "cherry_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },


        {
            image:"cherry-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "cherry_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl2_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },

        {
            image:"cherry-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            video: "cherry_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl2_girl3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },


        {
            image:"lime-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "lime_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl2_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },

        {
            image:"lime-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "lime_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl2_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },


        {
            image:"lime-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "lime_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },


        {
            image:"lime-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "lime_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl2_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },

        {
            image:"lime-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            video: "lime_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl2_girl3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },



        {
            image:"pear-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "pear_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl2_girl3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },

        {
            image:"pear-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "pear_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl2_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },


        {
            image:"pear-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "pear_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },


        {
            image:"pear-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

            video: "pear_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl2_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },

        {
            image:"pear-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            video: "pear_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            wrong_button_image: "question_mark.png",
            wrong_button_position: {
                left: 685,
                top: 600
            },
            person_image: "girl1_girl2_girl3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
    ]
};

// let practice2 = {
//     ...practice_base,
//     timeline_variables: [
//         {
//             image:"pig-1.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "pig_girl3.mp4",
//             video_position: VIDEO_POSITIONS.RIGHT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "girl1_girl2_girl4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
//             bubble_image: "girl_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
//         },

       
//         {
//             image:"pig-4.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "pig_ka_boy3.mp4",
//             video_position: VIDEO_POSITIONS.LEFT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "boy1_boy2_boy4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
//             bubble_image: "boy_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
//         },
//         {
//             image:"pig-2.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "pig_po_girl3.mp4",
//             video_position: VIDEO_POSITIONS.RIGHT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "girl1_girl2_girl4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
//             bubble_image: "girl_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
//         },
//         {
//             image:"pig-2.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "pig_ka_boy4.mp4",
//             video_position: VIDEO_POSITIONS.LEFT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "boy1_boy2_boy3.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
//             bubble_image: "boy_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
//         },

//         {
//             image:"pig-4.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "pig_po_girl4.mp4",
//             video_position: VIDEO_POSITIONS.RIGHT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "girl1_girl2_girl3.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
//             bubble_image: "girl_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
//         },
        
//         {
//             image:"sheep-1.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "sheep_boy3.mp4",
//             video_position: VIDEO_POSITIONS.LEFT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "boy1_boy2_boy4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
//             bubble_image: "boy_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
//         },
 
//         {
//             image:"sheep-4.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "sheep_po_girl1.mp4",
//             video_position: VIDEO_POSITIONS.RIGHT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "girl2_girl3_girl4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
//             bubble_image: "girl_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
//         },

//         {
//             image:"sheep-4.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "sheep_ka_boy1.mp4",
//             video_position: VIDEO_POSITIONS.LEFT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "boy2_boy3_boy4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
//             bubble_image: "boy_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
//         },
    

//         {
//             image:"sheep-2.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "sheep_po_girl2.mp4",
//             video_position: VIDEO_POSITIONS.RIGHT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "girl1_girl3_girl4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
//             bubble_image: "girl_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
//         },

//         {
//             image:"sheep-2.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "sheep_ka_boy2.mp4",
//             video_position: VIDEO_POSITIONS.LEFT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "boy1_boy3_boy4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
//             bubble_image: "boy_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
//         },

//         {
//             image:"chicken-1.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "chicken_boy4.mp4",
//             video_position: VIDEO_POSITIONS.LEFT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "boy1_boy2_boy3.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
//             bubble_image: "boy_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
//         },

//         {
//             image:"chicken-2.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "chicken_po_girl4.mp4",
//             video_position: VIDEO_POSITIONS.RIGHT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "girl1_girl2_girl3.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
//             bubble_image: "girl_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
//         },
//         {
//             image:"chicken-2.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "chicken_ka_boy4.mp4",
//             video_position: VIDEO_POSITIONS.LEFT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "boy1_boy2_boy3.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
//             bubble_image: "boy_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
//         },

//         {
//             image:"chicken-4.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "chicken_po_girl3.mp4",
//             video_position: VIDEO_POSITIONS.RIGHT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "girl1_girl2_girl4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
//             bubble_image: "girl_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
//         },
//         {
//             image:"chicken-4.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "chicken_ka_boy3.mp4",
//             video_position: VIDEO_POSITIONS.LEFT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "boy1_boy2_boy4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
//             bubble_image: "boy_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
//         },

 
//         {
//             image:"duck-1.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "duck_girl4.mp4",
//             video_position: VIDEO_POSITIONS.RIGHT,
//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "girl1_girl2_girl3.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
//             bubble_image: "girl_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
//         },

//         {
//             image:"duck-2.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "duck_ka_boy1.mp4",
//             video_position: VIDEO_POSITIONS.LEFT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "boy2_boy3_boy4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
//             bubble_image: "boy_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
//         },
    
//         {
//             image:"duck-2.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "duck_po_girl1.mp4",
//             video_position: VIDEO_POSITIONS.RIGHT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "girl2_girl3_girl4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
//             bubble_image: "girl_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
//         },
//         {
//             image:"duck-4.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "duck_ka_boy2.mp4",
//             video_position: VIDEO_POSITIONS.LEFT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "boy1_boy3_boy4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
//             bubble_image: "boy_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,
//         },

//         {
//             image:"duck-4.jpg",
//             image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,

//             video: "duck_po_girl2.mp4",
//             video_position: VIDEO_POSITIONS.RIGHT,

//             wrong_button_image: "question_mark.png",
//             wrong_button_position: {
//                 left: 685,
//                 top: 600
//             },
//             person_image: "girl1_girl3_girl4.png",
//             person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
//             bubble_image: "girl_speech_bubble.png",
//             bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
//         },
//     ]
// };