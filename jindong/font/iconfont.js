;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiala" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M783.52 370.752 512 642.272 240.48 370.752 195.232 416 512 732.768 828.768 416Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M364.8 640l403.2 0c19.2 0 38.4-12.8 44.8-32l76.8-332.8c6.4-12.8 0-25.6-6.4-38.4-6.4-12.8-25.6-19.2-38.4-19.2L294.4 217.6 275.2 134.4 153.6 134.4C140.8 134.4 128 140.8 128 153.6s12.8 25.6 25.6 25.6l83.2 0 38.4 166.4c0 0 0 0 0 0 0 6.4 0 6.4 0 12.8l57.6 236.8C307.2 608 281.6 640 281.6 678.4c0 25.6 12.8 44.8 25.6 57.6-12.8 12.8-25.6 38.4-25.6 57.6 0 44.8 38.4 83.2 83.2 83.2S448 844.8 448 800c0-12.8-6.4-25.6-6.4-38.4l275.2 0c-6.4 12.8-6.4 25.6-6.4 38.4 0 44.8 38.4 83.2 83.2 83.2s83.2-38.4 83.2-83.2c0-44.8-32-76.8-76.8-83.2 0 0-6.4 0-6.4 0L364.8 716.8c0 0 0 0 0 0-19.2 0-38.4-19.2-38.4-38.4C332.8 659.2 345.6 640 364.8 640zM787.2 761.6c19.2 0 38.4 19.2 38.4 38.4S812.8 832 787.2 832c-19.2 0-38.4-19.2-38.4-38.4S768 761.6 787.2 761.6zM364.8 832c-19.2 0-38.4-19.2-38.4-38.4 0-19.2 19.2-38.4 38.4-38.4 0 0 0 0 0 0s0 0 0 0c19.2 0 38.4 19.2 38.4 38.4C403.2 819.2 384 832 364.8 832zM768 595.2l-384 0L332.8 371.2l486.4 0L768 595.2zM844.8 262.4 832 326.4 320 326.4 307.2 268.8 844.8 262.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-location" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998977 959.752744c0 0-335.814302-374.240473-335.814302-559.692209 0-185.447642 150.362566-335.814302 335.814302-335.814302 185.455829 0 335.816349 150.367683 335.816349 335.814302C847.815325 585.512271 511.998977 959.752744 511.998977 959.752744zM511.998977 273.257547c-70.02689 0-126.805034 56.779168-126.805034 126.805034 0 70.02996 56.778144 126.807081 126.805034 126.807081 70.028936 0 126.806057-56.777121 126.806057-126.807081C638.805034 330.036715 582.027913 273.257547 511.998977 273.257547z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuokuang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M879.358227 793.020348 743.99119 666.456814c37.216623-53.892421 59.010999-119.123075 59.010999-189.418071 0-185.131441-151.051251-335.217714-337.361541-335.217714-186.308243 0-337.361541 150.086274-337.361541 335.217714s151.053298 335.217714 337.361541 335.217714c78.106916 0 150.007479-26.38902 207.188806-70.668503l135.423319 126.581953c20.843724 19.507286 53.717436 18.525935 73.355705-2.223644C901.273353 845.182358 900.256186 812.550147 879.358227 793.020348zM206.295971 477.038744c0-142.531204 116.115578-258.057357 259.344676-258.057357s259.343653 115.527177 259.343653 258.057357c0 142.518924-116.115578 258.057357-259.343653 258.057357S206.295971 619.557668 206.295971 477.038744z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuoyoujiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M293.602 508.815c0-5.248 2.016-9.872 6.049-13.889l281.728-281.743c4.033-4.033 8.672-6.032 13.92-6.032s9.872 2 13.904 6.032l30.225 30.24c4.033 4.033 6.048 8.656 6.048 13.904 0 5.233-2.016 9.872-6.048 13.904l-237.6 237.6 237.601 237.585c4.033 4.033 6.048 8.656 6.048 13.904s-2.016 9.887-6.049 13.92l-30.224 30.224c-4.033 4.033-8.656 6.048-13.904 6.048s-9.887-2.016-13.92-6.049l-281.728-281.729c-4.031-4.031-6.049-8.672-6.049-13.92z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuoyoujiantou-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M730.398 515.185c0 5.248-2.016 9.872-6.049 13.889l-281.728 281.743c-4.033 4.033-8.672 6.032-13.92 6.032s-9.872-2-13.904-6.032l-30.225-30.24c-4.033-4.033-6.048-8.656-6.048-13.904 0-5.233 2.016-9.872 6.048-13.904l237.6-237.6-237.601-237.585c-4.033-4.033-6.048-8.656-6.048-13.904s2.016-9.887 6.049-13.92l30.224-30.224c4.033-4.033 8.656-6.048 13.904-6.048s9.887 2.016 13.92 6.049l281.728 281.729c4.031 4.031 6.049 8.672 6.049 13.92z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti6-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M632.009 499.13l-383.436 372.786 91.747 75.264 446.922-451.587-473.978-444.55-76.432 84.673z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)