import * as PIXI from 'pixi.js';

window.addEventListener('DOMContentLoaded', () => {
  const app = new PIXI.Application({
    width: 400,
    height: 400,
    backgroundColor: 0x2c3e50
  });
  document.body.appendChild(app.view);

  app.loader
    .add('bunny', './images/bunny.png')
    .add('shader', './shader/fragmentShader.frag')
    .load(startup);

  function startup() {
    const bunny = new PIXI.Sprite(app.loader.resources.bunny.texture);
    bunny.anchor.set(1);
    app.stage.addChild(bunny);

    app.ticker.add(delta => {
      bunny.rotation += 0.1 * delta;
    });
  }
});
