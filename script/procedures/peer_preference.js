const PEER_PREFERENCE_BUTTON_POSITIONS = {
    'LEFT': {
        left: 100,
        top: 150
    },
    'RIGHT': {
        left: 1050,
        top: 150
    }
};



const peer_preference_base_procedure_base = {
    timeline: [peer_preference_trial],
};

let peer_preference_task1 = {
    ...peer_preference_base_procedure_base,
    timeline_variables: [
        {
            left_image: "peer_preference_boy_1.png",
            left_image_position: PEER_PREFERENCE_BUTTON_POSITIONS.LEFT,
            right_image: "peer_preference_girl_1.png",
            right_image_position:PEER_PREFERENCE_BUTTON_POSITIONS.RIGHT
        },
    ]
};


let peer_preference_task2 = {
    ...peer_preference_base_procedure_base,
    timeline_variables: [
        {
            left_image: "peer_preference_girl_2.png",
            left_image_position: PEER_PREFERENCE_BUTTON_POSITIONS.LEFT,
            right_image: "peer_preference_boy_2.png",
            right_image_position:PEER_PREFERENCE_BUTTON_POSITIONS.RIGHT
        },
    ]
};

let peer_preference_task3 = {
    ...peer_preference_base_procedure_base,
    timeline_variables: [
        {
            left_image: "peer_preference_girl_3.png",
            left_image_position: PEER_PREFERENCE_BUTTON_POSITIONS.LEFT,
            right_image: "peer_preference_girl_4.png",
            right_image_position:PEER_PREFERENCE_BUTTON_POSITIONS.RIGHT
        },
    ]
};

let peer_preference_task4 = {
    ...peer_preference_base_procedure_base,
    timeline_variables: [
        {
            left_image: "peer_preference_girl_5.png",
            left_image_position: PEER_PREFERENCE_BUTTON_POSITIONS.LEFT,
            right_image: "peer_preference_boy_3.png",
            right_image_position:PEER_PREFERENCE_BUTTON_POSITIONS.RIGHT
        },
    ]
};

let peer_preference_task5 = {
    ...peer_preference_base_procedure_base,
    timeline_variables: [
        {
            left_image: "peer_preference_boy_4.png",
            left_image_position: PEER_PREFERENCE_BUTTON_POSITIONS.LEFT,
            right_image: "peer_preference_girl_6.png",
            right_image_position:PEER_PREFERENCE_BUTTON_POSITIONS.RIGHT
        },
    ]
};

let peer_preference_task6 = {
    ...peer_preference_base_procedure_base,
    timeline_variables: [
        {
            left_image: "peer_preference_boy_5.png",
            left_image_position: PEER_PREFERENCE_BUTTON_POSITIONS.LEFT,
            right_image: "peer_preference_boy_6.png",
            right_image_position:PEER_PREFERENCE_BUTTON_POSITIONS.RIGHT
        },
    ]
};

let peer_preference_task7 = {
    ...peer_preference_base_procedure_base,
    timeline_variables: [
        {
            left_image: "peer_preference_boy_7.png",
            left_image_position: PEER_PREFERENCE_BUTTON_POSITIONS.LEFT,
            right_image: "peer_preference_girl_7.png",
            right_image_position:PEER_PREFERENCE_BUTTON_POSITIONS.RIGHT
        },
    ]
};

let peer_preference_task8 = {
    ...peer_preference_base_procedure_base,
    timeline_variables: [
        {
            left_image: "peer_preference_girl_8.png",
            left_image_position: PEER_PREFERENCE_BUTTON_POSITIONS.LEFT,
            right_image: "peer_preference_boy_8.png",
            right_image_position:PEER_PREFERENCE_BUTTON_POSITIONS.RIGHT
        },
    ]
};