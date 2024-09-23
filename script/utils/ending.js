let test_trial_listen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        const image = jsPsych.evaluateTimelineVariable('image');
        return generateTestStimulus('image/' + image, 'image/background.png');
    },
    choices: [],
    trial_duration: 1500,
    data: {
        task: "test",
        image: jsPsych.timelineVariable('image'),
        audio: jsPsych.timelineVariable('audio'),
    },
    on_load: async function () {
        // Play audio and show buttons at the same time
        const audio = jsPsych.evaluateTimelineVariable('audio');
        playSound(`wav/${audio}`);
    }
};