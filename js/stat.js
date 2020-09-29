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
var FONT_FAMILY = '16px PT Mono';
var SHADOW_COLOR = 'rgba(0 , 0, 0, 0.7)';
var CLOUD_COLOR = '#fff';
var TEXT_TOP = 'Ура вы победили!';
var TEXT_BOTTOM = 'Список результатов:';
var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
var TEXT_COLOR = '#000';
var barBottom = CLOUD_Y + CLOUD_HEIGHT - BAR_BOTTOM_GAP;

var textY = CLOUD_Y + 30;
var textX = CLOUD_X + 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, color, font, x, y, text) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
};

var renderName = function (ctx, player, x, y, color, font) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(player, x, y);
};

var renderTime = function (ctx, time, x, y, color, font) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(time, x, y);
};

var renderBars = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barLeft = CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i;
    var barHeight = BAR_HEIGHT * times[i] / maxTime;
    var barTop = barBottom - barHeight;
    renderName(ctx, players[i], barLeft, barBottom + BAR_BOTTOM_GAP / 2, TEXT_COLOR, FONT_FAMILY);
    renderTime(ctx, Math.round(times[i]), barLeft, barTop - GAP, TEXT_COLOR, FONT_FAMILY);
    if (players[i] === 'Вы') {
      ctx.fillStyle = PLAYER_COLOR;
    } else {
      var saturation = Math.round(Math.random() * 100);
      ctx.fillStyle = 'hsl(240, 100%,' + saturation + '%)';
    }
    ctx.fillRect(barLeft, barTop, BAR_WIDTH, barHeight);
  }
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
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  renderText(ctx, TEXT_COLOR, FONT_FAMILY, textX, textY, TEXT_TOP);
  renderText(ctx, TEXT_COLOR, FONT_FAMILY, textX, textY + FONT_GAP, TEXT_BOTTOM);
  renderBars(ctx, players, times);
};


