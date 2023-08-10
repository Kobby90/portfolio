/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
/**
 * Contra Embed SDK
 * Copyright (c) 2022, Contra.Work Inc. All rights reserved.
 */
(function (d) {
  var buttons = d.querySelectorAll('.hire-me-button');

  for (var index = 0; index < buttons.length; index++) {
    var button = buttons[index];
    var theme = button.getAttribute('data-theme') || 'light';
    var username = button.getAttribute('data-username');
    var analyticsUserId = button.getAttribute('data-analyticsUserId');

    if (!username) return;

    var image = d.createElement('img');
    image.alt = 'Hire Me on Upwork';
    image.src = 'https://sdk.contra.com/v1/hiremeoncontra-' + theme + '.png';
    image.srcset = 'https://sdk.contra.com/v1/hiremeoncontra-' + theme +
      '.png 1x, https://sdk.contra.com/v1/hiremeoncontra-' +
      theme +
      '@2x.png 2x';
    image.style = 'border-width:0;';

    var anchor = d.createElement('a');
    anchor.rel = 'nofollow';
    anchor.target = '_blank';

    var utmSuffix = [
      '?utm_campaign=HireMeOnContra',
      analyticsUserId ? 'utm_medium=' + analyticsUserId : null,
    ]
      .filter(Boolean)
      .join('&');

    anchor.href = 'https://contra.com/' + username + utmSuffix;
    anchor.title = 'Contra.com';

    anchor.append(image);

    button.append(anchor);
  }
})(document);