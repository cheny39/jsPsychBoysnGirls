let peer_preference_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 
     `<div style="margin-bottom: 12px;"> </div>`,

    // `<div style="margin-bottom: 12px;">Who do you want to be friends with?</div>`,

  choices: 
  
  function () {
    const leftImg  = jsPsych.evaluateTimelineVariable('left_image');
    const rightImg = jsPsych.evaluateTimelineVariable('right_image');

    return ([
      `<img src="image/${leftImg}"  alt="Left option"  style="width:270px; height:400px; object-fit:contain;">`,
      `<img src="image/${rightImg}" alt="Right option" style="width:270px; height:400px; object-fit:contain;">`
    ]);
  },

button_html: function(choice, choice_index) {
    // Get position variables from the timeline
    const leftPos = jsPsych.evaluateTimelineVariable('left_image_position');
    const rightPos = jsPsych.evaluateTimelineVariable('right_image_position');
    
    let position_style = '';
    // Apply left or right position based on the button's index
    if (choice_index === 0) { // First button
        position_style = `position:absolute; left:${leftPos.left}px; top: ${leftPos.top}px`;
    } else { // Second button
        position_style = `position:absolute; left:${rightPos.left}px; top: ${rightPos.top}px`;
    }

    // 3. Return the complete HTML for ONE button, including data-choice and the choice content.
    return `<button class="jspsych-btn" data-choice="${choice_index}" style="${position_style}">${choice}</button>`;
},

  // IMPORTANT: do NOT define button_html here (let plugin keep its own)
    data: {
        task: "peer_preference",
        left_image: jsPsych.timelineVariable('left_image'),
        right_image: jsPsych.timelineVariable('right_image'),
    },
};
