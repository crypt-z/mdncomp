/**
 *
 * @param mdnComp
 */
function compatToSVG(mdnComp) {
  // todo refactoring...
  const
    out = new Output(),
    desktopList = ["chrome", "edge", "firefox", "ie", "opera", "safari"],
    mobileListIcons = ["android", "chrome,android", "edge", "firefox,android", "opera,android", "safari"],

    desktopDesc = ["Chrome", "Edge", "Firefox", "IE", "Opera", "Safari"],
    mobileDesc = ["Webview for Android", "Chrome for Android", "Edge for mobile", "Firefox for Android", "Opera for Android", "Safari for iOS"],

    mobileList = ["webview_android", "chrome_android", "edge_mobile", "firefox_android", "opera_android", "safari_ios"],
    opts = {
      showDesktop: !options.mobile,
      showMobile: !options.desktop,
      showNotes: !options.noNotes
    },
    col1 = 0, //200,
    w = options.width,
    isMob = opts.showMobile,
    isDesk = opts.showDesktop,
    col2w = w - col1,
    colM = isMob && isDesk ? col2w / 2 + col1 : col1,
    cols = isMob && isDesk ? 12 : 6,
    step = col2w / cols,
    indent = 20,
    iconSize = 20,
    colIcon = "#676769",
    colYes = "#E4F7E1",
    colNo = "#FBE3E3",
    col1h = 50, col2h = 45;

  let
    notes = [],
    ref = 0,
    statusX = 1,
    h = col1h + col2h * 2,
    i, x;

  out.add("<svg xmlns=\"http://www.w3.org/2000/svg\" %1width=\"%0\">", options.width, mdnComp.url.length ? "xmlns:xlink=\"http://www.w3.org/1999/xlink\" " : "");

  out.add("<!-- Made with mdncomp v. ", version, " -->");

  if (opts.showDesktop || opts.showMobile) {
    addSymbol("chrome", "M8.071 13.954l-4.579-7.931c2.932-3.671 7.445-6.023 12.508-6.023 5.857 0 10.978 3.148 13.767 7.844h-13.055c-0.235-0.020-0.472-0.031-0.711-0.031-3.809 0-7.018 2.614-7.929 6.142zM21.728 10.156h9.171c0.711 1.81 1.101 3.781 1.101 5.844 0 8.776-7.066 15.9-15.818 15.998l6.544-11.334c0.921-1.324 1.462-2.932 1.462-4.664 0-2.287-0.943-4.357-2.459-5.844zM10.188 16c0-3.205 2.607-5.813 5.813-5.813s5.813 2.607 5.813 5.813c0 3.205-2.608 5.813-5.813 5.813s-5.813-2.608-5.813-5.813zM18.193 23.889l-4.581 7.934c-7.704-1.153-13.613-7.797-13.613-15.822 0-2.851 0.746-5.526 2.053-7.845l6.532 11.314c1.308 2.785 4.14 4.718 7.415 4.718 0.759 0 1.495-0.104 2.193-0.299z");
    addSymbol("firefox", "M31.954 10.442l-0.371 2.377c0 0-0.53-4.402-1.179-6.047-0.995-2.521-1.438-2.501-1.441-2.498 0.667 1.694 0.546 2.604 0.546 2.604s-1.181-3.219-4.303-4.243c-3.459-1.134-5.33-0.824-5.547-0.765-0.033-0-0.064-0-0.095-0 0.026 0.002 0.050 0.005 0.076 0.007-0.001 0.001-0.003 0.001-0.003 0.002 0.014 0.017 3.822 0.666 4.497 1.594 0 0-1.617 0-3.227 0.464-0.073 0.021 5.923 0.749 7.148 6.74 0 0-0.657-1.371-1.47-1.604 0.535 1.626 0.397 4.712-0.112 6.245-0.066 0.197-0.133-0.853-1.135-1.305 0.321 2.301-0.019 5.952-1.616 6.957-0.124 0.078 1.001-3.603 0.226-2.18-4.46 6.838-9.731 3.155-12.101 1.535 1.215 0.264 3.52-0.041 4.541-0.8 0.001-0.001 0.002-0.002 0.004-0.003 1.108-0.758 1.765-1.311 2.354-1.18s0.982-0.46 0.524-0.985c-0.459-0.526-1.572-1.249-3.079-0.855-1.063 0.278-2.379 1.454-4.389 0.264-1.543-0.914-1.688-1.673-1.702-2.199 0.038-0.186 0.086-0.361 0.143-0.52 0.178-0.496 0.716-0.646 1.015-0.764 0.508 0.087 0.946 0.246 1.405 0.481 0.006-0.153 0.008-0.356-0.001-0.586 0.044-0.088 0.017-0.352-0.054-0.674-0.041-0.322-0.107-0.655-0.211-0.959 0-0 0.001-0 0.001-0 0.002-0.001 0.003-0.001 0.005-0.002s0.005-0.004 0.007-0.006c0-0.001 0.001-0.001 0.001-0.002 0.003-0.004 0.005-0.008 0.006-0.015 0.032-0.144 0.376-0.423 0.804-0.722 0.383-0.268 0.834-0.553 1.19-0.774 0.314-0.195 0.554-0.34 0.605-0.378 0.019-0.015 0.042-0.032 0.068-0.051 0.005-0.004 0.009-0.007 0.014-0.011 0.003-0.002 0.006-0.005 0.009-0.007 0.169-0.135 0.421-0.389 0.474-0.924 0-0.001 0-0.002 0-0.004 0.002-0.016 0.003-0.032 0.004-0.048 0.001-0.011 0.002-0.023 0.002-0.034 0-0.009 0.001-0.018 0.001-0.027 0.001-0.021 0.002-0.043 0.002-0.065 0-0.001 0-0.002 0-0.004 0.001-0.052-0-0.106-0.003-0.163-0.002-0.032-0.004-0.060-0.009-0.086-0-0.001-0.001-0.003-0.001-0.004-0.001-0.003-0.001-0.005-0.002-0.008-0.001-0.005-0.002-0.009-0.004-0.013-0-0.001-0-0.001-0.001-0.001-0.002-0.005-0.004-0.010-0.005-0.014-0-0-0-0-0-0.001-0.055-0.128-0.26-0.177-1.108-0.191-0.001-0-0.002-0-0.002-0v0c-0.346-0.006-0.798-0.006-1.391-0.004-1.039 0.004-1.613-1.016-1.797-1.41 0.251-1.389 0.977-2.379 2.17-3.051 0.023-0.013 0.018-0.023-0.009-0.031 0.233-0.141-2.82-0.004-4.225 1.782-1.247-0.31-2.333-0.289-3.269-0.069-0.18-0.005-0.404-0.027-0.67-0.083-0.623-0.564-1.514-1.606-1.562-2.85 0 0-0.003 0.002-0.008 0.006-0.001-0.012-0.002-0.024-0.002-0.036 0 0-1.897 1.458-1.613 5.434-0.001 0.064-0.002 0.125-0.004 0.184-0.514 0.696-0.768 1.282-0.787 1.411-0.455 0.926-0.917 2.32-1.292 4.437 0 0 0.263-0.833 0.79-1.777-0.388 1.188-0.693 3.036-0.514 5.808 0 0 0.047-0.615 0.215-1.5 0.131 1.719 0.704 3.841 2.152 6.337 2.78 4.791 7.052 7.211 11.775 7.582 0.839 0.069 1.689 0.071 2.544 0.006 0.079-0.006 0.157-0.011 0.236-0.018 0.968-0.068 1.942-0.214 2.914-0.449 13.287-3.212 11.842-19.256 11.842-19.256z");
    addSymbol("edge", "M0.481 14.206c0.938-7.4 5.987-14.113 15.037-14.206 5.463 0.106 9.956 2.581 12.631 7.3 1.344 2.462 1.762 5.050 1.85 7.906v3.356h-20.081c0.094 8.281 12.188 8 17.394 4.35v6.744c-3.050 1.831-9.969 3.469-15.325 1.363-4.563-1.712-7.813-6.488-7.794-11.081-0.15-5.956 2.962-9.9 7.794-12.144-1.025 1.269-1.806 2.669-2.213 5.094h11.338c0 0 0.663-6.775-6.419-6.775-6.675 0.231-11.488 4.112-14.213 8.094v0z");
    addSymbol("opera", "M32 16v0 0c0 4.738-2.063 9-5.337 11.925-4.106 2-7.931 0.6-9.194-0.275 4.031-0.881 7.075-5.756 7.075-11.65s-3.044-10.769-7.075-11.656c1.269-0.875 5.094-2.275 9.194-0.275 3.275 2.931 5.337 7.194 5.337 11.931v0 0z", "M10.731 6.981c-1.769 2.087-2.912 5.175-2.987 8.644 0 0.006 0 0.744 0 0.756 0.075 3.462 1.225 6.55 2.994 8.637 2.294 2.981 5.706 4.869 9.519 4.869 2.344 0 4.538-0.712 6.413-1.956-2.837 2.531-6.575 4.069-10.669 4.069-0.256 0-0.512-0.006-0.762-0.019-8.481-0.4-15.238-7.4-15.238-15.981 0-8.838 7.162-16 16-16 0.019 0 0.038 0 0.063 0 4.075 0.013 7.787 1.55 10.606 4.075-1.875-1.244-4.069-1.962-6.413-1.962-3.813 0-7.225 1.887-9.525 4.869z");
    addSymbol("ie", "M22.944 19.651h7.377c0.057-0.512 0.080-1.034 0.080-1.569 0-2.507-0.673-4.858-1.848-6.883 1.215-3.228 1.172-5.968-0.455-7.606-1.547-1.54-5.697-1.29-10.388 0.787-0.347-0.026-0.697-0.040-1.051-0.040-6.439 0-11.841 4.431-13.335 10.402 2.020-2.586 4.145-4.461 6.984-5.826-0.258 0.242-1.764 1.739-2.018 1.993-7.486 7.484-9.847 17.26-7.306 19.8 1.931 1.93 5.43 1.604 9.449-0.364 1.869 0.952 3.984 1.488 6.226 1.488 6.035 0 11.15-3.885 13.003-9.295h-7.433c-1.023 1.887-3.023 3.171-5.319 3.171s-4.296-1.284-5.319-3.171c-0.455-0.852-0.716-1.83-0.716-2.864v-0.023h12.071zM10.884 16.025c0.171-3.035 2.694-5.456 5.774-5.456s5.604 2.421 5.774 5.456h-11.548zM28.030 5.119c1.048 1.059 1.021 3.007 0.125 5.438-1.535-2.341-3.766-4.186-6.4-5.239 2.816-1.207 5.106-1.367 6.274-0.199zM2.921 30.227c-1.337-1.337-0.934-4.144 0.788-7.526 1.072 3.008 3.161 5.534 5.854 7.161-2.982 1.354-5.423 1.584-6.643 0.365z");
//    addSymbol("safari", "Safari", "M16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.163 16-16-7.163-16-16-16zM29.95 14.775l-0.031-0.331c0.006 0.113 0.019 0.219 0.031 0.331zM27.762 8.4l-0.225-0.338c0.075 0.113 0.15 0.225 0.225 0.338zM26.894 7.206l-0.137-0.169c0.050 0.056 0.094 0.112 0.137 0.169zM24.956 5.237l-0.169-0.138c0.063 0.050 0.113 0.094 0.169 0.138zM23.938 4.463l-0.337-0.225c0.113 0.075 0.225 0.15 0.337 0.225zM17.556 2.087l-0.337-0.031c0.113 0.006 0.225 0.019 0.337 0.031zM14.775 2.050l-0.338 0.031c0.113-0.006 0.225-0.019 0.338-0.031zM8.4 4.237l-0.338 0.225c0.113-0.075 0.225-0.15 0.338-0.225zM7.206 5.106l-0.162 0.131c0.056-0.044 0.106-0.088 0.162-0.131zM5.237 7.044l-0.138 0.169c0.050-0.056 0.094-0.112 0.138-0.169zM4.463 8.063l-0.225 0.338c0.075-0.113 0.15-0.225 0.225-0.338zM2.087 14.444l-0.031 0.338c0.006-0.113 0.019-0.225 0.031-0.338zM2.050 17.225l0.031 0.337c-0.006-0.113-0.019-0.225-0.031-0.337zM4.237 23.594l0.225 0.337c-0.075-0.106-0.15-0.219-0.225-0.337zM4.5 23.988l2.494-1.669-0.275-0.419-2.494 1.669c-1.131-1.756-1.875-3.775-2.125-5.95l1.494-0.15-0.050-0.5-1.494 0.15c-0.025-0.288-0.038-0.581-0.044-0.875h3v-0.5h-3c0.006-0.294 0.019-0.581 0.044-0.875l1.494 0.144 0.050-0.5-1.494-0.144c0.25-2.175 1-4.194 2.131-5.95l2.494 1.669 0.275-0.419-2.5-1.656c0.169-0.237 0.338-0.475 0.519-0.7l1.156 0.95 0.319-0.388-1.156-0.95c0.188-0.225 0.388-0.438 0.588-0.65l2.119 2.119 0.356-0.356-2.119-2.119c0.213-0.2 0.425-0.4 0.644-0.588l0.95 1.162 0.387-0.319-0.95-1.156c0.231-0.181 0.463-0.356 0.7-0.525l1.669 2.494 0.419-0.275-1.669-2.494c1.756-1.131 3.775-1.875 5.95-2.125l0.15 1.494 0.5-0.050-0.15-1.494c0.287-0.025 0.581-0.038 0.875-0.044v3h0.5v-3c0.294 0.006 0.581 0.019 0.875 0.044l-0.144 1.494 0.5 0.050 0.144-1.494c2.175 0.25 4.194 1 5.95 2.131l-1.669 2.494 0.419 0.275 1.669-2.494c0.238 0.169 0.475 0.338 0.7 0.519l-0.95 1.156 0.387 0.319 0.95-1.156c0.225 0.188 0.438 0.388 0.65 0.588l-0.8 0.781-10.938 7.294-7.294 10.937-0.781 0.781c-0.2-0.212-0.4-0.425-0.588-0.644l1.156-0.95-0.319-0.387-1.156 0.95c-0.181-0.225-0.35-0.462-0.519-0.7zM5.237 24.956c-0.044-0.056-0.088-0.106-0.131-0.163l0.131 0.163zM7.044 26.762l0.162 0.131c-0.056-0.044-0.106-0.087-0.162-0.131zM8.063 27.531l0.338 0.225c-0.113-0.069-0.225-0.144-0.338-0.225zM14.444 29.913l0.338 0.031c-0.113-0.006-0.225-0.019-0.338-0.031zM17.225 29.95l0.331-0.031c-0.113 0.006-0.219 0.019-0.331 0.031zM23.6 27.762l0.337-0.225c-0.113 0.075-0.225 0.15-0.337 0.225zM24.794 26.894l0.169-0.137c-0.056 0.050-0.113 0.094-0.169 0.137zM25.887 25.913l0.025-0.025c-0.006 0.006-0.019 0.019-0.025 0.025zM26.762 24.956l0.137-0.169c-0.050 0.056-0.094 0.113-0.137 0.169zM26.981 24.688l-1.156-0.95-0.319 0.387 1.156 0.95c-0.188 0.225-0.387 0.438-0.587 0.65l-2.119-2.119-0.356 0.356 2.119 2.119c-0.212 0.2-0.425 0.4-0.644 0.587l-0.95-1.163-0.387 0.319 0.95 1.156c-0.231 0.181-0.462 0.356-0.7 0.525l-1.669-2.494-0.419 0.275 1.669 2.494c-1.756 1.131-3.775 1.875-5.95 2.125l-0.15-1.494-0.5 0.050 0.15 1.494c-0.288 0.025-0.581 0.038-0.875 0.044v-3h-0.5v3c-0.294-0.006-0.581-0.019-0.875-0.044l0.144-1.494-0.5-0.050-0.144 1.494c-2.175-0.25-4.194-1-5.95-2.131l1.669-2.494-0.419-0.275-1.656 2.494c-0.237-0.169-0.475-0.337-0.7-0.519l0.95-1.156-0.388-0.319-0.95 1.156c-0.225-0.188-0.438-0.387-0.65-0.587l0.787-0.781 10.937-7.294 7.294-10.938 0.781-0.781c0.2 0.213 0.4 0.425 0.587 0.644l-1.156 0.95 0.319 0.387 1.156-0.95c0.181 0.231 0.356 0.463 0.525 0.7l-2.494 1.669 0.275 0.419 2.494-1.669c1.131 1.756 1.875 3.775 2.125 5.95l-1.494 0.15 0.050 0.5 1.494-0.15c0.025 0.287 0.038 0.581 0.044 0.875h-3v0.5h3c-0.006 0.294-0.019 0.581-0.044 0.875l-1.494-0.144-0.050 0.5 1.494 0.144c-0.25 2.175-1 4.194-2.131 5.95l-2.494-1.669-0.275 0.419 2.494 1.669c-0.163 0.225-0.337 0.456-0.519 0.688zM29.95 17.219c-0.012 0.113-0.019 0.225-0.031 0.337l0.031-0.337zM27.762 23.6c-0.075 0.113-0.15 0.225-0.225 0.337l0.225-0.337z",
//      "M13.517 2.221l0.585 2.942-0.49 0.098-0.585-2.942 0.49-0.098z", "M18.489 29.78l-0.585-2.942 0.49-0.098 0.585 2.942-0.49 0.098z", "M12.176 2.528l0.436 1.435-0.478 0.145-0.436-1.435 0.478-0.145z", "M19.826 29.465l-0.436-1.435 0.478-0.145 0.436 1.435-0.478 0.145z", "M10.875 2.972l1.148 2.772-0.462 0.191-1.148-2.772 0.462-0.191z", "M21.129 29.030l-1.148-2.772 0.462-0.191 1.148 2.772-0.462 0.191z", "M9.176 3.771l0.441-0.236 0.707 1.323-0.441 0.236-0.707-1.323z", "M22.816 28.228l-0.441 0.236-0.707-1.323 0.441-0.236 0.707 1.323z", "M3.769 9.182l1.323 0.707-0.236 0.441-1.323-0.707 0.236-0.441z", "M28.226 22.819l-1.323-0.707 0.236-0.441 1.323 0.707-0.236 0.441z", "M5.744 12.019l-2.772-1.148 0.191-0.462 2.772 1.148-0.191 0.462z", "M26.26 19.978l2.772 1.148-0.191 0.462-2.772-1.148 0.191-0.462z", "M2.673 11.7l1.436 0.435-0.145 0.479-1.436-0.435 0.145-0.479z", "M29.322 20.302l-1.436-0.435 0.145-0.479 1.436 0.435-0.145 0.479z", "M2.315 13.024l2.942 0.585-0.098 0.49-2.942-0.585 0.098-0.49z", "M29.679 18.976l-2.942-0.585 0.098-0.49 2.942 0.585-0.098 0.49z", "M2.218 18.486l2.942-0.585 0.098 0.49-2.942 0.585-0.098-0.49z", "M29.776 13.513l-2.942 0.585-0.098-0.49 2.942-0.585 0.098 0.49z", "M2.53 19.829l1.435-0.436 0.145 0.478-1.435 0.436-0.145-0.478z", "M29.468 12.178l-1.435 0.436-0.145-0.478 1.435-0.436 0.145 0.478z", "M3.161 21.591l-0.191-0.462 2.772-1.148 0.191 0.462-2.772 1.148z", "M28.837 10.413l0.191 0.462-2.772 1.148-0.191-0.462 2.772-1.148z", "M3.776 22.821l-0.236-0.441 1.323-0.707 0.236 0.441-1.323 0.707z", "M28.233 9.181l0.236 0.441-1.323 0.707-0.236-0.441 1.323-0.707z", "M9.621 28.464l-0.441-0.236 0.707-1.323 0.441 0.236-0.707 1.323z", "M22.377 3.534l0.441 0.236-0.707 1.323-0.441-0.236 0.707-1.323z", "M10.415 28.837l1.148-2.772 0.462 0.191-1.148 2.772-0.462-0.191z", "M21.59 3.16l-1.148 2.772-0.462-0.191 1.148-2.772 0.462 0.191z", "M12.176 29.47l-0.478-0.145 0.435-1.435 0.478 0.145-0.435 1.435z", "M19.823 2.528l0.479 0.145-0.435 1.436-0.479-0.145 0.435-1.436z", "M13.515 29.776l-0.49-0.098 0.585-2.942 0.49 0.098-0.585 2.942z", "M18.485 2.218l0.49 0.098-0.585 2.942-0.49-0.098 0.585-2.942z");
    addSymbol("safari", "M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM3 16c0-7.18 5.82-13 13-13 3.424 0 6.538 1.325 8.86 3.488l-12.86 5.512-5.512 12.86c-2.164-2.322-3.488-5.436-3.488-8.86zM18.286 18.286l-8.003 3.43 3.43-8.003 4.573 4.573zM16 29c-3.424 0-6.539-1.325-8.86-3.488l12.86-5.512 5.512-12.86c2.164 2.322 3.488 5.436 3.488 8.86 0 7.18-5.82 13-13 13z");
  }

  if (opts.showDesktop) {
    addSymbol("desktop", "M0 2v20h32v-20h-32zM30 20h-28v-16h28v16zM21 24h-10l-1 4-2 2h16l-2-2z");
  }

  if (opts.showMobile) {
    addSymbol("mobile", "M24 0h-18c-1.1 0-2 0.9-2 2v28c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-28c0-1.1-0.9-2-2-2zM15 30.556c-0.859 0-1.556-0.697-1.556-1.556s0.697-1.556 1.556-1.556 1.556 0.697 1.556 1.556-0.697 1.556-1.556 1.556zM24 26h-18v-22h18v22z");
    addSymbol("android", "M28 12c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2s2-0.9 2-2v-8c0-1.1-0.9-2-2-2zM4 12c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2s2-0.9 2-2v-8c0-1.1-0.9-2-2-2zM7 23c0 1.657 1.343 3 3 3v0 4c0 1.1 0.9 2 2 2s2-0.9 2-2v-4h4v4c0 1.1 0.9 2 2 2s2-0.9 2-2v-4c1.657 0 3-1.343 3-3v-11h-18v11z", "M24.944 10c-0.304-2.746-1.844-5.119-4.051-6.551l1.001-2.001c0.247-0.494 0.047-1.095-0.447-1.342s-1.095-0.047-1.342 0.447l-1.004 2.009-0.261-0.104c-0.893-0.297-1.848-0.458-2.84-0.458s-1.947 0.161-2.84 0.458l-0.261 0.104-1.004-2.009c-0.247-0.494-0.848-0.694-1.342-0.447s-0.694 0.848-0.447 1.342l1.001 2.001c-2.207 1.433-3.747 3.805-4.051 6.551v1h17.944v-1h-0.056zM13 8c-0.552 0-1-0.448-1-1s0.447-0.999 0.998-1c0.001 0 0.002 0 0.003 0s0.001-0 0.002-0c0.551 0.001 0.998 0.448 0.998 1s-0.448 1-1 1zM19 8c-0.552 0-1-0.448-1-1s0.446-0.999 0.998-1c0 0 0.001 0 0.002 0s0.002-0 0.003-0c0.551 0.001 0.998 0.448 0.998 1s-0.448 1-1 1z");
  }

  if (mdnComp.hasFlags())
    addSymbol("flag", "M0 0h4v32h-4v-32z", "M26 20.094c2.582 0 4.83-0.625 6-1.547v-16c-1.17 0.922-3.418 1.547-6 1.547s-4.83-0.625-6-1.547v16c1.17 0.922 3.418 1.547 6 1.547z", "M19 1.016c-1.466-0.623-3.61-1.016-6-1.016-3.012 0-5.635 0.625-7 1.547v16c1.365-0.922 3.988-1.547 7-1.547 2.39 0 4.534 0.393 6 1.016v-16z");

  if (mdnComp.standard)
    addSymbol("html5", "M1.892 0l2.567 28.801 11.524 3.199 11.554-3.204 2.572-28.796h-28.216zM24.52 9.42h-13.517l0.322 3.617h12.874l-0.97 10.844-7.245 2.008-7.237-2.008-0.495-5.547h3.547l0.252 2.82 3.933 1.060 0.009-0.002 3.935-1.062 0.408-4.58h-12.242l-0.953-10.681h17.694l-0.316 3.532z");

  if (mdnComp.deprecated)
    addSymbol("thumb", "M17 5c-0.755 0-1.438 0.289-1.965 0.751-0.064-0.062-0.116-0.14-0.188-0.192-0.96-0.737-3.665-1.559-5.847-1.559-1.879 0-2.607 0.293-3.252 0.552-0.103 0.042-0.207 0.085-0.316 0.124-0.834 0.305-1.578 1.229-1.738 2.2l-0.664 5.972c-0.174 1.039 0.441 2.127 1.4 2.478 0.394 0.144 2.512 0.405 3.883 0.56-0.215 1.256-0.312 2.405-0.312 3.616 0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5c0-1.875 0.667-2.737 1.616-3.699 0.548 0.724 1.408 1.199 2.384 1.199 1.653 0 2.999-1.347 2.999-3v-6c-0.001-1.656-1.346-3.002-3-3.002zM11 19.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5c0-1.805 0.256-3.241 0.479-4.293l0.297-1.398-1.321 0.188c-0.605-0.050-3.934-0.447-4.335-0.552-0.058-0.028-0.132-0.18-0.108-0.321l0.663-5.976c0.037-0.223 0.291-0.539 0.443-0.594 0.131-0.049 0.254-0.099 0.377-0.146 0.544-0.219 1.015-0.408 2.506-0.408 1.914 0 4.118 0.753 4.633 1.146 0.156 0.12 0.366 0.564 0.366 0.854v4.977c-0.001 0.026-0.040 0.649-0.707 1.316-0.913 0.913-2.293 2.293-2.293 5.207zM18 14c0 0.552-0.448 1-1 1s-1-0.448-1-1v-6c0-0.552 0.448-1 1-1s1 0.448 1 1v6z");

  if (mdnComp.experimental)
    addSymbol("lab", "M29.884 25.14l-9.884-16.47v-6.671h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-10c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v6.671l-9.884 16.47c-2.264 3.773-0.516 6.86 3.884 6.86h20c4.4 0 6.148-3.087 3.884-6.86zM7.532 20l6.468-10.779v-7.221h4v7.221l6.468 10.779h-16.935z");

//  if (mdnComp.url.length)
//    addSymbol("link", "", "M13.757 19.868c-0.416 0-0.832-0.159-1.149-0.476-2.973-2.973-2.973-7.81 0-10.783l6-6c1.44-1.44 3.355-2.233 5.392-2.233s3.951 0.793 5.392 2.233c2.973 2.973 2.973 7.81 0 10.783l-2.743 2.743c-0.635 0.635-1.663 0.635-2.298 0s-0.635-1.663 0-2.298l2.743-2.743c1.706-1.706 1.706-4.481 0-6.187-0.826-0.826-1.925-1.281-3.094-1.281s-2.267 0.455-3.094 1.281l-6 6c-1.706 1.706-1.706 4.481 0 6.187 0.635 0.635 0.635 1.663 0 2.298-0.317 0.317-0.733 0.476-1.149 0.476z", "M8 31.625c-2.037 0-3.952-0.793-5.392-2.233-2.973-2.973-2.973-7.81 0-10.783l2.743-2.743c0.635-0.635 1.664-0.635 2.298 0s0.635 1.663 0 2.298l-2.743 2.743c-1.706 1.706-1.706 4.481 0 6.187 0.826 0.826 1.925 1.281 3.094 1.281s2.267-0.455 3.094-1.281l6-6c1.706-1.706 1.706-4.481 0-6.187-0.635-0.635-0.635-1.663 0-2.298s1.663-0.635 2.298 0c2.973 2.973 2.973 7.81 0 10.783l-6 6c-1.44 1.44-3.355 2.233-5.392 2.233z")
  if (mdnComp.url.length)
    addSymbol("link", "M6 2v24h24v-24h-24zM28 24h-20v-20h20v20zM4 28v-21l-2-2v25h25l-2-2h-21z", "M11 8l5 5-6 6 3 3 6-6 5 5v-13z");

  /*------------------------------------------------------------------------------------------------------------------*

      CONTENT

  *------------------------------------------------------------------------------------------------------------------*/

  // Header
  if (mdnComp.url.length) {
    out.add("<a xlink:href=\"%0\" style=\"cursor:pointer\" target=\"_blank\">", mdnComp.url);
    text2(mdnComp.prePath, mdnComp.name, 1, 50, 32);
    use("link", w - 40, 26, 24, 24, "#777");
    out.add("</a>");
  }
  else {
    text2(mdnComp.prePath, mdnComp.name, indent, 50, 32);
  }

  // status
  if (mdnComp.deprecated) status("thumb", "Deprecated", 24, "#a00");
  if (mdnComp.experimental) status("lab", "Experimental", 0, "#c70");
  if (mdnComp.standard) status("html5", "On standard track", 0, "#070");

  // link
  //if (mdnComp.url.length) link(mdnComp.url, mdnComp.url, indent + 2, 92, mdnComp.url.length > 90 ? 16 : 18);

  // Content
  out.add("<g transform=\"translate(0, 104)\">");

  // Draw background
  rect(0, 0, w, h, "#eaedf2");

  // Draw status boxes
  if (opts.showDesktop) {
    versions(desktopList, desktopDesc, col1, col1h + col2h)
  }

  if (opts.showMobile) {
    versions(mobileList, mobileDesc, colM, col1h + col2h)
  }

  // Draw grid
  for(x = col1; x < w; x += step) {
    line(x|0, col1h, x|0, h, 1, "#999");
  }

  if (col1) line(col1, 0, col1, h, 2);
  if (isMob) line(colM, 0, colM, h, 2);

  line(col1, col1h, w, col1h, 2);
  line(0, col1h + col2h, w, col1h + col2h, 1);
  line(0, h, w, h, 2);


  // text
  //text(mdnComp.name, 7, col1h + col2h + 28);

  // Fill in icons
  if (isDesk) {
    use("desktop", ((isMob ? col2w / 2 : col2w) - iconSize) / 2 + col1,
                   ((col1h - iconSize) / 2),
                   iconSize, iconSize);
    for(i = 0, x = col1; i < desktopList.length; i++) {
      use(desktopList[i],
          x + step * i + (step- iconSize) / 2,
          col1h + (col2h - iconSize) / 2, iconSize, iconSize, colIcon, desktopDesc[i]);
    }
  }

  if (isMob) {
    use("mobile", ((isDesk ? col2w / 2 : col2w) - iconSize) / 2 + colM,
                  (col1h - iconSize) / 2,
                  iconSize, iconSize);

    for(i = 0, x = colM; i < mobileListIcons.length; i++) {
      let lst = mobileListIcons[i].split(",");
      lst.forEach((icon, t) => {
        use(icon, (lst.length === 2 ? (t ? 1.5 : -1.5) : 0) + x + t * iconSize + step * i + (step - iconSize * lst.length) / 2,
                   col1h + (col2h - iconSize) / 2,
                   iconSize, iconSize, colIcon, mobileDesc[i]);
      })
    }
  }

  // insert notes
  if (options.notes && notes.length) {
    notes.forEach((note) => {
      h += 16;
      textFmt(note, w - indent * 2)
    });
  }

  h += 45;
  text("Data from MDN - \"npm i -g mdncomp\" by epistemex © 2018.", 1, h, 14, true, "#777");

  // close
  out.add("</g></svg>");

  /*------------------------------------------------------------------------------------------------------------------*

      Helpers

  *------------------------------------------------------------------------------------------------------------------*/

  function versions(list, desc, offset, y) {
    //let prefixList = "";
    options.maxWidth = (w - 60) / 8;
    list.forEach((browserId, index) => {
      let
        browser = mdnComp.getBrowser(browserId), status, refMark, flags, prefix,
        x = offset + step * index,
        tx = x + step * 0.5;

      if (browser) {
        flags = browser.hasFlags();
        prefix = browser.hasPrefix();
        status = browser.info[0].getVersion().replace("Y", yes16);
//        if (prefix) {
//          if (prefixList.length) prefixList += ", " + browser.info[0].prefix;
//          else prefixList = px8 + ") Prefix: " + browser.info[0].prefix;
//        }
        if (browser.hasNotes()) {
          refMark = options.notes ? ++ref : "*";
          notes.push(browser.getNotes(ref));
        }
      }
      else {
        status = no;
      }

      rect(x, y, step, col2h, status.indexOf("-") >= 0 ? colNo : (status === "?" ? "#eaedf2" : colYes));

      if (status === "-")
        text(no16, tx, y + 28, 0, 0, "#c55", "middle");
      else
        text(status, tx, y + 28, w < 800 ? 12 : 0, 0, status.indexOf("-") < 0 && status.indexOf("?") < 0 ? "#070" : "#000", "middle");

      if (refMark)
        text(refMark, x + step - 11, y + 13, 10, "#000", "end");

      if(flags)
        use("flag", x + 5, y + 5, 10, 10, "#555");

      if (prefix)
        text(browser.info[0].prefix, x + 5, y + 41, 12, false, "#334"); // w < 640 ? y + 40 : y + 13 if low on space
    });

    //if (prefixList.length) notes.unshift(prefixList + lf);
  }

  function status(icon, txt, size, color) {
    size = size || 14;
    let y = 69;
    if (icon) {
      use(icon, statusX, y + (size === 14 ? 2 : 1), size, size, color);
      statusX += 20;
    }
    text(txt, statusX, y + 15, 16, true, color);
    statusX += 105;
  }

  function line(x1, y1, x2, y2, lw, col) {
    if (lw / 2 !== (lw>>>1)) {
      x1 += 0.5; y1 += 0.5; x2 += 0.5; y2 += 0.5;
    }
    out.add("<line x1=\"%0\" y1=\"%1\" x2=\"%2\" y2=\"%3\"  stroke=\"%5\" stroke-width=\"%4\" />", x1, y1, x2, y2, (lw || 1), col ? col : "#000")
  }

  function rect(x, y, w, h, bgCol, title) {
    out.add("<rect x=\"%0\" y=\"%1\" width=\"%2\" height=\"%3\" fill=\"%4\"%5 />", x, y, w, h, bgCol, title ? " title=\"" + title + "\"" : "")
  }

  function text(txt, x, y, size, sans, color, align) {
    align = align ? " text-anchor=\"" + align + "\" " : "";
    out.add("<text x=\"%1\" y=\"%2\" fill=\"%5\" %6font-family=\"%4\" font-size=\"%3\">%0</text>", txt, x, y, size||16, sans ? "sans-serif" : "Consolas, monospace", color ? color : "#000", align)
  }

  function text2(txt1, txt2, x, y, size) {
    out.add("<text x=\"%2\" y=\"%3\" font-family=\"Consolas, monospace\" font-size=\"%4\"><tspan fill=\"#777\">%0</tspan><tspan fill=\"#000\">%1</tspan>", txt1, txt2, x, y, size||16);
    out.add("</text>");
  }

  function link(txt, url, x, y, size) {
    out.add("<a xlink:href=\"%0\" style=\"cursor:pointer\">", url);
    text(txt, x , y + size * 1.25, size, true);
    out.add("</a>");
  }

  function textFmt(txt) { //}, max) {
    let parts = txt.split(lf), res = new Output(), height = 0;
    parts.forEach(part => {
      res.add("<tspan x=\"%0\" dy=\"1.3em\">", indent);
      res.add(part);
      res.add("</tspan>");
      height += 15;
    });

    text(res.toString(), 10, h, 14);
    h += height;
  }

  function use(name, x, y, width, height, col, desc) {
    col = col ? " fill=\"" + col + "\"" : "";
    if (desc) out.add("<g><title>%0</title>", desc);
    if (arguments.length > 3) {
      out.add("<use href=\"#icon-%0\" x=\"%1\" y=\"%2\" width=\"%3\" height=\"%4\"%5></use>", name, x, y, width, height, col)
    }
    else {
      out.add("<use href=\"#icon-%0\" width=\"%1\" height=\"%2\"%3></use>", name, x, y, col)
    }
    if (desc) out.add("</g>");
  }

  function addSymbol(name, data) {
    out.add("<symbol id=\"icon-%0\" viewBox=\"-1 -1 34 34\">", name);
    for(let i = 1; i < arguments.length; i++) out.add("<path d=\"%0\"></path>", arguments[i]);
    out.add("</symbol>")
  }

  return out.toString()
}