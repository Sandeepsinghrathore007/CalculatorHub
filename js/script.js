/* =============================================
   CalculatorHub — Shared JavaScript
   ============================================= */

'use strict';

// ── History Manager ──────────────────────────
const History = {
  KEY: 'calculatorhub_history',
  LEGACY_KEY: 'glacier_history',

  load() {
    try {
      const current = localStorage.getItem(this.KEY);
      if (current) return JSON.parse(current) || [];

      const legacy = localStorage.getItem(this.LEGACY_KEY);
      if (legacy) {
        const migrated = JSON.parse(legacy) || [];
        this.save(migrated);
        return migrated;
      }

      return [];
    }
    catch { return []; }
  },

  save(items) {
    try { localStorage.setItem(this.KEY, JSON.stringify(items.slice(0, 10))); }
    catch {}
  },

  add(label, value) {
    const items = this.load();
    items.unshift({ label, value, ts: Date.now() });
    this.save(items);
  },

  render(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const items = this.load();

    if (!items.length) {
      el.innerHTML = '<p class="text-sm text-on-surface-variant/50 text-center py-4">No recent calculations</p>';
      return;
    }

    el.innerHTML = items.slice(0, 5).map((item, i) => `
      <div class="history-item" style="opacity:${1 - i * 0.15}">
        <span class="history-label">${item.label}</span>
        <span class="history-value">${item.value}</span>
      </div>
    `).join('');
  }
};

// ── Utility ──────────────────────────────────
const fmt = (n, dec = 2) =>
  Number(n).toLocaleString('en-IN', { minimumFractionDigits: dec, maximumFractionDigits: dec });

function parseInputDate(value) {
  if (!value) return null;
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function setResult(elId, value, label = '') {
  const el = document.getElementById(elId);
  if (el) el.textContent = value;
  const lbl = document.getElementById(elId + '_label');
  if (lbl && label) lbl.textContent = label;
}

function setBadge(elId, text, type = 'neutral') {
  const el = document.getElementById(elId);
  if (!el) return;
  el.className = `result-badge ${type}`;
  el.innerHTML = `<span class="material-symbols-outlined" style="font-size:14px">${
    type === 'positive' ? 'trending_up' : type === 'negative' ? 'trending_down' : 'info'
  }</span><span>${text}</span>`;
}

// ── Percentage Calculator ─────────────────────
const PercentageCalc = {
  init() {
    const base = document.getElementById('pct_base');
    const pct  = document.getElementById('pct_pct');
    if (!base || !pct) return;
    if (document.querySelector('.mode-tab')) return;

    const calc = () => this.calculate();
    base.addEventListener('input', calc);
    pct.addEventListener('input', calc);
    document.getElementById('pct_btn')?.addEventListener('click', calc);
  },

  calculate() {
    const base = parseFloat(document.getElementById('pct_base')?.value) || 0;
    const pct  = parseFloat(document.getElementById('pct_pct')?.value) || 0;
    const result = (base * pct) / 100;
    const total  = base + result;

    setResult('pct_result', fmt(result));
    setResult('pct_total',  fmt(total));
    setBadge('pct_badge', `+${fmt(result)} of ${fmt(base)}`, 'positive');

    if (base && pct) {
      History.add(`${pct}% of ${fmt(base, 0)}`, fmt(result));
      History.render('history_list');
    }
  }
};

// ── GST Calculator ───────────────────────────
const GSTCalc = {
  init() {
    ['gst_amount','gst_rate'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('gst_btn')?.addEventListener('click', () => this.calculate());
    document.getElementById('gst_type')?.addEventListener('change', () => this.calculate());
  },

  calculate() {
    const amount = parseFloat(document.getElementById('gst_amount')?.value) || 0;
    const rate   = parseFloat(document.getElementById('gst_rate')?.value) || 0;
    const type   = document.getElementById('gst_type')?.value || 'exclusive';

    let gstAmt, baseAmt, totalAmt;

    if (type === 'exclusive') {
      // Amount is base (excluding GST)
      baseAmt  = amount;
      gstAmt   = (amount * rate) / 100;
      totalAmt = amount + gstAmt;
    } else {
      // Amount is total (including GST)
      baseAmt  = (amount * 100) / (100 + rate);
      gstAmt   = amount - baseAmt;
      totalAmt = amount;
    }

    setResult('gst_value',  fmt(gstAmt));
    setResult('gst_base',   fmt(baseAmt));
    setResult('gst_total',  fmt(totalAmt));
    setBadge('gst_badge', `GST @ ${rate}%`, 'neutral');

    if (amount && rate) {
      History.add(`GST ${rate}% on ₹${fmt(baseAmt, 0)}`, `₹${fmt(gstAmt)}`);
      History.render('history_list');
    }
  }
};

// ── EMI Calculator ───────────────────────────
const EMICalc = {
  init() {
    ['emi_principal','emi_rate','emi_tenure'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('emi_btn')?.addEventListener('click', () => this.calculate());
  },

  calculate() {
    const P = parseFloat(document.getElementById('emi_principal')?.value) || 0;
    const annualRate = parseFloat(document.getElementById('emi_rate')?.value) || 0;
    const r = annualRate / 12 / 100;
    const n = parseInt(document.getElementById('emi_tenure')?.value) || 0;

    if (!P || !n) {
      setResult('emi_result', '0.00');
      setResult('emi_interest', '0.00');
      setResult('emi_total', '0.00');
      setBadge('emi_badge', 'Enter loan details', 'neutral');
      return;
    }

    let emi;
    let totalPay;
    let totalInt;

    if (r === 0) {
      emi = P / n;
      totalPay = P;
      totalInt = 0;
    } else {
      emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      totalPay = emi * n;
      totalInt = totalPay - P;
    }

    setResult('emi_result',   fmt(emi));
    setResult('emi_interest', fmt(totalInt));
    setResult('emi_total',    fmt(totalPay));
    setBadge('emi_badge', `${n} months tenure`, 'neutral');

    if (P && n) {
      History.add(`EMI ₹${fmt(P,0)} @ ${annualRate.toFixed(1)}%`, `₹${fmt(emi)}/mo`);
      History.render('history_list');
    }
  }
};

// ── Age Calculator ───────────────────────────
const AgeCalc = {
  init() {
    const dobEl = document.getElementById('age_dob');
    if (!dobEl) return;

    // Custom pages with "as of" date provide their own listeners/calculation flow.
    if (document.getElementById('age_asof')) {
      dobEl.max = new Date().toISOString().split('T')[0];
      return;
    }

    dobEl.addEventListener('change', () => this.calculate());
    document.getElementById('age_btn')?.addEventListener('click', () => this.calculate());

    // Set max date to today
    dobEl.max = new Date().toISOString().split('T')[0];
  },

  calculate() {
    const dobVal = document.getElementById('age_dob')?.value;
    if (!dobVal) return;

    const dob  = parseInputDate(dobVal);
    if (!dob) return;
    const now  = new Date();
    now.setHours(0, 0, 0, 0);

    if (dob > now) {
      setResult('age_years',  '—');
      setResult('age_months', '—');
      setResult('age_days',   '—');
      setBadge('age_badge', 'Date is in the future', 'negative');
      return;
    }

    let years  = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth()    - dob.getMonth();
    let days   = now.getDate()     - dob.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) { years--; months += 12; }

    const totalDays   = Math.floor((now - dob) / 86400000);
    const totalMonths = years * 12 + months;

    setResult('age_years',  years);
    setResult('age_months', months);
    setResult('age_days',   days);
    setResult('age_total_days',   totalDays.toLocaleString('en-IN'));
    setResult('age_total_months', totalMonths.toLocaleString('en-IN'));

    // Next birthday
    const nextBday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
    if (nextBday <= now) nextBday.setFullYear(now.getFullYear() + 1);
    const daysToNext = Math.ceil((nextBday - now) / 86400000);

    setBadge('age_badge', `${daysToNext} days to next birthday 🎂`, 'positive');

    const dobFmt = dob.toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
    History.add(`Age of ${dobFmt}`, `${years}y ${months}m ${days}d`);
    History.render('history_list');
  }
};

// ── Loan Calculator ──────────────────────────
const LoanCalc = {
  init() {
    ['loan_amount', 'loan_rate', 'loan_years'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('loan_btn')?.addEventListener('click', () => this.calculate());
  },

  calculate() {
    const principal = parseFloat(document.getElementById('loan_amount')?.value) || 0;
    const annualRate = parseFloat(document.getElementById('loan_rate')?.value) || 0;
    const years = parseFloat(document.getElementById('loan_years')?.value) || 0;

    const months = Math.round(years * 12);
    if (!principal || !months) {
      setResult('loan_monthly', '0.00');
      setResult('loan_interest', '0.00');
      setResult('loan_total', '0.00');
      setBadge('loan_badge', 'Enter loan details', 'neutral');
      return;
    }

    const monthlyRate = annualRate / 12 / 100;
    let monthlyPayment;

    if (monthlyRate === 0) {
      monthlyPayment = principal / months;
    } else {
      const factor = Math.pow(1 + monthlyRate, months);
      monthlyPayment = (principal * monthlyRate * factor) / (factor - 1);
    }

    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;

    setResult('loan_monthly', fmt(monthlyPayment));
    setResult('loan_interest', fmt(totalInterest));
    setResult('loan_total', fmt(totalPayment));
    setBadge('loan_badge', `${months} months payoff`, 'neutral');

    History.add(
      `Loan ₹${fmt(principal, 0)} @ ${annualRate.toFixed(2)}%`,
      `₹${fmt(monthlyPayment)}/mo`
    );
    History.render('history_list');
  }
};

// ── Salary / In-Hand Calculator (India) ──────
const SalaryCalc = {
  init() {
    ['salary_ctc', 'salary_pf_rate'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('salary_regime')?.addEventListener('change', () => this.calculate());
    document.getElementById('salary_btn')?.addEventListener('click', () => this.calculate());
  },

  calculateTaxOldRegime(income) {
    const slabs = [
      { upto: 250000, rate: 0 },
      { upto: 500000, rate: 0.05 },
      { upto: 1000000, rate: 0.20 },
      { upto: Infinity, rate: 0.30 }
    ];
    return this.calculateSlabTax(income, slabs);
  },

  calculateTaxNewRegime(income) {
    // Approx slabs aligned with common FY 2024-25 defaults.
    const slabs = [
      { upto: 300000, rate: 0 },
      { upto: 700000, rate: 0.05 },
      { upto: 1000000, rate: 0.10 },
      { upto: 1200000, rate: 0.15 },
      { upto: 1500000, rate: 0.20 },
      { upto: Infinity, rate: 0.30 }
    ];
    return this.calculateSlabTax(income, slabs);
  },

  calculateSlabTax(income, slabs) {
    let tax = 0;
    let previous = 0;

    for (const slab of slabs) {
      if (income <= previous) break;
      const taxablePart = Math.min(income, slab.upto) - previous;
      if (taxablePart > 0) tax += taxablePart * slab.rate;
      previous = slab.upto;
    }

    return tax;
  },

  calculate() {
    const ctc = parseFloat(document.getElementById('salary_ctc')?.value) || 0;
    const pfRate = parseFloat(document.getElementById('salary_pf_rate')?.value) || 0;
    const regime = document.getElementById('salary_regime')?.value || 'new';

    if (!ctc) {
      setResult('salary_monthly', '0.00');
      setResult('salary_tax', '0.00');
      setResult('salary_pf', '0.00');
      setResult('salary_annual', '0.00');
      setBadge('salary_badge', 'Enter annual CTC', 'neutral');
      return;
    }

    const basic = ctc * 0.40;
    const employeePf = basic * (pfRate / 100);
    const standardDeduction = 50000;
    const taxableIncome = Math.max(0, ctc - standardDeduction);

    let incomeTax = regime === 'old'
      ? this.calculateTaxOldRegime(taxableIncome)
      : this.calculateTaxNewRegime(taxableIncome);

    // Common rebate approximation.
    if (regime === 'old' && taxableIncome <= 500000) incomeTax = 0;
    if (regime === 'new' && taxableIncome <= 700000) incomeTax = 0;

    const cess = incomeTax * 0.04;
    const totalTax = incomeTax + cess;
    const annualInHand = Math.max(0, ctc - employeePf - totalTax);
    const monthlyInHand = annualInHand / 12;

    setResult('salary_monthly', fmt(monthlyInHand));
    setResult('salary_tax', fmt(totalTax));
    setResult('salary_pf', fmt(employeePf));
    setResult('salary_annual', fmt(annualInHand));
    setBadge(
      'salary_badge',
      `${regime === 'new' ? 'New' : 'Old'} regime estimate`,
      'neutral'
    );

    History.add(
      `In-hand for ₹${fmt(ctc, 0)} CTC`,
      `₹${fmt(monthlyInHand)}/mo`
    );
    History.render('history_list');
  }
};

// ── BMI Calculator ───────────────────────────
const BMICalc = {
  init() {
    ['bmi_weight', 'bmi_height'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('bmi_btn')?.addEventListener('click', () => this.calculate());
  },

  calculate() {
    const weightKg = parseFloat(document.getElementById('bmi_weight')?.value) || 0;
    const heightCm = parseFloat(document.getElementById('bmi_height')?.value) || 0;

    if (!weightKg || !heightCm) {
      setResult('bmi_value', '0.00');
      setResult('bmi_range', '0.00 - 0.00');
      setBadge('bmi_badge', 'Enter height and weight', 'neutral');
      return;
    }

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    let category = 'Normal';
    let badgeType = 'positive';
    if (bmi < 18.5) {
      category = 'Underweight';
      badgeType = 'negative';
    } else if (bmi < 25) {
      category = 'Normal';
      badgeType = 'positive';
    } else if (bmi < 30) {
      category = 'Overweight';
      badgeType = 'negative';
    } else {
      category = 'Obesity';
      badgeType = 'negative';
    }

    const minHealthy = 18.5 * heightM * heightM;
    const maxHealthy = 24.9 * heightM * heightM;

    setResult('bmi_value', fmt(bmi, 2));
    setResult('bmi_range', `${fmt(minHealthy, 1)} - ${fmt(maxHealthy, 1)} kg`);
    setBadge('bmi_badge', category, badgeType);

    History.add(
      `BMI for ${fmt(heightCm, 0)}cm / ${fmt(weightKg, 1)}kg`,
      fmt(bmi, 2)
    );
    History.render('history_list');
  }
};

// ── Mobile Nav ───────────────────────────────
function initMobileNav() {
  const btn  = document.getElementById('mobile_menu_btn');
  const menu = document.getElementById('mobile_menu');
  if (!btn || !menu) return;
  if (!btn.getAttribute('aria-label')) {
    btn.setAttribute('aria-label', 'Toggle navigation menu');
  }
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'mobile_menu');

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

function initIconAccessibility() {
  document.querySelectorAll('.material-symbols-outlined').forEach(icon => {
    if (!icon.hasAttribute('aria-label') && !icon.hasAttribute('role')) {
      icon.setAttribute('aria-hidden', 'true');
    }
  });
}

// ── Bootstrap on DOMContentLoaded ────────────
document.addEventListener('DOMContentLoaded', () => {
  initIconAccessibility();
  initMobileNav();
  History.render('history_list');
  PercentageCalc.init();
  GSTCalc.init();
  EMICalc.init();
  AgeCalc.init();
  LoanCalc.init();
  SalaryCalc.init();
  BMICalc.init();
});
