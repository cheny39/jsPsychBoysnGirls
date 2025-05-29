const VIDEO_POSITIONS_INTRO = {
    'LEFT': {
        left: 10,
        top: 150
    },
    'CENTER': {
        left: 95,
        top: 150
    },
    'RIGHT': {
        left: 180,
        top: 150
    }
};

let introduction_trial_procedure1 = {
    timeline: [instruction_trial],
//     timeline_variables:
//         [
//         { video: '1.Welcome_to_our_language_learni.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video: '2.And_my_name_is_Henry.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video: '3-In_this_game-_you_will_listen_.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video:'4-In_this_first_part-_you_will_s.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER}
//   ]
    timeline_variables:
        [
        { video: ['video/1-Welcome_to_our_language_learni.mp4'], width: 540, height: 540},
        { video: ['video/three_girls.mp4'], width: 960, height: 540},
        { video: ['video/5-Hi-_my_name_is_Henry-_Im_also.mp4'], width:   540, height: 540},
        { video: ['video/three_boys.mp4'], width: 960, height: 540},
        { video: ['video/3-In_this_game-_you_will_listen_.mp4'], width: 540, height: 540},
        { video: ['video/4-In_this_first_part-_you_will_s.mp4'], width: 540, height: 540}
    ]
};




let introduction_trial_procedure2 = {
    timeline: [instruction_trial],
//     timeline_variables:
//         [
//         { video: '1.Welcome_to_our_language_learni.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video: '2.And_my_name_is_Henry.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video: '3-In_this_game-_you_will_listen_.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video:'4-In_this_first_part-_you_will_s.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER}
//   ]
    timeline_variables:
        [
        { video: ['video/5-Great_Job_with_level_1-_You_ar.mp4'], width: 540, height: 540},
        { video: ['video/6-_In_this_part-_you_will_guess_.mp4'], width: 540, height: 540},
        { video: ['video/7-or_I-_Henry-_would_describe_th.mp4'], width: 540, height: 540},
        { video: ['video/8-Here_we_go-.mp4'], width: 540, height: 540}
    ]
};

let introduction_trial_procedure3 = {
    timeline: [instruction_trial],
//     timeline_variables:
//         [
//         { video: '1.Welcome_to_our_language_learni.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video: '2.And_my_name_is_Henry.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video: '3-In_this_game-_you_will_listen_.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video:'4-In_this_first_part-_you_will_s.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER}
//   ]
    timeline_variables:
        [
       
        { video: ['video/10-Great_job_with_level_2-_You_ar.mp4'], width: 540, height: 540},
        { video: ['video/11-In_this_level-_you_will_descri.mp4'], width: 540, height: 540},
    ]
};

let introduction_trial_procedure4 = {
    timeline: [instruction_trial],
//     timeline_variables:
//         [
//         { video: '1.Welcome_to_our_language_learni.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video: '2.And_my_name_is_Henry.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video: '3-In_this_game-_you_will_listen_.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER},
//         { video:'4-In_this_first_part-_you_will_s.mp4', video_position: VIDEO_POSITIONS_INTRO.CENTER}
//   ]
    timeline_variables:
        [
       
        { video: ['video/12-Wow_great_job-_You_have_finish.mp4'], width: 540, height: 540},
        { video: ['video/15-See_you_next_time.mp4'], width: 540, height: 540},
    ]
};