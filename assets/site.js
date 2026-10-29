(function () {
  var GH = "https://github.com/Aditya-Menon-Analyst/";

  var VERBS = {
    explain: "Explain",
    predict: "Predict",
    show: "Show",
    build: "Build"
  };

  var PROJECTS = [
    {
      verb: "build",
      title: "AI Visibility Checker",
      meta: "Live product, AI search",
      result: "Live", resultNote: "aivischecker.com",
      body: "A free tool that checks how ready a website is to be found and cited by AI search engines like ChatGPT and Perplexity. Every check is labelled by how strong the evidence behind it is, and each failed check comes with a fix you can copy and paste.",
      tools: "Astro, TypeScript, Cloudflare Workers, D1",
      links: [["Open the live site", "https://aivischecker.com"]]
    },
    {
      verb: "build",
      title: "Joblens",
      meta: "Command line tool, job search",
      result: "5", resultNote: "commands",
      body: "A small tool I built for my own job search. It scores how well a posting fits my profile, drafts a tailored cover letter opening and resume bullets, and logs every application in a local database. It works offline with keyword matching, or with the Anthropic API for a scored judgment. The prompts tell the model never to invent skills or numbers that aren't in my profile.",
      tools: "Python, SQLite, Anthropic API",
      links: [["Read the code", GH + "Joblens"]]
    },
    {
      verb: "build",
      title: "Job application automation with n8n",
      meta: "Workflow automation",
      result: "", resultNote: "",
      body: "An end-to-end workflow that scrapes job postings, filters for relevant roles, rewrites my resume for each one with AI and sends a tailored application. It cut most of the manual work out of outreach.",
      tools: "n8n, LLM APIs, HTTP APIs, document services",
      links: [["See the workflow", GH + "n8n-Automoation-Workflow"]]
    },
    {
      verb: "predict",
      title: "Classifying American Sign Language",
      meta: "Deep learning, accessibility",
      result: "99%", resultNote: "accuracy",
      body: "A deep learning model that recognises American Sign Language gestures from images, built to make tools more accessible to people who are deaf or hard of hearing.",
      tools: "Python, deep learning",
      links: [["Read the notebook", GH + "Classifying-American-Sign-Language"]]
    },
    {
      verb: "predict",
      title: "Modeling and analyzing Spotify hits",
      meta: "Machine learning, music",
      result: "80%", resultNote: "accuracy",
      body: "Found the audio traits that hit songs share and predicted song popularity, so artists and marketers can see what tends to connect with listeners.",
      tools: "R, machine learning",
      links: [["Read the code", GH + "Modeling-and-Analyzing-Spotify-Hits"]]
    },
    {
      verb: "predict",
      title: "Predicting real estate prices in Barcelona",
      meta: "Pricing model, real estate",
      result: "+20%", resultNote: "accuracy",
      body: "A pricing model that estimates property values across Barcelona from location and housing features. It showed which factors move price most and improved accuracy by 20% over the baseline.",
      tools: "R, regression",
      links: [["Read the code", GH + "Predictive-Modeling-for-Real-Estate-Pricing-in-Barcelona"]]
    },
    {
      verb: "show",
      title: "Healthcare analytics dashboard",
      meta: "Dashboard, hospital operations",
      result: "", resultNote: "",
      body: "An interactive dashboard that helps a hospital plan care and resources. It covers patient trends, diagnoses, medications and staffing needs in one place.",
      tools: "Tableau",
      links: [["Download the workbook", GH + "Heathcare-Analytics-Dashboard"]]
    },
    {
      verb: "explain",
      title: "Does surgery improve lung cancer survival?",
      meta: "Causal inference, healthcare",
      result: "", resultNote: "",
      body: "Estimated the effect of surgery on lung cancer survival from patient data. I used comparison groups, matching and machine learning models to see how the effect changes across different kinds of patients.",
      tools: "R, matching, causal machine learning",
      links: [["Read the analysis", GH + "Evaluating-the-Causal-Impact-of-Surgery-on-Lung-Cancer-Survival"]]
    },
    {
      verb: "explain",
      title: "Tarte market entry strategy",
      meta: "Consulting, consumer goods",
      result: "$30M", resultNote: "projected, 3 years",
      body: "Advised Tarte Cosmetics on entering the clean toiletries market. After a full market analysis I proposed a product and marketing plan projected to bring in $30M in revenue within three years.",
      tools: "Market sizing, competitor analysis",
      links: [["Read the report", GH + "Tarte-Consulting-Report"]]
    },
    {
      verb: "explain",
      title: "What NVIDIA hires for",
      meta: "Job posting analysis, talent strategy",
      result: "", resultNote: "",
      body: "Analyzed NVIDIA's job postings for hiring trends, roles and skill gaps to work out what the company looks for in early-career talent, with practical advice for students aiming at AI and software roles.",
      tools: "Text analysis, research",
      links: [["Read the report", GH + "NVIDIA-Job-Posting-Analysis"]]
    }
  ];

  var rowsEl = document.getElementById("rows");
  var statusEl = document.getElementById("status");
  var hintEl = document.getElementById("hint");
  var claim = document.querySelector(".claim");
  var verbBtns = Array.prototype.slice.call(document.querySelectorAll(".verb"));
  var active = null;

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (text) n.textContent = text;
    return n;
  }

  // Build rows
  PROJECTS.forEach(function (p, i) {
    var li = el("li", { "class": "row", "data-verb": p.verb, style: "--c: var(--" + p.verb + ")" });
    var id = "detail-" + i;
    var btn = el("button", { "class": "row-btn", "aria-expanded": "false", "aria-controls": id });

    btn.appendChild(el("span", { "class": "tick", "aria-hidden": "true" }));
    var text = el("span", {});
    text.appendChild(el("span", { "class": "row-title" }, p.title));
    text.appendChild(el("span", { "class": "row-meta" }, VERBS[p.verb] + ". " + p.meta));
    btn.appendChild(text);

    var res = el("span", { "class": "result" });
    if (p.result) {
      res.appendChild(el("b", {}, p.result));
      res.appendChild(el("small", {}, p.resultNote));
    }
    btn.appendChild(res);

    var detail = el("div", { "class": "detail", id: id, role: "region", "aria-label": p.title });
    var inner = el("div", { "class": "detail-inner" });
    inner.appendChild(el("p", {}, p.body));
    inner.appendChild(el("p", { "class": "tools" }, "Tools: " + p.tools));
    var go = el("ul", { "class": "go" });
    p.links.forEach(function (l) {
      var a = el("a", { href: l[1] }, l[0]);
      if (/^https?:/.test(l[1])) { a.target = "_blank"; a.rel = "noopener"; }
      var item = el("li", {});
      item.appendChild(a);
      go.appendChild(item);
    });
    inner.appendChild(go);
    detail.appendChild(inner);
    detail.inert = true;

    btn.addEventListener("click", function () {
      var open = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      detail.inert = !open;
    });

    li.appendChild(btn);
    li.appendChild(detail);
    rowsEl.appendChild(li);
  });

  // Counts on each verb
  verbBtns.forEach(function (b) {
    var n = PROJECTS.filter(function (p) { return p.verb === b.dataset.verb; }).length;
    b.querySelector("sup").textContent = n;
    b.setAttribute("aria-label", VERBS[b.dataset.verb] + ", " + n + " projects");
  });

  function render() {
    var shown = 0;
    Array.prototype.forEach.call(rowsEl.children, function (li) {
      var hide = active && li.dataset.verb !== active;
      li.hidden = hide;
      if (!hide) shown++;
    });
    verbBtns.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.verb === active));
    });
    claim.classList.toggle("filtering", !!active);

    statusEl.textContent = "";
    if (active) {
      statusEl.appendChild(document.createTextNode(shown + " of " + PROJECTS.length + " projects. "));
      var clear = el("button", { type: "button" }, "Show all");
      clear.addEventListener("click", function () { setVerb(null); });
      statusEl.appendChild(clear);
      hintEl.textContent = "Showing what I " + active + ". Pick it again to see everything.";
    } else {
      statusEl.textContent = PROJECTS.length + " projects";
      hintEl.textContent = "Pick a verb to see the work behind it.";
    }
  }

  function setVerb(v) {
    active = v;
    render();
  }

  verbBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      var v = b.dataset.verb === active ? null : b.dataset.verb;
      setVerb(v);
      if (v) {
        var top = document.getElementById("work").getBoundingClientRect().top;
        if (top > window.innerHeight * 0.85) {
          document.getElementById("work").scrollIntoView({ block: "start" });
        }
      }
    });
  });

  render();

  // Load sequence
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.documentElement.classList.add("ready");
      setTimeout(function () { document.documentElement.classList.add("settled"); }, 900);
    });
  });
})();
