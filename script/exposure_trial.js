let exposure_trial= {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        const video = jsPsych.evaluateTimelineVariable('video');
        const video_position = jsPsych.evaluateTimelineVariable('video_position');
        // const wrong_button_position = jsPsych.evaluateTimelineVariable('wrong_button_position');
        // const wrong_button_image = jsPsych.evaluateTimelineVariable('wrong_button_image');
        const image = jsPsych.evaluateTimelineVariable('image');
        const image_position = jsPsych.evaluateTimelineVariable('image_position');


        return generateExposureStimulusNew(`video/${video}`, video_position, `image/${image}`, image_position);
    },
    choices: ['ENTER'],
    data: {
        task: "exposure",
        image: jsPsych.timelineVariable('image'),
        video: jsPsych.timelineVariable('video'),
    },

    on_load: async function () {
        // Find video element and play video
        var video = document.getElementById(VIDEO_ELEMENT_ID);
        playVideo(video);
        // Wait for the video to finish
        await waitForVideoToEnd(video);
    },
};