
let WRONG_BUTTON_CLICKED = false;

var exposure_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        const video = jsPsych.evaluateTimelineVariable('video');
        const wrong_button_position = jsPsych.evaluateTimelineVariable('wrong_button_position');
        const wrong_button_image = jsPsych.evaluateTimelineVariable('wrong_button_image');
        return generateExposureStimulus(`video/${video}`, `image/${wrong_button_image}`, wrong_button_position);
    },
    choices: function () {
        return [`<img src="image/${jsPsych.evaluateTimelineVariable('correct_button_image')}" style="width:240px; height:135px;">`];
    },
    data: {
        task: "exposure",
        wrong_button_image: jsPsych.timelineVariable('wrong_button_image'),
        correct_button_image: jsPsych.timelineVariable('correct_button_image'),
        video: jsPsych.timelineVariable('video'),
        audio: jsPsych.timelineVariable('audio'),
    },
    button_html: () => {
        const correct_button_position = jsPsych.evaluateTimelineVariable('correct_button_position');
        const correct_button_image = jsPsych.evaluateTimelineVariable('correct_button_image');
        return `<button id="${CORRECT_BUTTON_ELEMENT_ID}" class="jspsych-btn" style="position:absolute; left:${correct_button_position.left}px; top: ${correct_button_position.top}px"><img src="image/${correct_button_image}" style="width:240px; height:135px;"></button>`;
    },
    on_load: async function () {
        document.getElementById(WRONG_BUTTON_ELEMENT_ID).addEventListener('click', function () {
            // Log if the wrong button is clicked
            WRONG_BUTTON_CLICKED = true;
            playSound(`wav/wrong.wav`);
            // Show a red outline around the wrong button for 2 seconds
            this.style.outline = "6px solid red";
            setTimeout(() => {
                this.style.outline = "none";
            }, 2000);
        });

        // Show button only after video finished playing
        // Hide buttons
        const button_ids = [CORRECT_BUTTON_ELEMENT_ID, WRONG_BUTTON_ELEMENT_ID];
        button_ids.forEach(button => {
            document.getElementById(button).style.visibility = "hidden";
            document.getElementById(button).disabled = true;
        });
        // Find video element and play video
        var video = document.getElementById(VIDEO_ELEMENT_ID);
        playVideo(video);
        // Wait for the video to finish
        await waitForVideoToEnd(video);

        // Play audio and show buttons at the same time
        const audio = jsPsych.evaluateTimelineVariable('audio');
        playSound(`wav/${audio}`);

        button_ids.forEach(button => {
            document.getElementById(button).style.visibility = "visible";
            document.getElementById(button).disabled = false;
        });
    },
    on_finish: async function (data) {
        // Always play the correct audio on finish since the user can only move on after they click the correct button
        playSound(`wav/correct.wav`);

        // Show green outline around the correct button [NOT WORKING!!! since everything on the screen has already been cleared on finish]
        // document.getElementById(CORRECT_BUTTON_ELEMENT_ID).style.outline = "6px solid green";

        // Wait for 2 seconds to ensure the sound has finished playing
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Record if the wrong button was clicked
        data.wrong_button_clicked = WRONG_BUTTON_CLICKED;
        // Reset the global flag for the next trial
        WRONG_BUTTON_CLICKED = false;
        // giveFeedback(correct);
    },
};