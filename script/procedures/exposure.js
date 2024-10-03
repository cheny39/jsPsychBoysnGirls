const EXPOSURE_BUTTON_POSITIONS = {
    'UPPER_RIGHT': {
        left: 410,
        top: 150
    },
    'LOWER_RIGHT': {
        left: 410,
        top: 450
    }
};

const VIDEO_POSITIONS = {
    'LEFT': {
        left: 10,
        top: 150
    },
    'RIGHT': {
        left: 180,
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
            video: "gulu1_1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "pig_null_gulu1.wav",
            wrong_button_image: "chicken-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "pig-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "gulu1_2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "pig_ka_gulu1.wav",
            wrong_button_image: "pig-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "pig-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "norl1_3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "pig_po_norl1.wav",
            wrong_button_image: "pig-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "pig-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};

let exposure_procedure1_2 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "gulu1_3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "pig_ka_gulu1.wav",
            wrong_button_image: "pig-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "pig-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "gulu1_2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "pig_null_gulu1.wav",
            wrong_button_image: "pig-2.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "pig-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "norl1_1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "pig_po_norl1.wav",
            wrong_button_image: "pig-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "pig-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};
let exposure_procedure1_3 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "norl5_1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "sheep_null_norl5.wav",
            wrong_button_image: "duck-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "sheep-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "norl5_3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "sheep_po_norl5.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "sheep-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "gulu7_1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "sheep_ka_gulu7.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "sheep-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        }
    ]
};

let exposure_procedure1_4 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "norl5_3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "sheep_null_norl5.wav",
            wrong_button_image: "sheep-4.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "sheep-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "gulu7_2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "sheep_ka_gulu7.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "sheep-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "norl5_1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "sheep_po_norl5.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "sheep-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};
let exposure_procedure2_1 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "gulu1_3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "chicken_null_gulu1.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "chicken-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "norl1_3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "chicken_po_norl1.wav",
            wrong_button_image: "chicken-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "chicken-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "gulu1_1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "chicken_ka_gulu1.wav",
            wrong_button_image: "chicken-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "chicken-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};

let exposure_procedure2_2 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "gulu1_2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "chicken_ka_gulu1.wav",
            wrong_button_image: "chicken-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "chicken-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "gulu1_3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "chicken_null_gulu1.wav",
            wrong_button_image: "chicken-2.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "chicken-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "norl1_2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "chicken_po_norl1.wav",
            wrong_button_image: "chicken-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "chicken-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};

let exposure_procedure2_3 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "norl5_2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "duck_null_norl5.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "duck-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "gulu7_1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "duck_ka_gulu7.wav",
            wrong_button_image: "duck-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "duck-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "norl5_3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "duck_po_norl5.wav",
            wrong_button_image: "duck-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "duck-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};

let exposure_procedure2_4 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "norl5_1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "duck_null_norl5.wav",
            wrong_button_image: "duck-4.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "duck-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "norl5_2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "duck_po_norl5.wav",
            wrong_button_image: "duck-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "duck-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "gulu7_2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "duck_ka_gulu7.wav",
            wrong_button_image: "duck-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "duck-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};
let exposure_procedure3_1 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "norl1_1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "pig_null_norl1.wav",
            wrong_button_image: "duck-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "pig-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "norl1_2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "pig_po_norl1.wav",
            wrong_button_image: "pig-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "pig-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "gulu1_1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "pig_ka_gulu1.wav",
            wrong_button_image: "pig-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "pig-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};
let exposure_procedure3_2 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "norl1_1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "pig_po_norl1.wav",
            wrong_button_image: "pig-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "pig-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "norl1_2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "pig_null_norl1.wav",
            wrong_button_image: "pig-4.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "pig-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "gulu1_3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "pig_ka_gulu1.wav",
            wrong_button_image: "pig-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "pig-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};
let exposure_procedure3_3 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "gulu7_2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "sheep_null_gulu7.wav",
            wrong_button_image: "duck-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "sheep-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "gulu7_3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "sheep_ka_gulu7.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "sheep-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "norl5_1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "sheep_po_norl5.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "sheep-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};

let exposure_procedure3_4 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "gulu7_1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "sheep_null_gulu7.wav",
            wrong_button_image: "sheep-2.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "sheep-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "norl5_2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "sheep_po_norl5.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "sheep-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "gulu7_3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "sheep_ka_gulu7.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "sheep-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        }
    ]
};

let exposure_procedure4_1 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "norl1_3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "chicken_null_norl1.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "chicken-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },

        {
            video: "gulu1_1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "chicken_ka_gulu1.wav",
            wrong_button_image: "chicken-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "chicken-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "norl1_1.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "chicken_po_norl1.wav",
            wrong_button_image: "chicken-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "chicken-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
    ]
};

let exposure_procedure4_2 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "gulu1_2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "chicken_ka_gulu1.wav",
            wrong_button_image: "chicken-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "chicken-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },

        {
            video: "norl1_3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "chicken_null_norl1.wav",
            wrong_button_image: "chicken-4.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "chicken-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "norl1_2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "chicken_po_norl1.wav",
            wrong_button_image: "chicken-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "chicken-4.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
    ]
};

let exposure_procedure4_3 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "gulu7_1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "duck_null_gulu7.wav",
            wrong_button_image: "sheep-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "duck-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "norl5_2.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "duck_po_norl5.wav",
            wrong_button_image: "duck-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "duck-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "gulu7_3.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "duck_ka_gulu7.wav",
            wrong_button_image: "duck-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "duck-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }
    ]
};

let exposure_procedure4_4 = {
    ...exposure_trial_procedure_base,
    timeline_variables: [
        {
            video: "gulu7_2.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "duck_null_gulu7.wav",
            wrong_button_image: "duck-2.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "duck-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        },
        {
            video: "norl5_3.mp4",
            video_position: VIDEO_POSITIONS.RIGHT,
            audio: "duck_null_norl5.wav",
            wrong_button_image: "duck-2.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
            correct_button_image: "duck-1.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
        },
        {
            video: "gulu7_1.mp4",
            video_position: VIDEO_POSITIONS.LEFT,
            audio: "duck_ka_gulu7.wav",
            wrong_button_image: "duck-1.jpg",
            wrong_button_position: EXPOSURE_BUTTON_POSITIONS.UPPER_RIGHT,
            correct_button_image: "duck-2.jpg",
            correct_button_position: EXPOSURE_BUTTON_POSITIONS.LOWER_RIGHT,
        }

    ]
};