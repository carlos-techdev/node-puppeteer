function checkitagain() {
  "use strict";
  var devtools = {
    open: false,
    orientation: null,
  };
  var threshold = 300;
  var emitEvent = function (state, orientation) {
    window.dispatchEvent(
      new CustomEvent("devtoolschange", {
        detail: {
          open: state,
          orientation: orientation,
        },
      })
    );
  };

  var widthThreshold = window.outerWidth - window.innerWidth > threshold;
  var heightThreshold = window.outerHeight - window.innerHeight > threshold;
  var orientation = widthThreshold ? "vertical" : "horizontal";

  alert("outerWidth: " + window.outerWidth);
  alert("innerWidth: " + window.innerWidth);
  alert("outerHeight: " + outerHeight);
  alert("innerHeight: " + innerHeight);
  alert(orientation)
  alert(window.Firebug)

  if (
    !(heightThreshold && widthThreshold) &&
    ((window.Firebug &&
      window.Firebug.chrome &&
      window.Firebug.chrome.isInitialized) ||
      widthThreshold ||
      heightThreshold)
  ) {
    if (devtools.open || devtools.orientation !== orientation) {
      emitEvent(true, orientation);
    }

    devtools.open = true;
    devtools.orientation = orientation;
  } else {
    if (devtools.open) {
      emitEvent(false, null);
    }

    devtools.open = false;
    devtools.orientation = null;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = devtools;
  } else {
    window.devtools = devtools;
  }
  return window.devtools.open;
}

bob = checkitagain();

alert(bob);

if (bob === false) {
  //define CustomError
  class CustomError extends Error {
    constructor(message) {
      super(message);
    }
  }

  let customError = new CustomError();

  Object.defineProperties(customError, {
    message: {
      get() {
        alert("it is open");
      },
    },
    toString: {
      value() {
        new Error().stack.includes("toString") && errorlog1(starttime);
      },
    },
  });

  console.log(customError.message);
}
