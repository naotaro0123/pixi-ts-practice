import * as PIXI from 'pixi.js';

window.addEventListener('DOMContentLoaded', () => {
  const app = new PIXI.Application({
    width: 640,
    height: 360,
    backgroundColor: 0x2c3e50
  });
  document.body.appendChild(app.view);

  const background = PIXI.Sprite.from('./images/surfer-2335088_640.jpg');
  background.width = app.screen.width;
  background.height = app.screen.height;
  app.stage.addChild(background);

  app.stop();

  app.loader.add('shader', './shader/fragmentShader.frag').load(onLoaded);

  let filter: PIXI.Filter;

  function onLoaded(loader, res) {
    filter = new PIXI.Filter(null, res.shader.data, {
      customUniform: 0.0
    });

    background.filters = [filter];
    app.start();
  }

  app.ticker.add(delta => {
    filter.uniforms.customUniform += 0.04 * delta;
  });
});
