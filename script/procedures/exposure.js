// const EXPOSURE_BUTTON_POSITIONS = {
//     'UPPER_RIGHT': {
//         left: 410,
//         top: 150
//     },
//     'LOWER_RIGHT': {
//         left: 410,
//         top: 450
//     }
// };
const EXPOSURE_IMAGE_POSITIONS = {
    'CENTER': {
        left: 473,
        top: 180
    }
};
const PERSON_IMAGE_POSITIONS = {
    'LEFT': {
        left: -20,
        top: 260
    },
    'RIGHT': {
        left: 960,
        top: 260
    }
};
const BUBBLE_IMAGE_POSITIONS = {
    'LEFT': {
        left: 280,
        top: 50
    },
    'RIGHT': {
        left: 945,
        top: 50
    }
};

const VIDEO_POSITIONS = {
    'LEFT': {
        left: -10,
        top: 50
    },
    'CENTER': {
        left: 95,
        top: 50
    },
    'RIGHT': {
        left: 1020,
        top: 50
    }
};

const exposure_trial_procedure_base = {
    timeline: [exposure_trial],
};

let exposure_procedure1_1 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "pig_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            // audio: "pig_null_gulu1.wav",
            // wrong_button_image: "chicken-1.jpg",
            // wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            image: "pig-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy2_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },

        {
            video: "pig_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            // audio: "pig_po_norl1.wav",
            // wrong_button_image: "pig-1.jpg",
            // wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            image: "pig-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl2_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "pig_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            // audio: "pig_ka_gulu1.wav",
            // wrong_button_image: "pig-1.jpg",
            // wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            image: "pig-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "pig_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            // audio: "pig_po_norl1.wav",
            // wrong_button_image: "pig-1.jpg",
            // wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            image: "pig-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },

        {
            video: "pig_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "pig-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy2_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
    ]
};

let exposure_procedure2_1 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "pig_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "pig-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl2_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "pig_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "pig-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy2_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },

        {
            video: "pig_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "pig-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl2_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "pig_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "pig-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy2_boy3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },

        {
            video: "pig_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "pig-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl2_girl3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        }
    ]
};


let exposure_procedure1_2 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "sheep_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "sheep-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl2_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "sheep_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "sheep-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy2_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "sheep_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "sheep-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl2_girl3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "sheep_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "sheep-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy2_boy3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "sheep_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "sheep-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl2_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        }
    ]
};
let exposure_procedure2_2 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "sheep_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "sheep-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy2_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "sheep_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "sheep-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl2_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "sheep_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "sheep-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy2_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        }, {
            video: "sheep_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "sheep-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "sheep_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "sheep-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        }
    ]
};



let exposure_procedure1_3 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [

        {
            video: "chicken_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "chicken-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "chicken_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "chicken-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "chicken_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "chicken-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "chicken_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "chicken-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy2_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "chicken_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "chicken-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl2_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        }
    ]
};

let exposure_procedure2_3 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "chicken_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "chicken-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy2_boy3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "chicken_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "chicken-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl2_girl3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "chicken_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "chicken-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy2_boy3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },  
        {
            video: "chicken_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "chicken-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl2_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "chicken_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "chicken-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy2_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        }
    ]
};

let exposure_procedure1_4 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "duck_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "duck-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "duck_po_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "duck-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl2_girl3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "duck_ka_boy3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "duck-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy2_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "duck_po_girl3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "duck-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl2_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "duck_ka_boy4.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "duck-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy2_boy3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        }
    ]
};

let exposure_procedure2_4 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "duck_girl4.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "duck-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl2_girl3.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "duck_ka_boy1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "duck-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy2_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "duck_po_girl1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "duck-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl2_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        },
        {
            video: "duck_ka_boy2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "duck-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "boy1_boy3_boy4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.LEFT,
            bubble_image: "boy_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.LEFT,

        },
        {
            video: "duck_po_girl2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "duck-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
            person_image: "girl1_girl3_girl4.png",
            person_image_position: PERSON_IMAGE_POSITIONS.RIGHT,
            bubble_image: "girl_speech_bubble.png",
            bubble_image_position: BUBBLE_IMAGE_POSITIONS.RIGHT,
        }
    ]
};
