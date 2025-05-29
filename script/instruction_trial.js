// let instruction_trial = {
//     type: jsPsychHtmlEndTrialOnAudioFinish,
//     stimulus: function () {
//         const image = jsPsych.evaluateTimelineVariable('image');

//         return generateFullScreenImageStimulus(`image/${image}`);
//     },
//     choices: [],
//     data: {
//         task: "instruction",
//         image: jsPsych.timelineVariable('image'),
//         audio: jsPsych.timelineVariable('audio'),
//     },
//     // Need full path to the audio file here (e.g. including the wav/ prefix)
//     audio: jsPsych.timelineVariable('audio'),
// };


let instruction_trial = {
    type: jsPsychVideoKeyboardResponse,
    // stimulus: function () {
    //     const video = jsPsych.evaluateTimelineVariable('video');
    //     const video_position = jsPsych.evaluateTimelineVariable('video_position');
    //     return generateInstructionStimulus(`video/${video}`, video_position);
    // },
    stimulus: jsPsych.timelineVariable('video'),
    width:  jsPsych.timelineVariable('width'),
    height: jsPsych.timelineVariable('height'),
    // width:540,
    // height:540,
    // choices: "NO_KEYS",
    choices: ['ENTER'],
    trial_ends_after_video: false,
    autoplay: true
  };