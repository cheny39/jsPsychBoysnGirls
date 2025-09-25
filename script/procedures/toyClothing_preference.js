const TC_PREFERENCE_BUTTON_POSITIONS = {
    'A': {
        left: 0,
        top: 0
    },
    'B': {
        left: 590,
        top: 0
    },
    'C': {
        left: 1175,
        top: 0
    },
    'D': {
        left: 290,
        top: 360
    },
    'E': {
        left: 880,
        top: 360
    },
};



const tc_preference_base_procedure_base = {
    timeline: [tc_preference_trial],
};

let toy_preference_task1 = {
    ...tc_preference_base_procedure_base,
    timeline_variables: [
        {
            A_image: "toy1A.png",
            A_image_position: TC_PREFERENCE_BUTTON_POSITIONS.A,
            B_image: "toy1B.png",
            B_image_position:TC_PREFERENCE_BUTTON_POSITIONS.B,
            C_image: "toy1C.png",
            C_image_position: TC_PREFERENCE_BUTTON_POSITIONS.C,
            D_image: "toy1D.png",
            D_image_position:TC_PREFERENCE_BUTTON_POSITIONS.D,
            E_image: "toy1E.png",
            E_image_position: TC_PREFERENCE_BUTTON_POSITIONS.E,
        },
    ]
};

let toy_preference_task2 = {
    ...tc_preference_base_procedure_base,
    timeline_variables: [
        {
            A_image: "toy2A.png",
            A_image_position: TC_PREFERENCE_BUTTON_POSITIONS.A,
            B_image: "toy2B.png",
            B_image_position:TC_PREFERENCE_BUTTON_POSITIONS.B,
            C_image: "toy2C.png",
            C_image_position: TC_PREFERENCE_BUTTON_POSITIONS.C,
            D_image: "toy2D.png",
            D_image_position:TC_PREFERENCE_BUTTON_POSITIONS.D,
            E_image: "toy2E.png",
            E_image_position: TC_PREFERENCE_BUTTON_POSITIONS.E,
        },
    ]
};

let toy_preference_task3 = {
    ...tc_preference_base_procedure_base,
    timeline_variables: [
        {
            A_image: "toy3A.png",
            A_image_position: TC_PREFERENCE_BUTTON_POSITIONS.A,
            B_image: "toy3B.png",
            B_image_position:TC_PREFERENCE_BUTTON_POSITIONS.B,
            C_image: "toy3C.png",
            C_image_position: TC_PREFERENCE_BUTTON_POSITIONS.C,
            D_image: "toy3D.png",
            D_image_position:TC_PREFERENCE_BUTTON_POSITIONS.D,
            E_image: "toy3E.png",
            E_image_position: TC_PREFERENCE_BUTTON_POSITIONS.E,
        },
    ]
};
let toy_preference_task4 = {
    ...tc_preference_base_procedure_base,
    timeline_variables: [
        {
            A_image: "toy4A.png",
            A_image_position: TC_PREFERENCE_BUTTON_POSITIONS.A,
            B_image: "toy4B.png",
            B_image_position:TC_PREFERENCE_BUTTON_POSITIONS.B,
            C_image: "toy4C.png",
            C_image_position: TC_PREFERENCE_BUTTON_POSITIONS.C,
            D_image: "toy4D.png",
            D_image_position:TC_PREFERENCE_BUTTON_POSITIONS.D,
            E_image: "toy4E.png",
            E_image_position: TC_PREFERENCE_BUTTON_POSITIONS.E,
        },
    ]
};
let cloth_preference_task1 = {
    ...tc_preference_base_procedure_base,
    timeline_variables: [
        {
            A_image: "cloth1A.png",
            A_image_position: TC_PREFERENCE_BUTTON_POSITIONS.A,
            B_image: "cloth1B.png",
            B_image_position:TC_PREFERENCE_BUTTON_POSITIONS.B,
            C_image: "cloth1C.png",
            C_image_position: TC_PREFERENCE_BUTTON_POSITIONS.C,
            D_image: "cloth1D.png",
            D_image_position:TC_PREFERENCE_BUTTON_POSITIONS.D,
            E_image: "cloth1E.png",
            E_image_position: TC_PREFERENCE_BUTTON_POSITIONS.E,
        },
    ]
};

let cloth_preference_task2 = {
    ...tc_preference_base_procedure_base,
    timeline_variables: [
        {
            A_image: "cloth2A.png",
            A_image_position: TC_PREFERENCE_BUTTON_POSITIONS.A,
            B_image: "cloth2B.png",
            B_image_position:TC_PREFERENCE_BUTTON_POSITIONS.B,
            C_image: "cloth2C.png",
            C_image_position: TC_PREFERENCE_BUTTON_POSITIONS.C,
            D_image: "cloth2D.png",
            D_image_position:TC_PREFERENCE_BUTTON_POSITIONS.D,
            E_image: "cloth2E.png",
            E_image_position: TC_PREFERENCE_BUTTON_POSITIONS.E,
        },
    ]
};

let cloth_preference_task3 = {
    ...tc_preference_base_procedure_base,
    timeline_variables: [
        {
            A_image: "cloth3A.png",
            A_image_position: TC_PREFERENCE_BUTTON_POSITIONS.A,
            B_image: "cloth3B.png",
            B_image_position:TC_PREFERENCE_BUTTON_POSITIONS.B,
            C_image: "cloth3C.png",
            C_image_position: TC_PREFERENCE_BUTTON_POSITIONS.C,
            D_image: "cloth3D.png",
            D_image_position:TC_PREFERENCE_BUTTON_POSITIONS.D,
            E_image: "cloth3E.png",
            E_image_position: TC_PREFERENCE_BUTTON_POSITIONS.E,
        },
    ]
};

let cloth_preference_task4 = {
    ...tc_preference_base_procedure_base,
    timeline_variables: [
        {
            A_image: "cloth4A.png",
            A_image_position: TC_PREFERENCE_BUTTON_POSITIONS.A,
            B_image: "cloth4B.png",
            B_image_position:TC_PREFERENCE_BUTTON_POSITIONS.B,
            C_image: "cloth4C.png",
            C_image_position: TC_PREFERENCE_BUTTON_POSITIONS.C,
            D_image: "cloth4D.png",
            D_image_position:TC_PREFERENCE_BUTTON_POSITIONS.D,
            E_image: "cloth4E.png",
            E_image_position: TC_PREFERENCE_BUTTON_POSITIONS.E,
        },
    ]
};