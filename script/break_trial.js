let break_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        const image = jsPsych.evaluateTimelineVariable('image');
        return generateFullScreenImageStimulus(`image/${image}`);
    },
    data: {
        task: "break",
        image: jsPsych.timelineVariable('image'),
        audio: jsPsych.timelineVariable('audio'),
        trial_duration: jsPsych.timelineVariable('trial_duration')
    },
    choices: [],
    trial_duration: jsPsych.timelineVariable('trial_duration'),
    on_load: async function () {
        // Play audio and show buttons at the same time
        const audio = jsPsych.evaluateTimelineVariable('audio');
        playSound(`wav/${audio}`);
    }
};