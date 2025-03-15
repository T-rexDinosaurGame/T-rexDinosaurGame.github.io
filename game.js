// Utility Functions
function hideClass(name) {
    var myClasses = document.querySelectorAll(name),
        i = 0,
        l = myClasses.length;
    for (i; i < l; i++) {
        myClasses[i].style.display = 'none';
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vibrate(duration) {
    if (IS_MOBILE && window.navigator.vibrate) {
        window.navigator.vibrate(duration);
    }
}

function createCanvas(container, width, height, opt_classname) {
    var canvas = document.createElement('canvas');
    canvas.className = opt_classname ? Runner.classes.CANVAS + ' ' + opt_classname : Runner.classes.CANVAS;
    canvas.width = width;
    canvas.height = height;
    container.appendChild(canvas);
    return canvas;
}

function decodeBase64ToArrayBuffer(base64String) {
    var len = (base64String.length / 4) * 3;
    var str = atob(base64String);
    var arrayBuffer = new ArrayBuffer(len);
    var bytes = new Uint8Array(arrayBuffer);
    for (var i = 0; i < len; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes.buffer;
}

function getTimeStamp() {
    return IS_IOS ? new Date().getTime() : performance.now();
}

// Runner Class
function Runner(outerContainerId, opt_config) {
    if (Runner.instance_) {
        return Runner.instance_;
    }
    Runner.instance_ = this;
    this.outerContainerEl = document.querySelector(outerContainerId);
    this.containerEl = null;
    this.detailsButton = this.outerContainerEl.querySelector('#details-button');
    this.config = opt_config || Runner.config;
    this.dimensions = Runner.defaultDimensions;
    this.canvas = null;
    this.canvasCtx = null;
    this.tRex = null;
    this.distanceMeter = null;
    this.distanceRan = 0;
    this.highestScore = 0;
    this.time = 0;
    this.runningTime = 0;
    this.msPerFrame = 1000 / FPS;
    this.currentSpeed = this.config.SPEED;
    this.obstacles = [];
    this.started = false;
    this.activated = false;
    this.crashed = false;
    this.paused = false;
    this.resizeTimerId_ = null;
    this.playCount = 0;
    this.audioBuffer = null;
    this.soundFx = {};
    this.audioContext = null;
    this.images = {};
    this.imagesLoaded = 0;
    this.loadImages();
}

var DEFAULT_WIDTH = 600;
var FPS = 60;
var IS_HIDPI = window.devicePixelRatio > 1;
var IS_IOS = window.navigator.userAgent.indexOf('UIWebViewForStaticFileContent') > -1;
var IS_MOBILE = window.navigator.userAgent.indexOf('Mobi') > -1 || IS_IOS;
var IS_TOUCH_ENABLED = 'ontouchstart' in window;

Runner.config = {
    ACCELERATION: 0.001,
    BG_CLOUD_SPEED: 0.2,
    BOTTOM_PAD: 10,
    CLEAR_TIME: 3000,
    CLOUD_FREQUENCY: 0.5,
    GAMEOVER_CLEAR_TIME: 750,
    GAP_COEFFICIENT: 0.6,
    GRAVITY: 0.6,
    INITIAL_JUMP_VELOCITY: 12,
    MAX_CLOUDS: 6,
    MAX_OBSTACLE_LENGTH: 3,
    MAX_SPEED: 12,
    MIN_JUMP_HEIGHT: 35,
    MOBILE_SPEED_COEFFICIENT: 1.2,
    RESOURCE_TEMPLATE_ID: 'audio-resources',
    SPEED: 6,
    SPEED_DROP_COEFFICIENT: 3
};

Runner.defaultDimensions = {
    WIDTH: DEFAULT_WIDTH,
    HEIGHT: 150
};

Runner.classes = {
    CANVAS: 'runner-canvas',
    CONTAINER: 'runner-container',
    CRASHED: 'crashed',
    ICON: 'icon-offline',
    TOUCH_CONTROLLER: 'controller'
};

Runner.imageSources = {
    LDPI: [
        {name: 'CACTUS_LARGE', id: '1x-obstacle-large'},
        {name: 'CACTUS_SMALL', id: '1x-obstacle-small'},
        {name: 'CLOUD', id: '1x-cloud'},
        {name: 'HORIZON', id: '1x-horizon'},
        {name: 'RESTART', id: '1x-restart'},
        {name: 'TEXT_SPRITE', id: '1x-text'},
        {name: 'TREX', id: '1x-trex'}
    ],
    HDPI: [
        {name: 'CACTUS_LARGE', id: '2x-obstacle-large'},
        {name: 'CACTUS_SMALL', id: '2x-obstacle-small'},
        {name: 'CLOUD', id: '2x-cloud'},
        {name: 'HORIZON', id: '2x-horizon'},
        {name: 'RESTART', id: '2x-restart'},
        {name: 'TEXT_SPRITE', id: '2x-text'},
        {name: 'TREX', id: '2x-trex'}
    ]
};

Runner.sounds = {
    BUTTON_PRESS: 'offline-sound-press',
    HIT: 'offline-sound-hit',
    SCORE: 'offline-sound-reached'
};

Runner.keycodes = {
    JUMP: {'38': 1, '32': 1},
    DUCK: {'40': 1},
    RESTART: {'13': 1}
};

Runner.events = {
    ANIM_END: 'webkitAnimationEnd',
    CLICK: 'click',
    KEYDOWN: 'keydown',
    KEYUP: 'keyup',
    MOUSEDOWN: 'mousedown',
    MOUSEUP: 'mouseup',
    RESIZE: 'resize',
    TOUCHEND: 'touchend',
    TOUCHSTART: 'touchstart',
    VISIBILITY: 'visibilitychange',
    BLUR: 'blur',
    FOCUS: 'focus',
    LOAD: 'load'
};

Runner.prototype = {
    // All Runner methods (updateConfigSetting, loadImages, init, update, etc.)
    // ... (full implementation from original code)
};

Runner.updateCanvasScaling = function(canvas, opt_width, opt_height) {
    // ... (full implementation from original code)
};

// Game Over Panel
function GameOverPanel(canvas, textSprite, restartImg, dimensions) {
    // ... (full implementation from original code)
}

GameOverPanel.dimensions = {
    // ... (full implementation from original code)
};

GameOverPanel.prototype = {
    // ... (full implementation from original code)
};

// Collision Detection
function checkForCollision(obstacle, tRex, opt_canvasCtx) {
    // ... (full implementation from original code)
}

function createAdjustedCollisionBox(box, adjustment) {
    // ... (full implementation from original code)
}

function drawCollisionBoxes(canvasCtx, tRexBox, obstacleBox) {
    // ... (full implementation from original code)
}

function boxCompare(tRexBox, obstacleBox) {
    // ... (full implementation from original code)
}

function CollisionBox(x, y, w, h) {
    // ... (full implementation from original code)
}

// Obstacle
function Obstacle(canvasCtx, type, obstacleImg, dimensions, gapCoefficient, speed) {
    // ... (full implementation from original code)
}

// Initialization
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    new Runner('.interstitial-wrapper');
} else {
    document.getElementById("main-frame-notchrome").style.display = "block";
}

if (navigator.userAgent.toLowerCase().indexOf('chrome') <= -1) {
    hideClass(".onlyforchrome");
}
