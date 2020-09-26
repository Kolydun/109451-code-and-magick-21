'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_BOTTOM_GAP = 40;

var textY = CLOUD_Y + 30;
var textX = CLOUD_X + 20;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0 , 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', textX, textY);
  ctx.fillText('Список результатов:', textX, textY + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    var barLeft = CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i;
    var barBottom = CLOUD_Y + CLOUD_HEIGHT - BAR_BOTTOM_GAP;
    var barHeight = BAR_HEIGHT * times[i] / maxTime;
    var barTop = barBottom - barHeight;
    ctx.fillText(players[i], barLeft, barBottom + BAR_BOTTOM_GAP / 2);
    ctx.fillText(Math.round(times[i]), barLeft, barTop - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.round(Math.random() * 100);
      ctx.fillStyle = 'hsl(240, 100%,' + saturation + '%)';
    }
    ctx.fillRect(
        barLeft,
        barTop,
        BAR_WIDTH,
        barHeight
    );
  }
};


