let test_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        const image = jsPsych.evaluateTimelineVariable('image');
        return generateTestStimulus('image/' + image, 'image/background.png');
    },
    choices: ['left', 'right'],
    button_html: (choice) => {
        return `<button class="jspsych-btn" style="position: absolute; ${choice}: -30px; top: 250px; z-index: 2; background-color: transparent; border: none;">
                    <img src="image/${jsPsych.evaluateTimelineVariable(choice)}" style="width: 250px; height: 375px"></img>
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

let test_trial_listen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        const image = jsPsych.evaluateTimelineVariable('image');
        return generateTestStimulus('image/' + image, 'image/background.png');
    },
    choices: [],
    trial_duration: 1500,
    data: {
        task: "test-listen",
        image: jsPsych.timelineVariable('image'),
        audio: jsPsych.timelineVariable('audio'),
    },
    on_load: async function () {
        // Play audio and show buttons at the same time
        const audio = jsPsych.evaluateTimelineVariable('audio');
        playSound(`wav/${audio}`);
    }
};
