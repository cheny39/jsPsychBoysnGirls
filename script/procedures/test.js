const test_trial_procedure_base = {
    timeline: [test_trial],
    randomize_order: true
};

// const test_trial_listen_procedure_base = {
//     timeline: [test_trial_listen],
// };

// let dont_touch_screen_prompt_trial_procedure = {
//     timeline: [dont_touch_screen_prompt_trial],
//     timeline_variables: [
//         {
//             'audio': 'wav/Dont_touch_the_screen_yet.wav',
//             'image': 'whitesquare.png',
//         }
//     ]
// };
const TEST_IMAGE_POSITIONS = {
    'CENTER': {
        left: 380,
        top: 200
    }
};

let test_procedure_1_listen = {
    ...test_trial_procedure_base,
    timeline_variables: [
        
        {
            'image': 'pig-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
        
        },
        {
            'image': 'orange-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
        
        {
            'image': 'chicken-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },

        {
            'image': 'apple-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
     
        {
            'image': 'cow-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },
        
        {
            'image': 'lime-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },

        {
            'image': 'dog-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },
        {
            'image': 'grape-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },

    ]
};

let test_procedure_2_listen = {
    ...test_trial_procedure_base,
    timeline_variables: [
        
        {
            'image': 'orange-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
        {
            'image': 'cow-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },
        {
            'image': 'lime-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },

        {
            'image': 'apple-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
        {
            'image': 'pig-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
        
        },

        {
            'image': 'grape-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },      

        {
            'image': 'chicken-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },
        {
            'image': 'dog-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },

   

    ]
};
let test_procedure_3_listen = {
    ...test_trial_procedure_base,
    timeline_variables: [
        
        {
            'image': 'chicken-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },
        {
            'image': 'orange-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
        {
            'image': 'dog-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },

        {
            'image': 'grape-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
        {
            'image': 'cow-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },
        {
            'image': 'lime-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },

        {
            'image': 'pig-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
        
        },
        

        {
            'image': 'apple-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },

    ]
};

let test_procedure_4_listen = {
    ...test_trial_procedure_base,
    timeline_variables: [
       
        {
            'image': 'pig-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
        
        },

        {
            'image': 'grape-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
        {
            'image': 'lime-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },

        {
            'image': 'chicken-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
          
        },
        {
            'image': 'cow-3.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },
        {
            'image': 'orange-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },
        {
            'image': 'dog-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,

        },

        {
            'image': 'apple-5.jpg',
            image_position: TEST_IMAGE_POSITIONS.CENTER,
         
        },

    ]
};
