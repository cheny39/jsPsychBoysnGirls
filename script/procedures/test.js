const test_trial_procedure_base = {
    timeline: [test_trial],
};

const test_trial_listen_procedure_base = {
    timeline: [test_trial_listen],
};

let dont_touch_screen_prompt_trial_procedure = {
    timeline: [dont_touch_screen_prompt_trial],
    timeline_variables: [
        {
            'audio': 'wav/Dont_touch_the_screen_yet.wav',
            'image': 'whitesquare.png',
        }
    ]
};


let test_procedure_1_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/duck_ka_norl3.wav',
            'image': 'duck-3.jpg',
       
        },
        {
            'audio': 'wav/pig_ka_norl3.wav',
            'image': 'pig-5.jpg',
        
        },
        {
            'audio': 'wav/sheep_ka_norl3.wav',
            'image': 'sheep-3.jpg',
          
        },
        {
            'audio': 'wav/chicken_ka_norl3.wav',
            'image': 'chicken-5.jpg',
          
        }
    ]
};

let test_procedure_1 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'chicken-5.jpg',
            'left': 'gulu2.png',
            'right': 'norl2.png',
            'correct_answer': 0
        }
    ]
};

let test_procedure_2_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/pig_po_norl3.wav',
            'image': 'pig-3.jpg',
          
        },
        {
            'audio': 'wav/chicken_po_norl3.wav',
            'image': 'chicken-3.jpg',
        
        },
        {
            'audio': 'wav/sheep_po_norl3.wav',
            'image': 'sheep-5.jpg',
      
        },
        {
            'audio': 'wav/duck_po_norl3.wav',
            'image': 'duck-5.jpg',
       
        }
    ]
};

let test_procedure_2 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'duck-5.jpg',
            'left': 'gulu5.png',
            'right': 'norl4.png',
            'correct_answer': 1
        }
    ]
};

let test_procedure_3_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/sheep_po_norl3.wav',
            'image': 'sheep-5.jpg',
      
        },
        {
            'audio': 'wav/chicken_po_norl3.wav',
            'image': 'chicken-3.jpg',
       
        },
        {
            'audio': 'wav/duck_po_norl3.wav',
            'image': 'duck-5.jpg',
      
        },
        {
            'audio': 'wav/pig_po_norl3.wav',
            'image': 'pig-3.jpg',
       
        },
    ]
};

let test_procedure_3 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'pig-3.jpg',
            'left': 'gulu6.png',
            'right': 'norl7.png',
            'correct_answer': '1'
        }
    ]
};

let test_procedure_4_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/chicken_ka_norl3.wav',
            'image': 'chicken-5.jpg',
         
        },
        {
            'audio': 'wav/duck_ka_norl3.wav',
            'image': 'duck-3.jpg',
      
        },
        {
            'audio': 'wav/pig_ka_norl3.wav',
            'image': 'pig-5.jpg',
        
        },
        {
            'audio': 'wav/sheep_ka_norl3.wav',
            'image': 'sheep-3.jpg',
       
        },
    ]
};

let test_procedure_4 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'sheep-3.jpg',
            'left': 'gulu3.png',
            'right': 'norl3.png',
            'correct_answer': 0
        }
    ]
};
let test_procedure_5_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/duck_ka_norl3.wav',
            'image': 'duck-3.jpg',
      
        },
        {
            'audio': 'wav/sheep_ka_norl3.wav',
            'image': 'sheep-3.jpg',
       
        },
        {
            'audio': 'wav/pig_ka_norl3.wav',
            'image': 'pig-5.jpg',
        
        },
        {
            'audio': 'wav/chicken_ka_norl3.wav',
            'image': 'chicken-5.jpg',
      
        },
    ]
};
let test_procedure_5 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'chicken-5.jpg',
            'left': 'gulu9.png',
            'right': 'norl9.png',
            'correct_answer': 0
        }
    ]
};
let test_procedure_6_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/pig_po_norl3.wav',
            'image': 'pig-3.jpg',
        
        },
        {
            'audio': 'wav/duck_po_norl3.wav',
            'image': 'duck-5.jpg',
          
        },
        {
            'audio': 'wav/chicken_po_norl3.wav',
            'image': 'chicken-3.jpg',
           
        },
        {
            'audio': 'wav/sheep_po_norl3.wav',
            'image': 'sheep-5.jpg',
         
        },
    ]
};

let test_procedure_6 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'sheep-5.jpg',
            'left': 'gulu5.png',
            'right': 'norl4.png',
            'correct_answer': '1'
        }
    ]
};

let test_procedure_7_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/chicken_ka_norl3.wav',
            'image': 'chicken-5.jpg',
         
        },
        {
            'audio': 'wav/sheep_ka_norl3.wav',
            'image': 'sheep-3.jpg',
      
        },
        {
            'audio': 'wav/pig_ka_norl3.wav',
            'image': 'pig-5.jpg',
     
        },
        {
            'audio': 'wav/duck_ka_norl3.wav',
            'image': 'duck-3.jpg',
         
        }
    ]
};
let test_procedure_7 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'duck-3.jpg',
            'left': 'gulu3.png',
            'right': 'norl3.png',
            'correct_answer': 0
        }
    ]
};
let test_procedure_8_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/sheep_po_norl3.wav',
            'image': 'sheep-5.jpg',

        },
        {
            'audio': 'wav/duck_po_norl3.wav',
            'image': 'duck-5.jpg',

        },
        {
            'audio': 'wav/pig_po_norl3.wav',
            'image': 'pig-3.jpg',
    
        },
        {
            'audio': 'wav/chicken_po_norl3.wav',
            'image': 'chicken-3.jpg',

        }
    ]
};

let test_procedure_8 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'chicken-3.jpg',
            'left': 'gulu6.png',
            'right': 'norl7.png',
            'correct_answer': '1'
        }
    ]
};

let test_procedure_9_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/cat_ka_norl3.wav',
            'image': 'cat-3.jpg',
       
        },
        {
            'audio': 'wav/dog_ka_norl3.wav',
            'image': 'dog-5.jpg',
        
        },
        {
            'audio': 'wav/cow_ka_norl3.wav',
            'image': 'cow-3.jpg',
         
        },
        {
            'audio': 'wav/horse_ka_norl3.wav',
            'image': 'horse-5.jpg',
         
        }
    ]
};

let test_procedure_9 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'horse-5.jpg',
            'left': 'gulu8.png',
            'right': 'norl8.png',
            'correct_answer': 0
        }
    ]
};

let test_procedure_10_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/horse_ka_norl3.wav',
            'image': 'horse-5.jpg',
        
        },
        {
            'audio': 'wav/cat_ka_norl3.wav',
            'image': 'cat-3.jpg',
         
        },
        {
            'audio': 'wav/dog_ka_norl3.wav',
            'image': 'dog-5.jpg',
         
        },
        {
            'audio': 'wav/cow_ka_norl3.wav',
            'image': 'cow-3.jpg',
          
        },
    ]
};


let test_procedure_10 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'cow-3.jpg',
            'left': 'gulu8.png',
            'right': 'norl8.png',
            'correct_answer': 0
        }
    ]
};

let test_procedure_11_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/dog_po_norl3.wav',
            'image': 'dog-3.jpg',
    
        },
        {
            'audio': 'wav/cat_po_norl3.wav',
            'image': 'cat-5.jpg',
        
        },
        {
            'audio': 'wav/cow_po_norl3.wav',
            'image': 'cow-5.jpg',
           
        },
        {
            'audio': 'wav/horse_po_norl3.wav',
            'image': 'horse-3.jpg',
 
        }
    ]
};

let test_procedure_11 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'horse-3.jpg',
            'left': 'gulu2.png',
            'right': 'norl2.png',
            'correct_answer': '1'
        }
    ]
};

let test_procedure_12_listen = {
    ...test_trial_listen_procedure_base,
    timeline_variables: [
        {
            'audio': 'wav/cow_po_norl3.wav',
            'image': 'cow-5.jpg',
 
        },
        {
            'audio': 'wav/horse_po_norl3.wav',
            'image': 'horse-3.jpg',

        },
        {
            'audio': 'wav/dog_po_norl3.wav',
            'image': 'dog-3.jpg',

        },
        {
            'audio': 'wav/cat_po_norl3.wav',
            'image': 'cat-5.jpg',

        }
    ]
};

let test_procedure_12 = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'prompt_audio_short.wav',
            'image': 'cat-5.jpg',
            'left': 'gulu9.png',
            'right': 'norl9.png',
            'correct_answer': '1'
        }
    ]
};