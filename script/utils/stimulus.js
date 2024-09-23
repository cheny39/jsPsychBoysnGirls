const VIDEO_ELEMENT_ID = "videoElement";
const WRONG_BUTTON_ELEMENT_ID = "wrongButton";
const CORRECT_BUTTON_ELEMENT_ID = "correctButton";

/**
 * Generates a exposure stimulus HTML element.
 * 
 * @param {string} video - The path to the video file.
 * @param {string} wrong_button_image - The path to the wrong button image file.
 * @param {string} wrong_button_position - The position of the wrong button.
 * @returns {string} The HTML string for the video stimulus.
 */
function generateExposureStimulus(video, wrong_button_image, wrong_button_position) {
    return `<div>
                <video id="${VIDEO_ELEMENT_ID}"><source src="${video}" type="video/mp4">Your browser does not support the video tag.</video>
                <button id="${WRONG_BUTTON_ELEMENT_ID}" class="jspsych-btn" style="position:absolute; left:${wrong_button_position.left}px; top: ${wrong_button_position.top}px">
                        <img src="${wrong_button_image}" style="width:240px; height:135px;">
                </button>
            </div>`;
}

/**
 * Generates an attention check stimulus HTML element.
 * 
 * @param {string} wrong_button_image - The path to the wrong button image file.
 * @param {string} wrong_button_position - The position of the wrong button.
 * @returns {string} The HTML string for the attention check stimulus.
 */
function generateAttentionCheckStimulus(wrong_button_image, wrong_button_position) {
    return `<div>
                <button id="${WRONG_BUTTON_ELEMENT_ID}" class="jspsych-btn" style="position:absolute; left:${wrong_button_position.left}px; top: ${wrong_button_position.top}px">
                        <img src="${wrong_button_image}" style="width:240px; height:135px;">
                </button>
            </div>`;
}

/**
 * Generates a full screen image stimulus HTML element.
 * 
 * @param {string} image - The path to the image file.
 * @returns {string} The HTML string for the full screen image stimulus.
 */
function generateFullScreenImageStimulus(image) {
    return `<div><img src="${image}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; background-color: black;"></img></div>`;
}

/**
 * Generates a test stimulus HTML element.
 * 
 * @param {string} image - The path to the image file.
 * @param {string} background_image - The path to the background image file.
 * @returns {string} The HTML string for the test stimulus.
 */
function generateTestStimulus(image, background_image) {
    return `<div>
        <img src="${background_image}" alt="Background" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
        <img src="${image}" alt="Foreground" style="position: absolute; transform: translate(-50%, -30%); height: 200px; width: 360px; z-index: 1;">
    </div>`;
}