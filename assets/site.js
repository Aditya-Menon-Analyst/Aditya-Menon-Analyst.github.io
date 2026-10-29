(function () {
  var GH = "https://github.com/Aditya-Menon-Analyst/";

  var VERBS = {
    explain: "Explain",
    predict: "Predict",
    show: "Show",
    build: "Build"
  };

  var JOBS = [
    {
      verb: "show",
      title: "Techmentee Inc.",
      meta: "Business Analyst, Vienna, US. Jul 2025 to Jun 2026",
      result: "41.2%", resultNote: "faster reporting",
      points: [
        "Deployed Power BI dashboards across 5 channels, bringing key performance metrics into one reporting framework. This cut reporting cycles by 41.2% and gave leadership one view of audience behavior trends.",
        "Analyzed cross-channel engagement data in SQL and Excel to isolate high-performing content segments, driving a 14% increase in click-through rate.",
        "Synthesized 1,000+ user survey responses with frequency analysis to surface customer insights that shaped outreach strategy and audience targeting."
      ],
      tools: "Power BI, SQL, Excel"
    },
    {
      verb: "predict",
      title: "Los Angeles Football Club",
      meta: "Business Analyst, Durham, US. Feb 2025 to May 2025",
      result: "93%", resultNote: "model accuracy",
      points: [
        "Cleaned and engineered features on 900K+ ticket records using SQL and Python, improving data quality by 29% and producing a model-ready dataset.",
        "Developed a Random Forest classification model in Python to predict ticket scan likelihood with 93% accuracy, informing an oversell strategy projected to cut no-show rates by 15%.",
        "Structured a two-tier oversell model from attendance patterns and ticket utilization data, raising attendance by 18.1% and driving $70.4M ARR."
      ],
      tools: "SQL, Python, Random Forest"
    },
    {
      verb: "explain",
      title: "Duke Advanced Degree Consulting Club",
      meta: "Business Consultant, Durham, US. Jan 2025 to May 2025",
      result: "$40M", resultNote: "revenue opportunity",
      points: [
        "Ran competitive benchmarking and customer segmentation in Excel across market verticals, uncovering a $40M revenue opportunity that shaped go-to-market strategy for a Fortune 250 client.",
        "Built DCF and TAM models to size addressable markets and forecast incremental revenue, projecting $80M in portfolio-wide sales growth to guide market entry priorities.",
        "Presented findings to executives, turning complex analysis into a clear story backed by models and KPIs."
      ],
      tools: "Excel, DCF and TAM modeling"
    },
    {
      verb: "explain",
      title: "RecoTree Technology Solutions",
      meta: "Data Analyst, Chennai, India. Jun 2023 to May 2024",
      result: "14%", resultNote: "more conversions",
      points: [
        "Performed exploratory analysis on inventory logs using SQL and Python, finding supply chain inefficiencies and reducing order delays by 8.4%.",
        "Ran checkout A/B tests that increased conversions by 14% and engagement by 23.6%, and automated Tableau dashboards to cut weekly reporting time by 30%."
      ],
      tools: "SQL, Python, Tableau, A/B testing"
    }
  ];

  var PROJECTS = [
    {
      verb: "build",
      title: "AI Visibility Checker",
      meta: "Live product, AI search",
      result: "Live", resultNote: "aivischecker.com",
      body: "A free tool that checks how ready a website is to be found and cited by AI search engines like ChatGPT and Perplexity. Every check is labelled by how strong the evidence behind it is, and each failed check comes with a fix you can copy and paste.",
      tools: "Astro, TypeScript, Cloudflare Workers, D1, Claude Code",
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
      verb: "show",
      title: "MediTrack healthcare dashboard",
      meta: "Dashboard, hospital operations",
      result: "40%", resultNote: "less reporting time",
      body: "An interactive dashboard for patient visits, resource utilization, ICD-10 diagnoses and prescription trends. Automated data aggregation and a seasonal demand forecast cut reporting time by 40% and made care and staffing decisions easier to see.",
      tools: "Tableau",
      links: [["Download the workbook", GH + "Heathcare-Analytics-Dashboard"]]
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
      verb: "explain",
      title: "User insights and retention for Dognition",
      meta: "SQL, data modeling",
      result: "10%", resultNote: "more engagement",
      body: "Modeled and normalized a six-table relational database, then used advanced SQL queries and exploratory analysis to uncover churn and lifecycle patterns. The work improved data integrity and lifted customer engagement by 10%.",
      tools: "SQL, ERD+, data modeling",
      links: []
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

  var LISTS = [
    { el: document.getElementById("jobs"), status: document.getElementById("jobs-status"), items: JOBS, noun: ["role", "roles"] },
    { el: document.getElementById("rows"), status: document.getElementById("status"), items: PROJECTS, noun: ["project", "projects"] }
  ];
  var hintEl = document.getElementById("hint");
  var claim = document.querySelector(".claim");
  var verbBtns = Array.prototype.slice.call(document.querySelectorAll(".verb"));
  var active = null;
  var uid = 0;

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (text) n.textContent = text;
    return n;
  }

  function row(p) {
    var li = el("li", { "class": "row", "data-verb": p.verb, style: "--c: var(--" + p.verb + ")" });
    var id = "detail-" + (uid++);
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
    if (p.body) inner.appendChild(el("p", {}, p.body));
    if (p.points) {
      var ul = el("ul", { "class": "points" });
      p.points.forEach(function (t) { ul.appendChild(el("li", {}, t)); });
      inner.appendChild(ul);
    }
    inner.appendChild(el("p", { "class": "tools" }, "Tools: " + p.tools));
    if (p.links && p.links.length) {
      var go = el("ul", { "class": "go" });
      p.links.forEach(function (l) {
        var a = el("a", { href: l[1], target: "_blank", rel: "noopener" }, l[0]);
        var item = el("li", {});
        item.appendChild(a);
        go.appendChild(item);
      });
      inner.appendChild(go);
    }
    detail.appendChild(inner);
    detail.inert = true;

    btn.addEventListener("click", function () {
      var open = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      detail.inert = !open;
    });

    li.appendChild(btn);
    li.appendChild(detail);
    return li;
  }

  LISTS.forEach(function (list) {
    list.items.forEach(function (p) { list.el.appendChild(row(p)); });
  });

  // Counts on each verb cover roles and projects together
  verbBtns.forEach(function (b) {
    var v = b.dataset.verb;
    var n = JOBS.concat(PROJECTS).filter(function (p) { return p.verb === v; }).length;
    b.querySelector("sup").textContent = n;
    b.setAttribute("aria-label", VERBS[v] + ", " + n + " roles and projects");
  });

  function render() {
    LISTS.forEach(function (list) {
      var shown = 0;
      Array.prototype.forEach.call(list.el.children, function (li) {
        var hide = active && li.dataset.verb !== active;
        li.hidden = hide;
        if (!hide) shown++;
      });
      var total = list.items.length;
      list.status.textContent = "";
      if (active) {
        list.status.appendChild(document.createTextNode(shown + " of " + total + " " + list.noun[1] + ". "));
        var clear = el("button", { type: "button" }, "Show all");
        clear.addEventListener("click", function () { setVerb(null); });
        list.status.appendChild(clear);
      } else {
        list.status.textContent = total + " " + list.noun[total === 1 ? 0 : 1];
      }
    });

    verbBtns.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.verb === active));
    });
    claim.classList.toggle("filtering", !!active);
    hintEl.textContent = active
      ? "Showing where I " + active + ". Pick it again to see everything."
      : "Pick a verb to see the work behind it.";
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
        var target = document.getElementById("experience");
        if (target.getBoundingClientRect().top > window.innerHeight * 0.85) {
          target.scrollIntoView({ block: "start" });
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
