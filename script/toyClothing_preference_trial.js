let tc_preference_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 
    // "Who do you want to be friend with?",
    `<div style="margin-bottom: 12px;">  </div>`,

  choices: 
  
  function () {
    const AImg  = jsPsych.evaluateTimelineVariable('A_image');
    const BImg = jsPsych.evaluateTimelineVariable('B_image');
    const CImg  = jsPsych.evaluateTimelineVariable('C_image');
    const DImg = jsPsych.evaluateTimelineVariable('D_image');
    const EImg  = jsPsych.evaluateTimelineVariable('E_image');
  


    return ([
      `<img src="image/${AImg}"  alt="Left option"  style="width:250px; height:360px; object-fit:contain;">`,
      `<img src="image/${BImg}" alt="Right option" style="width:250px; height:360px; object-fit:contain;">`,
      `<img src="image/${CImg}"  alt="Left option"  style="width:250px; height:360px; object-fit:contain;">`,
      `<img src="image/${DImg}" alt="Right option" style="width:250px; height:360px; object-fit:contain;">`,
      `<img src="image/${EImg}"  alt="Left option"  style="width:250px; height:360px; object-fit:contain;">`,
    ]);

  },

button_html: function(choice, choice_index) {
    // Get position variables from the timeline
    const APos = jsPsych.evaluateTimelineVariable('A_image_position');
    const BPos = jsPsych.evaluateTimelineVariable('B_image_position');
    const CPos = jsPsych.evaluateTimelineVariable('C_image_position');
    const DPos = jsPsych.evaluateTimelineVariable('D_image_position');
    const EPos = jsPsych.evaluateTimelineVariable('E_image_position');

    
    
    let position_style = '';
    // Apply left or right position based on the button's index
    if (choice_index === 0) { // First button
        position_style = `position:absolute; left:${APos.left}px; top: ${APos.top}px`;
    } 
    if (choice_index === 1) { // Second button
        position_style = `position:absolute; left:${BPos.left}px; top: ${BPos.top}px`;
    }
    if (choice_index === 2) { // Second button
        position_style = `position:absolute; left:${CPos.left}px; top: ${CPos.top}px`;
    }
    if (choice_index === 3) { // Second button
        position_style = `position:absolute; left:${DPos.left}px; top: ${DPos.top}px`;
    }
    if (choice_index === 4) { // Second button
        position_style = `position:absolute; left:${EPos.left}px; top: ${EPos.top}px`;
    }

    // 3. Return the complete HTML for ONE button, including data-choice and the choice content.
    return `<button class="jspsych-btn" data-choice="${choice_index}" style="${position_style}">${choice}</button>`;
},

    data: {
        task: "peer_preference",
        A_image: jsPsych.timelineVariable('A_image'),
        B_image: jsPsych.timelineVariable('B_image'),
        C_image: jsPsych.timelineVariable('C_image'),
        D_image: jsPsych.timelineVariable('D_image'),
        E_image: jsPsych.timelineVariable('E_image')
    },
    
};
