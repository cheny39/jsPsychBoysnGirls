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
        left: 380,
        top: 200
    }
};

const VIDEO_POSITIONS = {
    'LEFT': {
        left: -50,
        top: 150
    },
    'CENTER': {
        left: 95,
        top: 150
    },
    'RIGHT': {
        left: 1080,
        top: 150
    }
};

const exposure_trial_procedure_base = {
    timeline: [exposure_trial],
};

let exposure_procedure1_1 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "pig_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            // audio: "pig_null_gulu1.wav",
            // wrong_button_image: "chicken-1.jpg",
            // wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            image: "pig-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },

        {
            video: "pig_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            // audio: "pig_po_norl1.wav",
            // wrong_button_image: "pig-1.jpg",
            // wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            image: "pig-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "pig_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            // audio: "pig_ka_gulu1.wav",
            // wrong_button_image: "pig-1.jpg",
            // wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            image: "pig-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "pig_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            // audio: "pig_po_norl1.wav",
            // wrong_button_image: "pig-1.jpg",
            // wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            image: "pig-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },

        {
            video: "pig_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "pig-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
    ]
};

let exposure_procedure2_1 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "pig_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "pig-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "pig_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "pig-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },

        {
            video: "pig_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "pig-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "pig_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "pig-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },

        {
            video: "pig_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "pig-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        }
    ]
};


let exposure_procedure1_2 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "sheep_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "sheep-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "sheep_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "sheep-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "sheep_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "sheep-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "sheep_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "sheep-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "sheep_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "sheep-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        }
    ]
};
let exposure_procedure2_2 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "sheep_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "sheep-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "sheep_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "sheep-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "sheep_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "sheep-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        }, {
            video: "sheep_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "sheep-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "sheep_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "sheep-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        }
    ]
};



let exposure_procedure1_3 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [

        {
            video: "chicken_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "chicken-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "chicken_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "chicken-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "chicken_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "chicken-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "chicken_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "chicken-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "chicken_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "chicken-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        }
    ]
};

let exposure_procedure2_3 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "chicken_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "chicken-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "chicken_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "chicken-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "chicken_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "chicken-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "chicken_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "chicken-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "chicken_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "chicken-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        }
    ]
};

let exposure_procedure1_4 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "duck_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "duck-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "duck_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "duck-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "duck_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "duck-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "duck_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "duck-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "duck_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "duck-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        }
    ]
};

let exposure_procedure2_4 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "duck_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "duck-1.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "duck_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "duck-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "duck_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "duck-2.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "duck_ka_boy.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            image: "duck-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        },
        {
            video: "duck_po_girl.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            image: "duck-4.jpg",
            image_position: EXPOSURE_IMAGE_POSITIONS.CENTER,
        }
    ]
};
