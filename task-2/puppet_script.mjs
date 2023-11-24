import puppeteer from 'puppeteer';
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';

const Config = {
    followNewTab: true,
    fps: 25,
    ffmpeg_Path: '<path of ffmpeg_path>' || null,
    videoFrame: {
      width: 1024,
      height: 768,
    },
    videoCrf: 18,
    videoCodec: 'libx264',
    videoPreset: 'ultrafast',
    videoBitrate: 1000,
    autopad: {
      color: 'black' | '#35A5FF',
    },
    aspectRatio: '4:3',
  };

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  const recorder = new PuppeteerScreenRecorder(page);
  await recorder.start('./report/video/simple.mp4');
  // Navigate the page to a URL
  await page.goto('https://interactly.video');


  await page.mouse.wheel({ deltaY: 300 });

  await new Promise(r => setTimeout(r, 2000));

  await page.mouse.wheel({ deltaY: 300 });

  await new Promise(r => setTimeout(r, 2000));

  await page.mouse.wheel({ deltaY: 300 });

  await page.mouse.wheel({ deltaY: 300 });

  await new Promise(r => setTimeout(r, 2000));
  await page.mouse.wheel({ deltaY: 300 });

  await page.mouse.wheel({ deltaY: 600 });

  await new Promise(r => setTimeout(r, 2000));
  await page.mouse.wheel({ deltaY: 800 });

  await new Promise(r => setTimeout(r, 2000));
  await page.mouse.wheel({ deltaY: 500 });

  await page.mouse.wheel({ deltaY: 800 });

  await new Promise(r => setTimeout(r, 2000));

  await page.mouse.wheel({ deltaY: 800 });

  await new Promise(r => setTimeout(r, 2000));

  await page.mouse.wheel({ deltaY: 800 });

  await new Promise(r => setTimeout(r, 2000));

  await page.mouse.wheel({ deltaY: 800 });

  await new Promise(r => setTimeout(r, 2000));

  await page.mouse.wheel({ deltaY: 800 });

  await new Promise(r => setTimeout(r, 2000));

  await page.mouse.wheel({ deltaY: 800 });

  await new Promise(r => setTimeout(r, 2000));

  await page.mouse.wheel({ deltaY: 800 });

  await new Promise(r => setTimeout(r, 2000));

  await page.mouse.wheel({ deltaY: 800 });

  await new Promise(r => setTimeout(r, 2000));

  await page.mouse.wheel({ deltaY: 800 });

  await new Promise(r => setTimeout(r, 2000));

  // await page.evaluate(() => {
  //   window.scrollTo(0, window.document.body.scrollHeight);
  // });

  await recorder.stop();

  await browser.close();

})();
