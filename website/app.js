const INVESTOR_LABELS = {
  climate: "Climate fund",
  biodiversity: "Biodiversity fund",
  water: "Water fund",
  mdb: "Development bank",
  supply: "Supply chain",
};

const landscapes = [
  {
    name: "Lake Victoria Basin",
    region: "africa",
    regionLabel: "East Africa",
    thesis: "Water security & blue economy",
    tags: ["Fisheries", "Water", "Wetlands", "Governance"],
    lroi: "3.0–8.0",
    mdi: "2.15",
    readiness: "8.5",
    mapPin: { top: "42%", left: "48%", label: "Lake Victoria" },
    investorFit: { climate: 7.5, biodiversity: 8.0, water: 10.0, mdb: 8.5, supply: 6.0 },
    assets: [
      { name: "Water assets", condition: "Moderate–Poor", trend: "Declining", risk: "High" },
      { name: "Fisheries", condition: "Moderate", trend: "Declining", risk: "High" },
      { name: "Wetlands", condition: "Moderate", trend: "Declining", risk: "High" },
    ],
    opportunities: [
      { pathway: "Protect", action: "Watershed & catchment protection", return: "Water security" },
      { pathway: "Create", action: "Fisheries restoration & value chains", return: "Fisheries income" },
      { pathway: "Enable", action: "Transboundary basin governance", return: "Readiness" },
      { pathway: "Scale", action: "Blue economy water fund", return: "Leverage" },
    ],
    panel: {
      thesis: "Water security & blue economy — fisheries, basin governance, wetland restoration",
      streams: ["Water 10", "Fisheries 9.5", "Biodiversity 8", "Livelihoods 9.5"],
    },
  },
  {
    name: "Omo–Ghibe Basin",
    region: "africa",
    regionLabel: "Ethiopia",
    thesis: "Restoration, water & resilience",
    tags: ["Watersheds", "Hydropower", "Agriculture"],
    lroi: "3.3–9.4",
    mdi: "2.05",
    readiness: "8.0",
    mapPin: { top: "38%", left: "52%", label: "Omo–Ghibe" },
    investorFit: { climate: 8.0, biodiversity: 7.0, water: 9.5, mdb: 8.0, supply: 6.0 },
    assets: [
      { name: "Watersheds", condition: "Moderate", trend: "Declining", risk: "Medium" },
      { name: "Agriculture", condition: "Moderate", trend: "Declining", risk: "Medium" },
      { name: "Restoration potential", condition: "High opportunity", trend: "Stable", risk: "Medium" },
    ],
    opportunities: [
      { pathway: "Protect", action: "Watershed protection & erosion control", return: "Water regulation" },
      { pathway: "Create", action: "Large-scale landscape restoration", return: "Climate & resilience" },
      { pathway: "Enable", action: "Community & basin institutions", return: "Governance" },
      { pathway: "Scale", action: "Adaptation & restoration finance", return: "Blended capital" },
    ],
    panel: {
      thesis: "Large-scale watershed restoration — ~7M people, 45% of Ethiopia's hydropower",
      streams: ["Water 9.5", "Climate 8", "Livelihoods 8.5", "Biodiversity 7"],
    },
  },
  {
    name: "Fatick",
    region: "africa",
    regionLabel: "Senegal",
    thesis: "Dryland resilience & livelihood security",
    tags: ["Mangroves", "Fisheries", "Drylands"],
    lroi: "6.0–20.0",
    mdi: "2.00",
    readiness: "7.5",
    mapPin: { top: "55%", left: "46%", label: "Fatick" },
    investorFit: { climate: 7.5, biodiversity: 8.0, water: 8.0, mdb: 8.0, supply: 4.0 },
    assets: [
      { name: "Dryland ecosystems", condition: "Moderate", trend: "Declining", risk: "Medium" },
      { name: "Water resources", condition: "Moderate–Poor", trend: "Declining", risk: "Medium" },
      { name: "Fisheries", condition: "Moderate", trend: "Declining", risk: "Medium" },
    ],
    opportunities: [
      { pathway: "Protect", action: "Mangrove & water source protection", return: "Resilience" },
      { pathway: "Create", action: "Regenerative dryland restoration", return: "Livelihoods" },
      { pathway: "Enable", action: "Community water agreements", return: "Water security" },
      { pathway: "Scale", action: "Resilience & adaptation funds", return: "Finance mobilization" },
    ],
    panel: {
      thesis: "Dryland–coastal transition — mangrove restoration, fisheries, agro-silvo-pastoral systems",
      streams: ["Resilience 8.5", "Biodiversity 8", "Livelihoods 8.5", "Water 8"],
    },
  },
  {
    name: "Mbire",
    region: "africa",
    regionLabel: "Zimbabwe",
    thesis: "Biodiversity & livelihood resilience",
    tags: ["Wildlife", "Rangelands", "Communities"],
    lroi: "—",
    mdi: "—",
    readiness: "7.0",
    mapPin: null,
    investorFit: { climate: 6.0, biodiversity: 9.5, water: 6.0, mdb: 6.0, supply: 4.0 },
    assets: [
      { name: "Wildlife assets", condition: "Moderate", trend: "Declining", risk: "Medium" },
      { name: "Rangelands", condition: "Moderate", trend: "Declining", risk: "Medium" },
      { name: "Biodiversity", condition: "Moderate", trend: "Declining", risk: "Medium" },
    ],
    opportunities: [
      { pathway: "Protect", action: "Wildlife & habitat conservation", return: "Biodiversity" },
      { pathway: "Create", action: "Community wildlife enterprises", return: "Tourism & livelihoods" },
      { pathway: "Enable", action: "Community natural resource institutions", return: "Governance" },
      { pathway: "Scale", action: "Conservation finance vehicles", return: "Revenue" },
    ],
    panel: {
      thesis: "Semi-arid wildlife–livelihood landscape — coexistence of conservation and livelihoods",
      streams: ["Biodiversity 9", "Tourism 7", "Livelihoods 7.5", "Resilience 7"],
    },
  },
  {
    name: "N'Zi Basin",
    region: "africa",
    regionLabel: "Côte d'Ivoire",
    thesis: "Restoration & traceable production",
    tags: ["Cocoa", "Forests", "Agroforestry"],
    lroi: "—",
    mdi: "—",
    readiness: "7.5",
    mapPin: null,
    investorFit: { climate: 8.0, biodiversity: 8.0, water: 6.0, mdb: 8.0, supply: 9.5 },
    assets: [
      { name: "Cocoa landscapes", condition: "Moderate", trend: "Declining", risk: "Medium" },
      { name: "Forests", condition: "Moderate", trend: "Declining", risk: "High" },
      { name: "Biodiversity", condition: "Moderate", trend: "Declining", risk: "Medium" },
    ],
    opportunities: [
      { pathway: "Protect", action: "Forest corridor protection", return: "Biodiversity" },
      { pathway: "Create", action: "Cocoa agroforestry transition", return: "Production & carbon" },
      { pathway: "Enable", action: "Producer organization platforms", return: "Traceability" },
      { pathway: "Scale", action: "Supply-chain blended investment", return: "Market access" },
    ],
    panel: {
      thesis: "Forest–savannah cocoa landscape — reconcile production, biodiversity & restoration",
      streams: ["Production 9", "Biodiversity 8", "Carbon 8", "Livelihoods 8"],
    },
  },
  {
    name: "Kef–Siliana",
    region: "africa",
    regionLabel: "Tunisia",
    thesis: "Water efficiency & climate adaptation",
    tags: ["Water", "Agriculture", "Soils"],
    lroi: "—",
    mdi: "—",
    readiness: "7.5",
    mapPin: null,
    investorFit: { climate: 6.0, biodiversity: 6.0, water: 9.5, mdb: 8.0, supply: 6.0 },
    assets: [
      { name: "Water resources", condition: "Moderate–Poor", trend: "Declining", risk: "High" },
      { name: "Soils", condition: "Moderate", trend: "Declining", risk: "Medium" },
      { name: "Agriculture", condition: "Moderate", trend: "Declining", risk: "Medium" },
    ],
    opportunities: [
      { pathway: "Protect", action: "Watershed & recharge zone protection", return: "Water supply" },
      { pathway: "Create", action: "Precision irrigation & soil restoration", return: "Productivity" },
      { pathway: "Enable", action: "Water-user associations", return: "Governance" },
      { pathway: "Scale", action: "Water fund & adaptation finance", return: "Efficiency gains" },
    ],
    panel: {
      thesis: "Mediterranean dryland agriculture — precision water management in water-constrained systems",
      streams: ["Water 9.5", "Agriculture 8", "Resilience 7.5", "Governance 7"],
    },
  },
  {
    name: "Mandla",
    region: "asia",
    regionLabel: "India",
    thesis: "Agrobiodiversity & tribal livelihoods",
    tags: ["Forests", "Agrobiodiversity", "Communities"],
    lroi: "—",
    mdi: "—",
    readiness: "7.0",
    mapPin: { top: "45%", left: "68%", label: "Mandla" },
    investorFit: { climate: 6.0, biodiversity: 8.0, water: 6.0, mdb: 6.0, supply: 6.0 },
    assets: [
      { name: "Agrobiodiversity", condition: "Moderate–Good", trend: "Declining", risk: "Medium" },
      { name: "Forests", condition: "Moderate", trend: "Declining", risk: "Medium" },
      { name: "Tribal stewardship", condition: "Good", trend: "Stable", risk: "Low" },
    ],
    opportunities: [
      { pathway: "Protect", action: "Traditional crop diversity conservation", return: "Nutrition" },
      { pathway: "Create", action: "Diversified farming systems", return: "Resilience" },
      { pathway: "Enable", action: "Community forest governance", return: "Legitimacy" },
      { pathway: "Scale", action: "Nutrition & biodiversity funds", return: "Livelihoods" },
    ],
    panel: {
      thesis: "Forest–agriculture mosaic — nutrition, resilience through tribal stewardship",
      streams: ["Agrobiodiversity 9", "Livelihoods 8", "Biodiversity 8", "Forests 7.5"],
    },
  },
  {
    name: "Lower Mekong 3S",
    region: "asia",
    regionLabel: "Southeast Asia",
    thesis: "Inland waters, fisheries & basin governance",
    tags: ["Rivers", "Fisheries", "Biodiversity"],
    lroi: "4.2–11.7",
    mdi: "2.25",
    readiness: "8.0",
    mapPin: { top: "48%", left: "72%", label: "Mekong 3S" },
    investorFit: { climate: 8.5, biodiversity: 9.5, water: 9.5, mdb: 8.0, supply: 6.0 },
    assets: [
      { name: "Rivers", condition: "Moderate", trend: "Declining", risk: "High" },
      { name: "Fisheries", condition: "Moderate", trend: "Declining", risk: "High" },
      { name: "Aquatic biodiversity", condition: "Moderate", trend: "Declining", risk: "Medium" },
    ],
    opportunities: [
      { pathway: "Protect", action: "River connectivity & ecological flows", return: "Fisheries" },
      { pathway: "Create", action: "Fisheries co-management & restoration", return: "Food security" },
      { pathway: "Enable", action: "Transboundary water governance", return: "Coordination" },
      { pathway: "Scale", action: "MDB & water fund facilities", return: "Basin finance" },
    ],
    panel: {
      thesis: "Transboundary freshwater — ~2.3M t fisheries/yr, globally important aquatic biodiversity",
      streams: ["Fisheries 9.5", "Water 9.5", "Biodiversity 9.5", "Livelihoods 9.5"],
    },
  },
  {
    name: "Ucayali",
    region: "latin",
    regionLabel: "Peru",
    thesis: "Climate, biodiversity & traceable forest economies",
    tags: ["Amazon", "Carbon", "Indigenous stewardship"],
    lroi: "3.9–12.8",
    mdi: "2.20",
    readiness: "7.5",
    mapPin: { top: "58%", left: "62%", label: "Ucayali" },
    investorFit: { climate: 9.5, biodiversity: 9.5, water: 7.5, mdb: 7.5, supply: 8.0 },
    assets: [
      { name: "Forests", condition: "Moderate–Good", trend: "Declining", risk: "High" },
      { name: "Biodiversity", condition: "Good", trend: "Declining", risk: "Medium" },
      { name: "Carbon assets", condition: "Good", trend: "Declining", risk: "High" },
    ],
    opportunities: [
      { pathway: "Protect", action: "Forest conservation & deforestation avoidance", return: "Carbon & biodiversity" },
      { pathway: "Create", action: "Sustainable forest enterprises", return: "Livelihoods" },
      { pathway: "Enable", action: "Indigenous governance & safeguards", return: "Legitimacy" },
      { pathway: "Scale", action: "Jurisdictional carbon programs", return: "Climate finance" },
    ],
    panel: {
      thesis: "Amazon forest frontier — carbon stocks, biodiversity, Indigenous stewardship & traceability",
      streams: ["Climate 9.5", "Biodiversity 9.5", "Carbon 9", "Livelihoods 7.5"],
    },
  },
  {
    name: "Cumbal",
    region: "latin",
    regionLabel: "Colombia",
    thesis: "Mountain ecosystems & water security",
    tags: ["Water", "Agrobiodiversity", "Indigenous"],
    lroi: "—",
    mdi: "—",
    readiness: "7.5",
    mapPin: null,
    investorFit: { climate: 6.0, biodiversity: 8.0, water: 8.0, mdb: 6.0, supply: 4.0 },
    assets: [
      { name: "Mountain water systems", condition: "Moderate", trend: "Stable–Declining", risk: "Medium" },
      { name: "Agrobiodiversity", condition: "Moderate–Good", trend: "Declining", risk: "Medium" },
      { name: "Indigenous governance", condition: "Good", trend: "Stable", risk: "Low" },
    ],
    opportunities: [
      { pathway: "Protect", action: "Watershed & native crop protection", return: "Water & resilience" },
      { pathway: "Create", action: "Agroecological production systems", return: "Nutrition" },
      { pathway: "Enable", action: "Indigenous territorial governance", return: "Stewardship" },
      { pathway: "Scale", action: "Water & adaptation funds", return: "Mountain finance" },
    ],
    panel: {
      thesis: "Highland volcanic landscape — Indigenous stewardship, water regulation, agrobiodiversity",
      streams: ["Water 9", "Biodiversity 8", "Resilience 8", "Culture 8"],
    },
  },
];

let selectedLandscape = landscapes[0];
let activeScreen = "map";
let activeInvestor = "water";

function getFitScore(landscape, investor = activeInvestor) {
  return landscape.investorFit?.[investor] ?? null;
}

function fitLabel(score) {
  if (score == null) return "—";
  if (score >= 9) return "Very high";
  if (score >= 7.5) return "High";
  if (score >= 6) return "Medium";
  return "Low";
}

function renderLandscapes(filter = "all") {
  const grid = document.getElementById("landscapeGrid");
  if (!grid) return;

  grid.innerHTML = landscapes
    .filter((l) => filter === "all" || l.region === filter)
    .map((l) => {
      const fit = getFitScore(l);
      return `
    <article class="landscape-card${l.name === "Lake Victoria Basin" ? " lc-pilot" : ""}" data-name="${l.name}" role="button" tabindex="0">
      <div class="lc-region">${l.regionLabel}</div>
      <h3 class="lc-name">${l.name}</h3>
      <p class="lc-thesis">${l.thesis}</p>
      <div class="lc-tags">
        ${l.tags.map((t) => `<span class="lc-tag">${t}</span>`).join("")}
      </div>
      <div class="lc-metrics">
        <div class="lc-metric"><span>L-ROI</span><span>${l.lroi}</span></div>
        <div class="lc-metric"><span>MDI</span><span>${l.mdi}</span></div>
        <div class="lc-metric"><span>Fit</span><span>${fit != null ? fit.toFixed(1) : "—"}</span></div>
      </div>
    </article>`;
    })
    .join("");
}

function renderMapPins() {
  return landscapes
    .filter((l) => l.mapPin)
    .map((l) => {
      const active = l.name === selectedLandscape.name ? " active" : "";
      const fit = getFitScore(l);
      const dimmed = fit != null && fit < 6.5 ? " map-pin-dim" : "";
      return `<button type="button" class="map-pin${active}${dimmed}" style="top:${l.mapPin.top};left:${l.mapPin.left}" data-name="${l.name}" aria-label="${l.name}">${l.mapPin.label}</button>`;
    })
    .join("");
}

function renderDetailPanel() {
  const l = selectedLandscape;
  const fit = getFitScore(l);
  return `
    <div class="mockup-panel" id="mockupPanel">
      <p class="panel-screen-label">${INVESTOR_LABELS[activeInvestor]} · Portfolio map</p>
      <h4>${l.name}</h4>
      <p class="panel-thesis">${l.panel.thesis}</p>
      <div class="panel-metrics">
        <div class="panel-metric">
          <span class="pm-label">L-ROI</span>
          <span class="pm-value">${l.lroi}</span>
        </div>
        <div class="panel-metric">
          <span class="pm-label">MDI</span>
          <span class="pm-value">${l.mdi}</span>
        </div>
        <div class="panel-metric">
          <span class="pm-label">Readiness</span>
          <span class="pm-value">${l.readiness} / 10</span>
        </div>
        <div class="panel-metric">
          <span class="pm-label">Investment fit</span>
          <span class="pm-value highlight">${fit != null ? fit.toFixed(1) : "—"}</span>
        </div>
      </div>
      <div class="panel-streams">
        ${l.panel.streams.map((s) => `<span class="stream-tag">${s}</span>`).join("")}
      </div>
      <button type="button" class="btn btn-sm" data-action="plan">Generate investible plan →</button>
    </div>`;
}

function renderScreenProfile() {
  const l = selectedLandscape;
  return `
    <div class="screen-full">
      <div class="screen-header">
        <h4>${l.name}</h4>
        <span class="screen-badge">${l.regionLabel}</span>
      </div>
      <p class="screen-lead"><strong>Investment thesis:</strong> ${l.thesis}</p>
      <p class="screen-body">${l.panel.thesis}</p>
      <div class="panel-streams">
        ${l.tags.map((t) => `<span class="stream-tag">${t}</span>`).join("")}
      </div>
      <div class="landscape-picker">
        <span class="picker-label">Switch landscape:</span>
        <div class="picker-chips">
          ${landscapes.map((item) => `<button type="button" class="picker-chip${item.name === l.name ? " active" : ""}" data-name="${item.name}">${item.name}</button>`).join("")}
        </div>
      </div>
    </div>`;
}

function renderScreenAssets() {
  const l = selectedLandscape;
  const rows = l.assets
    .map(
      (a) => `
    <tr>
      <td>${a.name}</td>
      <td><span class="status-pill">${a.condition}</span></td>
      <td>${a.trend}</td>
      <td><span class="risk-pill risk-${a.risk.toLowerCase().split("–")[0]}">${a.risk}</span></td>
    </tr>`
    )
    .join("");

  return `
    <div class="screen-full">
      <div class="screen-header"><h4>Asset diagnostics — ${l.name}</h4></div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Asset</th><th>Condition</th><th>Trend</th><th>Risk</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
}

function renderScreenOpportunity() {
  const l = selectedLandscape;
  const cards = l.opportunities
    .map(
      (o) => `
    <div class="opp-card opp-${o.pathway.toLowerCase()}">
      <span class="pathway-badge ${o.pathway.toLowerCase()}">${o.pathway}</span>
      <p class="opp-action">${o.action}</p>
      <span class="opp-return">→ ${o.return}</span>
    </div>`
    )
    .join("");

  return `
    <div class="screen-full">
      <div class="screen-header"><h4>Opportunity builder — ${l.name}</h4></div>
      <div class="opp-grid">${cards}</div>
    </div>`;
}

function renderScreenReturns() {
  const l = selectedLandscape;
  const bars = l.panel.streams
    .map((s) => {
      const [label, val] = s.split(" ");
      const num = parseFloat(val) || 7;
      return `
      <div class="return-bar-row">
        <span class="return-bar-label">${label}</span>
        <div class="return-bar-track"><div class="return-bar-fill" style="width:${num * 10}%"></div></div>
        <span class="return-bar-val">${val}</span>
      </div>`;
    })
    .join("");

  return `
    <div class="screen-full">
      <div class="screen-header"><h4>Return dashboard — ${l.name}</h4></div>
      <div class="returns-summary">
        <div class="panel-metric"><span class="pm-label">L-ROI</span><span class="pm-value">${l.lroi}</span></div>
        <div class="panel-metric"><span class="pm-label">MDI</span><span class="pm-value">${l.mdi}</span></div>
      </div>
      <div class="return-bars">${bars}</div>
    </div>`;
}

function renderScreenInvestor() {
  const l = selectedLandscape;
  const rows = Object.entries(INVESTOR_LABELS)
    .map(([key, label]) => {
      const score = l.investorFit[key];
      const active = key === activeInvestor ? " row-active" : "";
      return `
      <tr class="${active}">
        <td>${label}</td>
        <td><div class="fit-bar-track"><div class="fit-bar-fill" style="width:${(score || 0) * 10}%"></div></div></td>
        <td><strong>${score != null ? score.toFixed(1) : "—"}</strong></td>
        <td>${fitLabel(score)}</td>
      </tr>`;
    })
    .join("");

  return `
    <div class="screen-full">
      <div class="screen-header"><h4>Investor fit — ${l.name}</h4></div>
      <p class="screen-body">Alignment scores by finance source (illustrative, from Atlas framework).</p>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Investor type</th><th>Fit</th><th>Score</th><th>Level</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
}

function renderScreenPlan() {
  const l = selectedLandscape;
  const fit = getFitScore(l);
  return `
    <div class="screen-full">
      <div class="screen-header"><h4>Investible plan — ${l.name}</h4></div>
      <div class="plan-outline">
        <div class="plan-section"><strong>1. Investment thesis</strong><p>${l.panel.thesis}</p></div>
        <div class="plan-section"><strong>2. Priority pathways</strong><ul>${l.opportunities.map((o) => `<li><em>${o.pathway}:</em> ${o.action}</li>`).join("")}</ul></div>
        <div class="plan-section"><strong>3. Finance strategy</strong><p>Primary fit: <strong>${INVESTOR_LABELS[activeInvestor]}</strong> (score ${fit != null ? fit.toFixed(1) : "—"})</p></div>
        <div class="plan-section"><strong>4. Expected returns</strong><div class="panel-streams">${l.panel.streams.map((s) => `<span class="stream-tag">${s}</span>`).join("")}</div></div>
      </div>
      <button type="button" class="btn btn-sm" disabled>Export PDF (demo)</button>
    </div>`;
}

function renderDashboard() {
  const view = document.getElementById("dashboardView");
  if (!view) return;

  let html = "";
  if (activeScreen === "map") {
    html = `
      <div class="mockup-map" id="mockupMap">${renderMapPins()}</div>
      ${renderDetailPanel()}`;
    view.className = "mockup-content mockup-content-split";
  } else {
    const screens = {
      profile: renderScreenProfile,
      assets: renderScreenAssets,
      opportunity: renderScreenOpportunity,
      returns: renderScreenReturns,
      investor: renderScreenInvestor,
      plan: renderScreenPlan,
    };
    html = screens[activeScreen]?.() || "";
    view.className = "mockup-content mockup-content-full";
  }

  view.innerHTML = html;
  bindDashboardEvents();
}

function selectLandscape(name) {
  const landscape = landscapes.find((l) => l.name === name);
  if (!landscape) return;
  selectedLandscape = landscape;
  renderLandscapes(document.querySelector(".filter-btn.active")?.dataset.filter || "all");
  renderDashboard();
}

function selectScreen(screen) {
  activeScreen = screen;
  document.querySelectorAll(".sidebar-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.screen === screen);
  });
  renderDashboard();
}

function bindDashboardEvents() {
  document.querySelectorAll(".map-pin").forEach((pin) => {
    pin.addEventListener("click", () => selectLandscape(pin.dataset.name));
  });

  document.querySelectorAll(".picker-chip").forEach((chip) => {
    chip.addEventListener("click", () => selectLandscape(chip.dataset.name));
  });

  document.querySelectorAll('[data-action="plan"]').forEach((btn) => {
    btn.addEventListener("click", () => selectScreen("plan"));
  });
}

function initMDIBars() {
  document.querySelectorAll(".mdi-bar-fill").forEach((fill) => {
    fill.style.width = "0%";
    requestAnimationFrame(() => {
      fill.style.width = `${fill.dataset.value}%`;
    });
  });
}

function initPilotTabs() {
  document.querySelectorAll(".pilot-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.pilot;
      document.querySelectorAll(".pilot-tab").forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".pilot-panel").forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`[data-panel="${id}"]`)?.classList.add("active");
    });
  });

  document.getElementById("pilotDashboardLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    selectLandscape("Lake Victoria Basin");
    activeScreen = "plan";
    document.querySelectorAll(".sidebar-item").forEach((i) =>
      i.classList.toggle("active", i.dataset.screen === "plan")
    );
    renderDashboard();
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
  });
}

function openPilotCase() {
  selectLandscape("Lake Victoria Basin");
  document.getElementById("pilot")?.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLandscapes();

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderLandscapes(btn.dataset.filter);
    });
  });

  document.querySelectorAll(".sidebar-item").forEach((item) => {
    item.addEventListener("click", () => selectScreen(item.dataset.screen));
  });

  document.getElementById("investorSelect")?.addEventListener("change", (e) => {
    activeInvestor = e.target.value;
    renderLandscapes(document.querySelector(".filter-btn.active")?.dataset.filter || "all");
    renderDashboard();
  });

  document.getElementById("landscapeGrid")?.addEventListener("click", (e) => {
    const card = e.target.closest(".landscape-card");
    if (!card) return;
    const name = card.dataset.name;
    if (name === "Lake Victoria Basin") {
      openPilotCase();
      return;
    }
    selectLandscape(name);
    activeScreen = "map";
    document.querySelectorAll(".sidebar-item").forEach((i) => i.classList.toggle("active", i.dataset.screen === "map"));
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
  });

  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav?.classList.toggle("scrolled", window.scrollY > 40);
  });

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");
  navToggle?.addEventListener("click", () => navLinks?.classList.toggle("open"));

  renderDashboard();
  initMDIBars();
  initPilotTabs();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".flow-step, .asset-card, .metric-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

  const landscapeObserver = new MutationObserver(() => {
    document.querySelectorAll(".landscape-card").forEach((el) => {
      if (!el.dataset.observed) {
        el.dataset.observed = "1";
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(el);
      }
    });
  });
  landscapeObserver.observe(document.getElementById("landscapeGrid") || document.body, { childList: true });
});
