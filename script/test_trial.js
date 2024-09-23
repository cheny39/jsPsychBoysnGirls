let test_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        const image = jsPsych.evaluateTimelineVariable('image');
        return generateTestStimulus('image/' + image, 'image/break1_new.png');
    },
    choices: ['left', 'right'],
    button_html: (choice) => {
        return `<button class="jspsych-btn" style="position: absolute; ${choice}: 50px; top: 100px; z-index: 2;">
                    <img src="image/${jsPsych.evaluateTimelineVariable(choice)}"></img>
                 </button>`;
    },
    data: {
        task: "test",
        image: jsPsych.timelineVariable('image'),
        audio: jsPsych.timelineVariable('audio'),
        left: jsPsych.timelineVariable('left'),
        right: jsPsych.timelineVariable('right'),
        correct_answer: jsPsych.timelineVariable('correct_answer')
    },
    on_load: async function () {
        // Play audio and show buttons at the same time
        const audio = jsPsych.evaluateTimelineVariable('audio');
        playSound(`wav/${audio}`);
    }
};
