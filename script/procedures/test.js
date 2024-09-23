const test_trial_procedure_base = {
    timeline: [test_trial],
};

// Only for testing, replace with the actual test procedure
let test_procedure_test = {
    ...test_trial_procedure_base,
    timeline_variables: [
        {
            'audio': 'duck_ka_norl3.wav',
            'image': 'duck-3.jpg',
            'left': 'gulu5.png',
            'right': 'norl4.png',
            'correct_answer': 0
        },
        {
            'audio': 'pig_po_norl3.wav',
            'image': 'pig-3.jpg',
            'left': 'gulu5.png',
            'right': 'norl4.png',
            'correct_answer': '1'
        },
    ]
};

// All test trials converted from Index_test_deterministic_v2 (2).csv
let test_procedure_timeline_variables = [[{
    'audio': 'duck_ka_norl3.wav',
    'image': 'duck-3.jpg',
    'left': 'gulu2.png',
    'right': 'norl2.png',
    'correct_answer': 0
},
{
    'audio': 'pig_ka_norl3.wav',
    'image': 'pig-5.jpg',
    'left': 'gulu2.png',
    'right': 'norl2.png',
    'correct_answer': 0
},
{
    'audio': 'sheep_ka_norl3.wav',
    'image': 'sheep-3.jpg',
    'left': 'gulu2.png',
    'right': 'norl2.png',
    'correct_answer': 0
},
{
    'audio': 'chicken_ka_norl3.wav',
    'image': 'chicken-5.jpg',
    'left': 'gulu2.png',
    'right': 'norl2.png',
    'correct_answer': 0
},
{
    'audio': 'pig_po_norl3.wav',
    'image': 'pig-3.jpg',
    'left': 'gulu5.png',
    'right': 'norl4.png',
    'correct_answer': '1'
},
{
    'audio': 'chicken_po_norl3.wav',
    'image': 'chicken-3.jpg',
    'left': 'gulu5.png',
    'right': 'norl4.png',
    'correct_answer': '1'
},
{
    'audio': 'sheep_po_norl3.wav',
    'image': 'sheep-5.jpg',
    'left': 'gulu5.png',
    'right': 'norl4.png',
    'correct_answer': '1'
},
{
    'audio': 'duck_po_norl3.wav',
    'image': 'duck-5.jpg',
    'left': 'gulu5.png',
    'right': 'norl4.png',
    'correct_answer': '1'
},
{
    'audio': 'sheep_po_norl3.wav',
    'image': 'sheep-5.jpg',
    'left': 'gulu6.png',
    'right': 'norl7.png',
    'correct_answer': '1'
},
{
    'audio': 'chicken_po_norl3.wav',
    'image': 'chicken-3.jpg',
    'left': 'gulu6.png',
    'right': 'norl7.png',
    'correct_answer': '1'
},
{
    'audio': 'duck_po_norl3.wav',
    'image': 'duck-5.jpg',
    'left': 'gulu6.png',
    'right': 'norl7.png',
    'correct_answer': '1'
},
{
    'audio': 'pig_po_norl3.wav',
    'image': 'pig-3.jpg',
    'left': 'gulu6.png',
    'right': 'norl7.png',
    'correct_answer': '1'
},
{
    'audio': 'chicken_ka_norl3.wav',
    'image': 'chicken-5.jpg',
    'left': 'gulu3.png',
    'right': 'norl3.png',
    'correct_answer': 0
},
{
    'audio': 'duck_ka_norl3.wav',
    'image': 'duck-3.jpg',
    'left': 'gulu3.png',
    'right': 'norl3.png',
    'correct_answer': 0
},
{
    'audio': 'pig_ka_norl3.wav',
    'image': 'pig-5.jpg',
    'left': 'gulu3.png',
    'right': 'norl3.png',
    'correct_answer': 0
},
{
    'audio': 'sheep_ka_norl3.wav',
    'image': 'sheep-3.jpg',
    'left': 'gulu3.png',
    'right': 'norl3.png',
    'correct_answer': 0
},
{
    'audio': 'duck_ka_norl3.wav',
    'image': 'duck-3.jpg',
    'left': 'gulu9.png',
    'right': 'norl9.png',
    'correct_answer': 0
},
{
    'audio': 'sheep_ka_norl3.wav',
    'image': 'sheep-3.jpg',
    'left': 'gulu9.png',
    'right': 'norl9.png',
    'correct_answer': 0
},
{
    'audio': 'pig_ka_norl3.wav',
    'image': 'pig-5.jpg',
    'left': 'gulu9.png',
    'right': 'norl9.png',
    'correct_answer': 0
},
{
    'audio': 'chicken_ka_norl3.wav',
    'image': 'chicken-5.jpg',
    'left': 'gulu9.png',
    'right': 'norl9.png',
    'correct_answer': 0
},
{
    'audio': 'pig_po_norl3.wav',
    'image': 'pig-3.jpg',
    'left': 'gulu5.png',
    'right': 'norl4.png',
    'correct_answer': '1'
},
{
    'audio': 'duck_po_norl3.wav',
    'image': 'duck-5.jpg',
    'left': 'gulu5.png',
    'right': 'norl4.png',
    'correct_answer': '1'
},
{
    'audio': 'chicken_po_norl3.wav',
    'image': 'chicken-3.jpg',
    'left': 'gulu5.png',
    'right': 'norl4.png',
    'correct_answer': '1'
},
{
    'audio': 'sheep_po_norl3.wav',
    'image': 'sheep-5.jpg',
    'left': 'gulu5.png',
    'right': 'norl4.png',
    'correct_answer': '1'
},
{
    'audio': 'chicken_ka_norl3.wav',
    'image': 'chicken-5.jpg',
    'left': 'gulu3.png',
    'right': 'norl3.png',
    'correct_answer': 0
},
{
    'audio': 'sheep_ka_norl3.wav',
    'image': 'sheep-3.jpg',
    'left': 'gulu3.png',
    'right': 'norl3.png',
    'correct_answer': 0
},
{
    'audio': 'pig_ka_norl3.wav',
    'image': 'pig-5.jpg',
    'left': 'gulu3.png',
    'right': 'norl3.png',
    'correct_answer': 0
},
{
    'audio': 'duck_ka_norl3.wav',
    'image': 'duck-3.jpg',
    'left': 'gulu3.png',
    'right': 'norl3.png',
    'correct_answer': 0
},
{
    'audio': 'sheep_po_norl3.wav',
    'image': 'sheep-5.jpg',
    'left': 'gulu6.png',
    'right': 'norl7.png',
    'correct_answer': '1'
},
{
    'audio': 'duck_po_norl3.wav',
    'image': 'duck-5.jpg',
    'left': 'gulu6.png',
    'right': 'norl7.png',
    'correct_answer': '1'
},
{
    'audio': 'pig_po_norl3.wav',
    'image': 'pig-3.jpg',
    'left': 'gulu6.png',
    'right': 'norl7.png',
    'correct_answer': '1'
},
{
    'audio': 'chicken_po_norl3.wav',
    'image': 'chicken-3.jpg',
    'left': 'gulu6.png',
    'right': 'norl7.png',
    'correct_answer': '1'
},
{
    'audio': 'cat_ka_norl3.wav',
    'image': 'cat-3.jpg',
    'left': 'gulu8.png',
    'right': 'norl8.png',
    'correct_answer': 0
},
{
    'audio': 'dog_ka_norl3.wav',
    'image': 'dog-5.jpg',
    'left': 'gulu8.png',
    'right': 'norl8.png',
    'correct_answer': 0
},
{
    'audio': 'cow_ka_norl3.wav',
    'image': 'cow-3.jpg',
    'left': 'gulu8.png',
    'right': 'norl8.png',
    'correct_answer': 0
},
{
    'audio': 'horse_ka_norl3.wav',
    'image': 'horse-5.jpg',
    'left': 'gulu8.png',
    'right': 'norl8.png',
    'correct_answer': 0
},
{
    'audio': 'horse_ka_norl3.wav',
    'image': 'horse-5.jpg',
    'left': 'gulu8.png',
    'right': 'norl8.png',
    'correct_answer': 0
},
{
    'audio': 'cat_ka_norl3.wav',
    'image': 'cat-3.jpg',
    'left': 'gulu8.png',
    'right': 'norl8.png',
    'correct_answer': 0
},
{
    'audio': 'dog_ka_norl3.wav',
    'image': 'dog-5.jpg',
    'left': 'gulu8.png',
    'right': 'norl8.png',
    'correct_answer': 0
},
{
    'audio': 'cow_ka_norl3.wav',
    'image': 'cow-3.jpg',
    'left': 'gulu8.png',
    'right': 'norl8.png',
    'correct_answer': 0
},
{
    'audio': 'dog_po_norl3.wav',
    'image': 'dog-3.jpg',
    'left': 'gulu2.png',
    'right': 'norl2.png',
    'correct_answer': '1'
},
{
    'audio': 'cat_po_norl3.wav',
    'image': 'cat-5.jpg',
    'left': 'gulu2.png',
    'right': 'norl2.png',
    'correct_answer': '1'
},
{
    'audio': 'cow_po_norl3.wav',
    'image': 'cow-5.jpg',
    'left': 'gulu2.png',
    'right': 'norl2.png',
    'correct_answer': '1'
},
{
    'audio': 'horse_po_norl3.wav',
    'image': 'horse-3.jpg',
    'left': 'gulu2.png',
    'right': 'norl2.png',
    'correct_answer': '1'
},
{
    'audio': 'cow_po_norl3.wav',
    'image': 'cow-5.jpg',
    'left': 'gulu9.png',
    'right': 'norl9.png',
    'correct_answer': '1'
},
{
    'audio': 'horse_po_norl3.wav',
    'image': 'horse-3.jpg',
    'left': 'gulu9.png',
    'right': 'norl9.png',
    'correct_answer': '1'
},
{
    'audio': 'dog_po_norl3.wav',
    'image': 'dog-3.jpg',
    'left': 'gulu9.png',
    'right': 'norl9.png',
    'correct_answer': '1'
},
{
    'audio': 'cat_po_norl3.wav',
    'image': 'cat-5.jpg',
    'left': 'gulu9.png',
    'right': 'norl9.png',
    'correct_answer': '1'
}]];