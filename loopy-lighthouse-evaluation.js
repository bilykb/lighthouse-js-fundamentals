for (let tick = 100; tick <= 200; tick++) { // value tick has been assigned 100.  The stop condition is 200.  Tick will increase by 1 each loop.
  if (tick % 3 === 0 && tick % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (tick % 3 === 0) {
    console.log("Loopy");
  } else if (tick % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(tick);
  }
}