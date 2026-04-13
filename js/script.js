/* =============================================
   CalculatorHub — Shared JavaScript
   ============================================= */

'use strict';

// ── Site Navigation ──────────────────────────
const siteNavCategories = [
  {
    id: 'finance',
    label: 'Finance',
    description: 'Loans, investing, and long-term money planning.',
    icon: 'account_balance_wallet'
  },
  {
    id: 'tax',
    label: 'Tax & Salary',
    description: 'Income, payroll, and tax-planning calculators.',
    icon: 'receipt_long'
  },
  {
    id: 'health',
    label: 'Health',
    description: 'Health and body metrics at a glance.',
    icon: 'favorite'
  },
  {
    id: 'math',
    label: 'Math',
    description: 'Quick percentage and number helpers.',
    icon: 'calculate'
  },
  {
    id: 'utilities',
    label: 'Utilities',
    description: 'Everyday conversion and planning tools.',
    icon: 'conversion_path'
  }
];

const siteNavCategoryMap = new Map(siteNavCategories.map(category => [category.id, category]));

const siteNavCalculators = [
  {
    title: 'EMI Calculator',
    href: 'emi-calculator.html',
    category: 'finance',
    description: 'Estimate monthly loan payments with a clear repayment snapshot.',
    keywords: ['emi', 'loan emi', 'monthly payment', 'home loan', 'car loan'],
    featured: true
  },
  {
    title: 'Loan Calculator',
    href: 'loan-calculator.html',
    category: 'finance',
    description: 'Review monthly payments, total interest, and repayment totals.',
    keywords: ['loan', 'repayment', 'borrow', 'interest'],
    featured: true
  },
  {
    title: 'Loan Prepayment Calculator',
    href: 'loan-prepayment-calculator.html',
    category: 'finance',
    description: 'See how extra payments reduce interest and shorten your loan term.',
    keywords: ['prepayment', 'loan closure', 'extra payment', 'principal reduction']
  },
  {
    title: 'Mortgage Calculator',
    href: 'mortgage-calculator.html',
    category: 'finance',
    description: 'Model monthly mortgage costs for home-buying decisions.',
    keywords: ['mortgage', 'home loan', 'house payment']
  },
  {
    title: 'Compound Interest Calculator',
    href: 'compound-interest-calculator.html',
    category: 'finance',
    description: 'Project future value with lump sums and recurring contributions.',
    keywords: ['compound interest', 'investment growth', 'future value'],
    featured: true
  },
  {
    title: 'SIP Calculator',
    href: 'sip-calculator.html',
    category: 'finance',
    description: 'Estimate SIP maturity, invested capital, and growth over time.',
    keywords: ['sip', 'mutual fund', 'systematic investment plan', 'wealth'],
    featured: true
  },
  {
    title: 'Retirement Corpus Calculator',
    href: 'retirement-corpus-calculator.html',
    category: 'finance',
    description: 'Plan the corpus you need for long-term retirement goals.',
    keywords: ['retirement', 'corpus', 'retire early', 'future planning']
  },
  {
    title: 'ROI Calculator',
    href: 'roi-calculator.html',
    category: 'finance',
    description: 'Measure return on investment, profit, and annualized performance.',
    keywords: ['roi', 'return on investment', 'profit', 'investment return']
  },
  {
    title: 'Inflation Calculator',
    href: 'inflation-calculator.html',
    category: 'finance',
    description: 'Understand future prices and changes in purchasing power.',
    keywords: ['inflation', 'future cost', 'purchasing power']
  },
  {
    title: 'Net Worth Calculator',
    href: 'net-worth-calculator.html',
    category: 'finance',
    description: 'Add assets and liabilities to get a fast net-worth snapshot.',
    keywords: ['net worth', 'assets', 'liabilities', 'balance sheet']
  },
  {
    title: 'GST Calculator',
    href: 'gst-calculator.html',
    category: 'tax',
    description: 'Calculate GST-inclusive and GST-exclusive prices instantly.',
    keywords: ['gst', 'goods and services tax', 'tax amount'],
    featured: true
  },
  {
    title: 'Income Tax Calculator',
    href: 'income-tax-calculator.html',
    category: 'tax',
    description: 'Estimate income tax for supported regions in one flow.',
    keywords: ['income tax', 'tax slab', 'federal tax', 'tax estimate'],
    featured: true
  },
  {
    title: 'Old vs New Tax Regime Calculator',
    href: 'old-new-tax-regime-calculator.html',
    category: 'tax',
    description: 'Compare India old and new tax regimes side by side.',
    keywords: ['old tax regime', 'new tax regime', 'tax comparison']
  },
  {
    title: 'HRA Exemption Calculator',
    href: 'hra-exemption-calculator.html',
    category: 'tax',
    description: 'Estimate HRA exemption with salary, rent, and city inputs.',
    keywords: ['hra', 'house rent allowance', 'salary tax']
  },
  {
    title: 'Salary Calculator',
    href: 'salary-calculator.html',
    category: 'tax',
    description: 'Estimate in-hand salary from annual CTC and deductions.',
    keywords: ['salary', 'ctc', 'in hand', 'pay'],
    featured: true
  },
  {
    title: 'Take-Home Pay Calculator',
    href: 'take-home-pay-calculator.html',
    category: 'tax',
    description: 'Preview paycheck totals after deductions and taxes.',
    keywords: ['take home pay', 'paycheck', 'net salary', 'payroll']
  },
  {
    title: 'BMI Calculator',
    href: 'bmi-calculator.html',
    category: 'health',
    description: 'Check body mass index and weight status in seconds.',
    keywords: ['bmi', 'body mass index', 'healthy weight'],
    featured: true
  },
  {
    title: 'Percentage Calculator',
    href: 'percentage-calculator.html',
    category: 'math',
    description: 'Handle percentages, increases, decreases, and ratios quickly.',
    keywords: ['percentage', 'percent', 'ratio', 'increase', 'decrease']
  },
  {
    title: 'Age Calculator',
    href: 'age-calculator.html',
    category: 'utilities',
    description: 'Find exact age in years, months, and days.',
    keywords: ['age', 'date difference', 'birthday', 'years months days'],
    featured: true
  },
  {
    title: 'Currency Converter',
    href: 'currency-converter.html',
    category: 'utilities',
    description: 'Convert currencies with fresh rates and easy comparisons.',
    keywords: ['currency', 'exchange rate', 'forex', 'conversion'],
    featured: true
  },
  {
    title: 'Time Zone Converter',
    href: 'time-zone-converter.html',
    category: 'utilities',
    description: 'Translate times across global cities with DST-aware output.',
    keywords: ['time zone', 'timezone', 'meeting planner', 'utc']
  },
  {
    title: 'Fuel Cost Calculator',
    href: 'fuel-cost-calculator.html',
    category: 'utilities',
    description: 'Estimate trip fuel costs based on distance and mileage.',
    keywords: ['fuel', 'trip cost', 'mileage', 'petrol', 'diesel']
  }
].map(calculator => {
  const category = siteNavCategoryMap.get(calculator.category);
  return {
    ...calculator,
    categoryLabel: category ? category.label : 'Calculator',
    searchText: [
      calculator.title,
      calculator.description,
      category ? category.label : '',
      ...(calculator.keywords || [])
    ].join(' ').toLowerCase()
  };
});

function getCurrentPagePath() {
  const current = window.location.pathname.split('/').pop();
  return current || 'index.html';
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function normalizeSearchValue(value) {
  return String(value || '').trim().toLowerCase();
}

function getCategoryCalculators(categoryId) {
  return siteNavCalculators.filter(calculator => calculator.category === categoryId);
}

function scoreCalculatorMatch(calculator, query) {
  if (!query) return calculator.featured ? 10 : 1;

  let score = 0;
  const title = calculator.title.toLowerCase();
  const description = calculator.description.toLowerCase();
  const category = calculator.categoryLabel.toLowerCase();

  if (title === query) score += 350;
  if (title.startsWith(query)) score += 220;
  if (title.includes(query)) score += 120;
  if (description.includes(query)) score += 40;
  if (category.includes(query)) score += 24;

  calculator.keywords.forEach(keyword => {
    const normalizedKeyword = keyword.toLowerCase();
    if (normalizedKeyword === query) score += 160;
    else if (normalizedKeyword.startsWith(query)) score += 80;
    else if (normalizedKeyword.includes(query)) score += 36;
  });

  return score;
}

function getCalculatorMatches(query, limit = siteNavCalculators.length) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    const ordered = [
      ...siteNavCalculators.filter(calculator => calculator.featured),
      ...siteNavCalculators.filter(calculator => !calculator.featured)
    ];
    return ordered.slice(0, limit);
  }

  return siteNavCalculators
    .map(calculator => ({ calculator, score: scoreCalculatorMatch(calculator, normalizedQuery) }))
    .filter(item => item.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      return left.calculator.title.localeCompare(right.calculator.title);
    })
    .slice(0, limit)
    .map(item => item.calculator);
}

function renderDirectoryLink(calculator, currentPage, variant = 'desktop') {
  const isCurrent = calculator.href === currentPage;
  const currentAttr = isCurrent ? ' aria-current="page"' : '';
  const currentBadge = isCurrent ? '<span class="site-directory-link__badge">Current</span>' : '';

  return `
    <a
      class="site-directory-link site-directory-link--${variant}${isCurrent ? ' is-current' : ''}"
      href="${calculator.href}"
      data-calculator-link
      data-category="${calculator.category}"
      data-search="${escapeHtml(calculator.searchText)}"
      ${currentAttr}
    >
      <span class="site-directory-link__copy">
        <span class="site-directory-link__title">${calculator.title}</span>
        <span class="site-directory-link__desc">${calculator.description}</span>
      </span>
      <span class="site-directory-link__meta">
        ${currentBadge}
        <span class="material-symbols-outlined" aria-hidden="true">arrow_outward</span>
      </span>
    </a>
  `;
}

function renderDirectoryGroup(category, currentPage, variant = 'desktop') {
  const calculators = getCategoryCalculators(category.id);

  return `
    <section
      class="site-directory-group site-directory-group--${variant}"
      data-directory-group
      data-category="${category.id}"
    >
      <div class="site-directory-group__header">
        <div class="site-directory-group__icon">
          <span class="material-symbols-outlined" aria-hidden="true">${category.icon}</span>
        </div>
        <div class="site-directory-group__copy">
          <h3>${category.label}</h3>
          <p>${category.description}</p>
        </div>
        <span class="site-directory-group__count">${calculators.length}</span>
      </div>
      <div class="site-directory-group__links">
        ${calculators.map(calculator => renderDirectoryLink(calculator, currentPage, variant)).join('')}
      </div>
    </section>
  `;
}

function renderCategoryFilters(scope, activeCategory) {
  const allButton = `
    <button
      type="button"
      class="site-nav-filter${activeCategory === 'all' ? ' is-active' : ''}"
      data-directory-filter="all"
      data-filter-scope="${scope}"
      aria-pressed="${activeCategory === 'all' ? 'true' : 'false'}"
    >
      <span>All</span>
      <span class="site-nav-filter__count">${siteNavCalculators.length}</span>
    </button>
  `;

  return allButton + siteNavCategories.map(category => `
    <button
      type="button"
      class="site-nav-filter${activeCategory === category.id ? ' is-active' : ''}"
      data-directory-filter="${category.id}"
      data-filter-scope="${scope}"
      aria-pressed="${activeCategory === category.id ? 'true' : 'false'}"
    >
      <span>${category.label}</span>
      <span class="site-nav-filter__count">${getCategoryCalculators(category.id).length}</span>
    </button>
  `).join('');
}

function renderCategoryShortcut(category) {
  const calculators = getCategoryCalculators(category.id);
  const preview = calculators
    .slice(0, 2)
    .map(calculator => calculator.title.replace(' Calculator', ''))
    .join(' / ');

  return `
    <button
      type="button"
      class="site-nav-category-shortcut"
      data-category-shortcut="${category.id}"
    >
      <span class="site-nav-category-shortcut__icon">
        <span class="material-symbols-outlined" aria-hidden="true">${category.icon}</span>
      </span>
      <span class="site-nav-category-shortcut__copy">
        <span class="site-nav-category-shortcut__title">${category.label}</span>
        <span class="site-nav-category-shortcut__desc">${category.description}</span>
        <span class="site-nav-category-shortcut__meta">${calculators.length} tools / ${preview}</span>
      </span>
      <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
    </button>
  `;
}

function renderQuickSearchResults(query, currentPage) {
  const results = getCalculatorMatches(query, 6);
  const normalizedQuery = normalizeSearchValue(query);
  const title = normalizedQuery ? 'Matching calculators' : 'Popular calculators';

  if (!results.length) {
    return `
      <div class="site-nav-search-results__header">
        <span>${title}</span>
      </div>
      <p class="site-nav-search-results__empty">No calculators matched "${escapeHtml(query)}".</p>
    `;
  }

  return `
    <div class="site-nav-search-results__header">
      <span>${title}</span>
      <span>${results.length}</span>
    </div>
    <div class="site-nav-search-results__list">
      ${results.map(calculator => `
        <a
          class="site-nav-search-result${calculator.href === currentPage ? ' is-current' : ''}"
          href="${calculator.href}"
          ${calculator.href === currentPage ? 'aria-current="page"' : ''}
        >
          <span class="site-nav-search-result__copy">
            <span class="site-nav-search-result__title">${calculator.title}</span>
            <span class="site-nav-search-result__meta">${calculator.categoryLabel}</span>
          </span>
          <span class="material-symbols-outlined" aria-hidden="true">north_east</span>
        </a>
      `).join('')}
    </div>
  `;
}

const topNavDropdowns = [
  {
    id: 'finance',
    label: 'Finance',
    items: [
      { href: 'emi-calculator.html', label: 'EMI' },
      { href: 'sip-calculator.html', label: 'SIP' },
      { href: 'compound-interest-calculator.html', label: 'Compound Interest' },
      { href: 'loan-calculator.html', label: 'Loan' },
      { href: 'roi-calculator.html', label: 'ROI' },
      { href: 'mortgage-calculator.html', label: 'Mortgage' },
      { href: 'loan-prepayment-calculator.html', label: 'Loan Prepayment' },
      { href: 'retirement-corpus-calculator.html', label: 'Retirement Corpus' },
      { href: 'inflation-calculator.html', label: 'Inflation' },
      { href: 'net-worth-calculator.html', label: 'Net Worth' }
    ]
  },
  {
    id: 'tax',
    label: 'Tax & Salary',
    items: [
      { href: 'gst-calculator.html', label: 'GST' },
      { href: 'income-tax-calculator.html', label: 'Income Tax' },
      { href: 'salary-calculator.html', label: 'Salary' },
      { href: 'take-home-pay-calculator.html', label: 'Take-Home Pay' },
      { href: 'hra-exemption-calculator.html', label: 'HRA' },
      { href: 'old-new-tax-regime-calculator.html', label: 'Old vs New Regime' }
    ]
  },
  {
    id: 'health',
    label: 'Health',
    items: [
      { href: 'bmi-calculator.html', label: 'BMI' },
      { href: 'age-calculator.html', label: 'Age' }
    ]
  },
  {
    id: 'utilities',
    label: 'Math & Utility',
    items: [
      { href: 'percentage-calculator.html', label: 'Percentage' },
      { href: 'time-zone-converter.html', label: 'Time Zone' },
      { href: 'currency-converter.html', label: 'Currency' },
      { href: 'fuel-cost-calculator.html', label: 'Fuel Cost' }
    ]
  }
];

function getCalculatorByHref(href) {
  return siteNavCalculators.find(calculator => calculator.href === href) || null;
}

function renderTopNavDropdown(dropdown, currentPage) {
  const isCurrentGroup = dropdown.items.some(item => item.href === currentPage);

  return `
    <div
      class="relative h-full flex items-center group nav-item-dropdown cursor-pointer"
      data-dropdown
    >
      <button
        type="button"
        class="top-nav-dropdown-trigger text-[#bec8cd] pb-1 hover:text-[#7ddbfc] transition-colors duration-300 flex items-center gap-1${isCurrentGroup ? ' is-current' : ''}"
        data-dropdown-trigger
        aria-expanded="false"
      >
        <span>${dropdown.label}</span>
        <span class="material-symbols-outlined text-[16px]" aria-hidden="true">expand_more</span>
      </button>
      <div
        class="dropdown-menu hidden absolute top-full left-0 w-64 bg-surface-container shadow-2xl rounded-b-xl overflow-hidden py-4 border-t-2 border-primary-container"
      >
        ${dropdown.items.map(item => {
          const isCurrent = item.href === currentPage;
          return `
            <a
              class="block px-6 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-primary-container transition-all${isCurrent ? ' bg-surface-container-high text-primary-container' : ''}"
              href="${item.href}"
              ${isCurrent ? 'aria-current="page"' : ''}
            >${item.label}</a>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderTopNavMobileGroup(dropdown, currentPage) {
  return `
    <section class="top-nav-mobile-group" data-mobile-group>
      <h2 class="top-nav-mobile-group__title">${dropdown.label}</h2>
      <div class="space-y-2">
        ${dropdown.items.map(item => {
          const calculator = getCalculatorByHref(item.href);
          const isCurrent = item.href === currentPage;
          const searchText = calculator
            ? calculator.searchText
            : `${item.label} ${dropdown.label}`.toLowerCase();

          return `
            <a
              href="${item.href}"
              class="top-nav-mobile-link${isCurrent ? ' is-current' : ''}"
              data-mobile-calculator-link
              data-search="${escapeHtml(searchText)}"
              ${isCurrent ? 'aria-current="page"' : ''}
            >
              <span>${item.label}</span>
              <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
            </a>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function buildSiteNavMarkup(currentPage) {
  const isHome = currentPage === 'index.html';
  const isContact = currentPage === 'contact.html';
  const isPrivacy = currentPage === 'privacy-policy.html';
  const isTerms = currentPage === 'terms.html';

  return `
    <div class="mx-auto w-full max-w-7xl h-full" data-nav-shell>
      <nav class="flex justify-between items-center px-4 md:px-8 h-full w-full max-w-none gap-4" aria-label="Primary navigation">
        <a href="index.html" class="flex items-center space-x-2 shrink-0" aria-label="CalculatorHub home">
          <span class="text-xl font-black tracking-tighter text-[#dfe2f3]">CalculatorHub</span>
        </a>

        <div
          class="hidden md:flex items-center space-x-8 h-full font-['Inter'] font-medium text-sm tracking-wide"
        >
          ${topNavDropdowns.map(dropdown => renderTopNavDropdown(dropdown, currentPage)).join('')}
        </div>

        <div class="flex items-center space-x-3 md:space-x-6">
          <form class="relative group hidden md:block" role="search" aria-label="Quick calculator search" data-quick-search-form>
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <span
                class="material-symbols-outlined text-[#bec8cd] group-focus-within:text-[#7ddbfc] transition-colors"
                aria-hidden="true"
              >search</span>
            </div>
            <input
              class="bg-surface-container-lowest border-0 ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary-container/50 text-on-surface text-sm rounded-lg block w-64 pl-10 p-2 transition-all duration-300 placeholder:text-on-surface-variant/50"
              placeholder="Search calculators..."
              type="search"
              data-quick-search-input
              autocomplete="off"
              aria-label="Search calculators from the navigation bar"
            />
            <div class="site-nav-search-results" data-quick-results role="list">
              ${renderQuickSearchResults('', currentPage)}
            </div>
          </form>

          <button
            type="button"
            class="top-nav-mobile-toggle md:hidden"
            data-mobile-toggle
            aria-controls="site-mobile-menu"
            aria-expanded="false"
            aria-label="Open navigation menu"
          >
            <span class="material-symbols-outlined" aria-hidden="true">menu</span>
          </button>
        </div>
      </nav>
    </div>

    <div id="site-mobile-menu" class="mobile-menu md:hidden" data-mobile-menu>
      <div class="flex items-center justify-between gap-4">
        <p class="text-sm font-semibold tracking-wide text-[#dfe2f3]">Browse Calculators</p>
        <button type="button" class="top-nav-mobile-toggle" data-mobile-close aria-label="Close navigation menu">
          <span class="material-symbols-outlined" aria-hidden="true">close</span>
        </button>
      </div>

      <div class="flex flex-wrap gap-2">
        <a href="index.html" class="top-nav-mobile-chip${isHome ? ' is-current' : ''}" ${isHome ? 'aria-current="page"' : ''}>Home</a>
        <a href="contact.html" class="top-nav-mobile-chip${isContact ? ' is-current' : ''}" ${isContact ? 'aria-current="page"' : ''}>Contact</a>
        <a href="privacy-policy.html" class="top-nav-mobile-chip${isPrivacy ? ' is-current' : ''}" ${isPrivacy ? 'aria-current="page"' : ''}>Privacy</a>
        <a href="terms.html" class="top-nav-mobile-chip${isTerms ? ' is-current' : ''}" ${isTerms ? 'aria-current="page"' : ''}>Terms</a>
      </div>

      <form class="relative group" role="search" aria-label="Search calculators on mobile" data-mobile-search-form>
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <span
            class="material-symbols-outlined text-[#bec8cd] group-focus-within:text-[#7ddbfc] transition-colors"
            aria-hidden="true"
          >search</span>
        </div>
        <input
          class="bg-surface-container-lowest border-0 ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary-container/50 text-on-surface text-sm rounded-lg block w-full pl-10 p-2 transition-all duration-300 placeholder:text-on-surface-variant/50"
          placeholder="Search calculators..."
          type="search"
          data-mobile-search-input
          autocomplete="off"
          aria-label="Search calculators on mobile"
        />
      </form>

      <p class="top-nav-mobile-empty" data-mobile-empty hidden>No calculators matched your search.</p>

      ${topNavDropdowns.map(dropdown => renderTopNavMobileGroup(dropdown, currentPage)).join('')}
    </div>
  `;
}

function initSiteNav() {
  const existingNav = document.querySelector('body > nav, body > header');
  if (!existingNav) return;

  const currentPage = getCurrentPagePath();
  const nav = document.createElement('header');
  nav.className = 'top-site-navbar fixed top-0 w-full z-50 transition-all duration-200 ease-in-out glass-nav shadow-2xl shadow-black/20 h-16';
  nav.dataset.panel = '';
  nav.dataset.quickSearchOpen = 'false';
  nav.dataset.mobileOpen = 'false';
  nav.innerHTML = buildSiteNavMarkup(currentPage);
  existingNav.replaceWith(nav);

  document.body.classList.add('has-enhanced-nav');

  const shell = nav.querySelector('[data-nav-shell]');
  const quickSearchForm = nav.querySelector('[data-quick-search-form]');
  const quickSearchInput = nav.querySelector('[data-quick-search-input]');
  const quickResults = nav.querySelector('[data-quick-results]');
  const dropdowns = nav.querySelectorAll('[data-dropdown]');
  const mobileToggle = nav.querySelector('[data-mobile-toggle]');
  const mobileClose = nav.querySelector('[data-mobile-close]');
  const mobileMenu = nav.querySelector('[data-mobile-menu]');
  const mobileSearchForm = nav.querySelector('[data-mobile-search-form]');
  const mobileSearchInput = nav.querySelector('[data-mobile-search-input]');
  const mobileEmpty = nav.querySelector('[data-mobile-empty]');
  const mobileGroups = nav.querySelectorAll('[data-mobile-group]');

  const state = {
    quickSearchOpen: false,
    mobileOpen: false
  };

  let navResizeObserver = null;

  const syncNavHeight = () => {
    const target = shell || nav;
    const nextHeight = Math.ceil(target.getBoundingClientRect().height || 64);
    document.documentElement.style.setProperty('--site-nav-height', `${nextHeight}px`);
    document.body.style.setProperty('--site-nav-height', `${nextHeight}px`);
  };

  const setQuickSearchOpen = isOpen => {
    state.quickSearchOpen = isOpen;
    nav.dataset.quickSearchOpen = isOpen ? 'true' : 'false';
  };

  const closeQuickSearch = () => setQuickSearchOpen(false);

  const setMobileOpen = isOpen => {
    state.mobileOpen = isOpen;
    nav.dataset.mobileOpen = isOpen ? 'true' : 'false';
    mobileToggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileMenu?.classList.toggle('open', isOpen);
    document.body.classList.toggle('nav-locked', isOpen);

    if (isOpen) {
      closeQuickSearch();
      window.setTimeout(() => mobileSearchInput?.focus(), 120);
    }
  };

  const renderQuickSearch = query => {
    if (!quickResults) return;
    quickResults.innerHTML = renderQuickSearchResults(query, currentPage);
  };

  const applyMobileSearch = () => {
    const query = normalizeSearchValue(mobileSearchInput?.value || '');
    let totalVisible = 0;

    mobileGroups.forEach(group => {
      let groupVisible = 0;

      group.querySelectorAll('[data-mobile-calculator-link]').forEach(link => {
        const isVisible = !query || link.dataset.search.includes(query);
        link.hidden = !isVisible;
        if (isVisible) groupVisible++;
      });

      group.hidden = groupVisible === 0;
      totalVisible += groupVisible;
    });

    if (mobileEmpty) {
      mobileEmpty.hidden = totalVisible !== 0;
    }
  };

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');
    const setExpanded = isOpen => {
      trigger?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      dropdown.classList.toggle('is-open', isOpen);
    };

    dropdown.addEventListener('mouseenter', () => setExpanded(true));
    dropdown.addEventListener('mouseleave', () => setExpanded(false));
    dropdown.addEventListener('focusin', () => setExpanded(true));
    dropdown.addEventListener('focusout', event => {
      if (!dropdown.contains(event.relatedTarget)) {
        setExpanded(false);
      }
    });
  });

  quickSearchInput?.addEventListener('focus', () => {
    renderQuickSearch(quickSearchInput.value);
    setQuickSearchOpen(true);
  });

  quickSearchInput?.addEventListener('input', () => {
    renderQuickSearch(quickSearchInput.value);
    setQuickSearchOpen(true);
  });

  quickSearchForm?.addEventListener('submit', event => {
    event.preventDefault();
    const query = quickSearchInput?.value || '';
    const normalizedQuery = normalizeSearchValue(query);

    if (!normalizedQuery) {
      renderQuickSearch('');
      setQuickSearchOpen(true);
      return;
    }

    const [match] = getCalculatorMatches(query, 1);

    if (match) {
      window.location.href = match.href;
      return;
    }

    renderQuickSearch(query);
    setQuickSearchOpen(true);
  });

  mobileToggle?.addEventListener('click', () => setMobileOpen(!state.mobileOpen));
  mobileClose?.addEventListener('click', () => setMobileOpen(false));

  mobileSearchInput?.addEventListener('input', applyMobileSearch);
  mobileSearchForm?.addEventListener('submit', event => {
    event.preventDefault();
    if (!normalizeSearchValue(mobileSearchInput?.value || '')) {
      applyMobileSearch();
      return;
    }

    const [match] = getCalculatorMatches(mobileSearchInput?.value || '', 1);
    if (match) {
      window.location.href = match.href;
    }
  });

  nav.querySelectorAll('[data-mobile-menu] a').forEach(link => {
    link.addEventListener('click', () => setMobileOpen(false));
  });

  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) {
      closeQuickSearch();
      setMobileOpen(false);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeQuickSearch();
      setMobileOpen(false);
      quickSearchInput?.blur();
      mobileSearchInput?.blur();
    }
  });

  window.addEventListener('resize', () => {
    syncNavHeight();

    if (window.innerWidth >= 768) {
      setMobileOpen(false);
    }
  });

  applyMobileSearch();
  syncNavHeight();
  window.requestAnimationFrame(syncNavHeight);
  window.addEventListener('load', syncNavHeight, { once: true });

  if ('ResizeObserver' in window) {
    navResizeObserver = new ResizeObserver(() => {
      syncNavHeight();
    });
    navResizeObserver.observe(shell || nav);
  }

  renderQuickSearch('');
}

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
const currencyConfig = {
  INR: { locale: 'en-IN', currency: 'INR' },
  USD: { locale: 'en-US', currency: 'USD' },
  GBP: { locale: 'en-GB', currency: 'GBP' },
  EUR: { locale: 'de-DE', currency: 'EUR' }
};

const fmt = (n, dec = 2) =>
  Number(n).toLocaleString('en-IN', { minimumFractionDigits: dec, maximumFractionDigits: dec });

function formatCurrency(n, currency = 'INR', dec = 2) {
  const cfg = currencyConfig[currency] || { locale: 'en', currency };
  return Number(n).toLocaleString(cfg.locale, {
    style: 'currency',
    currency: cfg.currency,
    minimumFractionDigits: dec,
    maximumFractionDigits: dec
  });
}

function formatDuration(months) {
  const safeMonths = Math.max(0, Math.round(months));
  const years = Math.floor(safeMonths / 12);
  const remMonths = safeMonths % 12;
  if (!years) return `${remMonths} mo`;
  if (!remMonths) return `${years} yr`;
  return `${years} yr ${remMonths} mo`;
}

function calculateAmortizedPayment(principal, annualRate, months) {
  if (!principal || !months) return 0;
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

function simulateLoanRepayment(principal, annualRate, monthlyPayment) {
  let balance = Math.max(0, principal);
  const monthlyRate = annualRate / 12 / 100;
  let months = 0;
  let totalInterest = 0;
  let totalPaid = 0;

  if (!balance || !monthlyPayment) {
    return { months, totalInterest, totalPaid };
  }

  if (monthlyRate === 0) {
    months = Math.ceil(balance / monthlyPayment);
    totalPaid = balance;
    return { months, totalInterest, totalPaid };
  }

  const firstMonthInterest = balance * monthlyRate;
  if (monthlyPayment <= firstMonthInterest) {
    return { months: Infinity, totalInterest: Infinity, totalPaid: Infinity };
  }

  while (balance > 0.01 && months < 1200) {
    const interest = balance * monthlyRate;
    let principalPaid = monthlyPayment - interest;

    if (principalPaid > balance) {
      principalPaid = balance;
      totalPaid += interest + principalPaid;
    } else {
      totalPaid += monthlyPayment;
    }

    totalInterest += interest;
    balance -= principalPaid;
    months++;
  }

  return { months, totalInterest, totalPaid };
}

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

function calculateProgressiveTax(income, brackets) {
  const safeIncome = Math.max(0, income);
  let tax = 0;
  let previous = 0;

  for (const slab of brackets) {
    if (safeIncome <= previous) break;
    const upper = slab.upto === Infinity ? safeIncome : Math.min(safeIncome, slab.upto);
    const taxablePart = upper - previous;
    if (taxablePart > 0) tax += taxablePart * slab.rate;
    previous = slab.upto === Infinity ? safeIncome : slab.upto;
  }

  return tax;
}

function getPayPeriods(frequency) {
  return {
    weekly: 52,
    biweekly: 26,
    semimonthly: 24,
    monthly: 12
  }[frequency] || 12;
}

function getPayFrequencyLabel(frequency, locale = 'generic') {
  const labels = {
    weekly: locale === 'uk' ? 'Net Per Week' : 'Net Per Paycheck',
    biweekly: 'Net Per Paycheck',
    semimonthly: 'Net Per Paycheck',
    monthly: 'Net Per Month'
  };
  return labels[frequency] || 'Net Per Period';
}

function toggleVisibility(elId, visible) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.classList.toggle('hidden', !visible);
}

function toggleSelectedTab(selector, activeValue, attrName) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute(attrName) === activeValue);
  });
}

function sumNumbers(values) {
  return values.reduce((total, value) => total + (Number(value) || 0), 0);
}

function formatDateTimeInputValue(date = new Date()) {
  const local = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
  return local.toISOString().slice(0, 16);
}

const commonTimeZones = [
  'UTC',
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Phoenix',
  'America/Toronto',
  'America/Vancouver',
  'America/Mexico_City',
  'America/Sao_Paulo',
  'Europe/London',
  'Europe/Dublin',
  'Europe/Paris',
  'Europe/Berlin',
  'Europe/Madrid',
  'Europe/Rome',
  'Europe/Amsterdam',
  'Europe/Zurich',
  'Europe/Istanbul',
  'Africa/Johannesburg',
  'Asia/Dubai',
  'Asia/Kolkata',
  'Asia/Bangkok',
  'Asia/Singapore',
  'Asia/Hong_Kong',
  'Asia/Shanghai',
  'Asia/Tokyo',
  'Asia/Seoul',
  'Australia/Perth',
  'Australia/Sydney',
  'Pacific/Auckland'
];

function getTimeZoneLabel(timeZone) {
  return timeZone.replaceAll('_', ' ');
}

function getTimeZoneOffsetMinutes(date, timeZone) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'shortOffset',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const zoneName = formatter.formatToParts(date).find(part => part.type === 'timeZoneName')?.value || 'GMT';
  if (zoneName === 'GMT' || zoneName === 'UTC') return 0;
  const match = zoneName.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);
  if (!match) return 0;
  const sign = match[1] === '+' ? 1 : -1;
  const hours = Number(match[2] || 0);
  const minutes = Number(match[3] || 0);
  return sign * ((hours * 60) + minutes);
}

function zonedDateTimeToUtc(dateTimeValue, timeZone) {
  if (!dateTimeValue) return null;
  const [datePart, timePart] = dateTimeValue.split('T');
  if (!datePart || !timePart) return null;

  const [year, month, day] = datePart.split('-').map(Number);
  const [hour, minute] = timePart.split(':').map(Number);
  const wallTimeUtc = Date.UTC(year, month - 1, day, hour, minute, 0);
  let guess = wallTimeUtc;

  for (let i = 0; i < 4; i++) {
    const offsetMinutes = getTimeZoneOffsetMinutes(new Date(guess), timeZone);
    const corrected = wallTimeUtc - (offsetMinutes * 60000);
    if (corrected === guess) break;
    guess = corrected;
  }

  return new Date(guess);
}

function formatTimeZoneDate(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  }).format(date);
}

function formatOffsetDifference(minutes) {
  const sign = minutes >= 0 ? '+' : '-';
  const absolute = Math.abs(minutes);
  const hours = Math.floor(absolute / 60);
  const remainder = absolute % 60;
  if (!remainder) return `${sign}${hours}h`;
  return `${sign}${hours}h ${remainder}m`;
}

function formatMinutesSpan(minutes) {
  const absolute = Math.abs(minutes);
  const hours = Math.floor(absolute / 60);
  const remainder = absolute % 60;
  if (!remainder) return `${hours}h`;
  return `${hours}h ${remainder}m`;
}

function calculateROI(initialInvestment, endingValue, cashReceived = 0, years = 0) {
  const initial = Math.max(0, initialInvestment || 0);
  const ending = Math.max(0, endingValue || 0);
  const income = Math.max(0, cashReceived || 0);
  const totalReturned = ending + income;
  const netProfit = totalReturned - initial;
  const roi = initial ? (netProfit / initial) * 100 : 0;
  const multiple = initial ? totalReturned / initial : 0;
  const annualizedReturn = initial > 0 && totalReturned > 0 && years > 0
    ? (Math.pow(totalReturned / initial, 1 / years) - 1) * 100
    : null;

  return {
    initial,
    ending,
    income,
    totalReturned,
    netProfit,
    roi,
    multiple,
    annualizedReturn
  };
}

function calculateInflationProjection(amount, annualRate, years) {
  const principal = Math.max(0, amount || 0);
  const rate = Number(annualRate) || 0;
  const periodYears = Math.max(0, years || 0);
  const factor = Math.pow(1 + (rate / 100), periodYears);
  const futureValue = principal * factor;
  const priceChange = futureValue - principal;
  const cumulativeInflation = (factor - 1) * 100;
  const sameAmountBuyingPower = factor !== 0 ? principal / factor : 0;

  return {
    principal,
    rate,
    periodYears,
    factor,
    futureValue,
    priceChange,
    cumulativeInflation,
    sameAmountBuyingPower
  };
}

function calculateNetWorth(assetValues, liabilityValues) {
  const totalAssets = sumNumbers(assetValues);
  const totalLiabilities = sumNumbers(liabilityValues);
  const netWorth = totalAssets - totalLiabilities;
  const debtToAssetRatio = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : null;

  return {
    totalAssets,
    totalLiabilities,
    netWorth,
    debtToAssetRatio
  };
}

const TaxRules = {
  india: {
    newBrackets: [
      { upto: 400000, rate: 0 },
      { upto: 800000, rate: 0.05 },
      { upto: 1200000, rate: 0.10 },
      { upto: 1600000, rate: 0.15 },
      { upto: 2000000, rate: 0.20 },
      { upto: 2400000, rate: 0.25 },
      { upto: Infinity, rate: 0.30 }
    ],
    standardDeductionOld: 50000,
    standardDeductionNew: 75000,
    rebateOldLimit: 500000,
    rebateOldMax: 12500,
    rebateNewLimit: 1200000,
    rebateNewMax: 60000,
    cessRate: 0.04
  },
  uk: {
    personalAllowance: 12570,
    taperStart: 100000,
    taperEnd: 125140,
    niPrimaryThreshold: 12570,
    niUpperLimit: 50270,
    niMainRate: 0.08,
    niUpperRate: 0.02
  },
  us: {
    standardDeduction: {
      single: 16100,
      married_joint: 32200
    },
    brackets: {
      single: [
        { upto: 12400, rate: 0.10 },
        { upto: 50400, rate: 0.12 },
        { upto: 105700, rate: 0.22 },
        { upto: 201775, rate: 0.24 },
        { upto: 256225, rate: 0.32 },
        { upto: 640600, rate: 0.35 },
        { upto: Infinity, rate: 0.37 }
      ],
      married_joint: [
        { upto: 24800, rate: 0.10 },
        { upto: 100800, rate: 0.12 },
        { upto: 211400, rate: 0.22 },
        { upto: 403550, rate: 0.24 },
        { upto: 512450, rate: 0.32 },
        { upto: 768700, rate: 0.35 },
        { upto: Infinity, rate: 0.37 }
      ]
    },
    socialSecurityRate: 0.062,
    socialSecurityWageBase: 184500,
    medicareRate: 0.0145,
    additionalMedicareRate: 0.009,
    additionalMedicareThreshold: {
      single: 200000,
      married_joint: 250000
    }
  }
};

function getIndiaOldBrackets(ageBand) {
  if (ageBand === 'super') {
    return [
      { upto: 500000, rate: 0 },
      { upto: 1000000, rate: 0.20 },
      { upto: Infinity, rate: 0.30 }
    ];
  }

  if (ageBand === 'senior') {
    return [
      { upto: 300000, rate: 0 },
      { upto: 500000, rate: 0.05 },
      { upto: 1000000, rate: 0.20 },
      { upto: Infinity, rate: 0.30 }
    ];
  }

  return [
    { upto: 250000, rate: 0 },
    { upto: 500000, rate: 0.05 },
    { upto: 1000000, rate: 0.20 },
    { upto: Infinity, rate: 0.30 }
  ];
}

function getIndiaSurchargeRate(taxableIncome, regime) {
  if (taxableIncome <= 5000000) return 0;
  if (taxableIncome <= 10000000) return 0.10;
  if (taxableIncome <= 20000000) return 0.15;
  if (regime === 'new') return 0.25;
  if (taxableIncome <= 50000000) return 0.25;
  return 0.37;
}

function calculateIndiaTax(config) {
  const income = Math.max(0, config.income || 0);
  const regime = config.regime === 'old' ? 'old' : 'new';
  const isSalaried = config.isSalaried !== false;
  const deduction80c = Math.min(Math.max(0, config.deduction80c || 0), 150000);
  const deduction80d = Math.max(0, config.deduction80d || 0);
  const deductionNps = Math.min(Math.max(0, config.deductionNps || 0), 50000);
  const hraExemption = Math.max(0, config.hraExemption || 0);
  const otherDeductions = Math.max(0, config.otherDeductions || 0);
  const standardDeduction = isSalaried
    ? regime === 'new' ? TaxRules.india.standardDeductionNew : TaxRules.india.standardDeductionOld
    : 0;
  const eligibleDeductions = regime === 'old'
    ? deduction80c + deduction80d + deductionNps + hraExemption + otherDeductions
    : 0;
  const taxableIncome = Math.max(0, income - standardDeduction - eligibleDeductions);
  const incomeTaxBeforeRebate = calculateProgressiveTax(
    taxableIncome,
    regime === 'new' ? TaxRules.india.newBrackets : getIndiaOldBrackets(config.ageBand)
  );

  let rebate = 0;
  if (regime === 'new' && taxableIncome <= TaxRules.india.rebateNewLimit) {
    rebate = Math.min(incomeTaxBeforeRebate, TaxRules.india.rebateNewMax);
  }
  if (regime === 'old' && taxableIncome <= TaxRules.india.rebateOldLimit) {
    rebate = Math.min(incomeTaxBeforeRebate, TaxRules.india.rebateOldMax);
  }

  const incomeTaxAfterRebate = Math.max(0, incomeTaxBeforeRebate - rebate);
  const surchargeRate = getIndiaSurchargeRate(taxableIncome, regime);
  const surcharge = incomeTaxAfterRebate * surchargeRate;
  const cess = (incomeTaxAfterRebate + surcharge) * TaxRules.india.cessRate;
  const totalTax = incomeTaxAfterRebate + surcharge + cess;

  return {
    standardDeduction,
    eligibleDeductions,
    taxableIncome,
    incomeTaxBeforeRebate,
    rebate,
    incomeTaxAfterRebate,
    surcharge,
    cess,
    totalTax,
    effectiveRate: income ? totalTax / income : 0
  };
}

function getUKPersonalAllowance(income) {
  if (income <= TaxRules.uk.taperStart) return TaxRules.uk.personalAllowance;
  if (income >= TaxRules.uk.taperEnd) return 0;
  return Math.max(0, TaxRules.uk.personalAllowance - ((income - TaxRules.uk.taperStart) / 2));
}

function getUKTaxBrackets(region, allowance) {
  if (region === 'scotland') {
    const thresholds = [15397, 27491, 43662, 75000, 125140]
      .map(limit => Math.max(0, limit - allowance));

    return [
      { upto: thresholds[0], rate: 0.19 },
      { upto: thresholds[1], rate: 0.20 },
      { upto: thresholds[2], rate: 0.21 },
      { upto: thresholds[3], rate: 0.42 },
      { upto: thresholds[4], rate: 0.45 },
      { upto: Infinity, rate: 0.48 }
    ];
  }

  return [
    { upto: 37700, rate: 0.20 },
    { upto: Math.max(37700, 125140 - allowance), rate: 0.40 },
    { upto: Infinity, rate: 0.45 }
  ];
}

function calculateUKNationalInsurance(earnings) {
  const mainBand = Math.max(0, Math.min(earnings, TaxRules.uk.niUpperLimit) - TaxRules.uk.niPrimaryThreshold);
  const upperBand = Math.max(0, earnings - TaxRules.uk.niUpperLimit);
  return (mainBand * TaxRules.uk.niMainRate) + (upperBand * TaxRules.uk.niUpperRate);
}

function calculateUKTax(config) {
  const grossIncome = Math.max(0, config.income || 0);
  const pensionRate = Math.max(0, config.pensionRate || 0);
  const pensionContribution = grossIncome * (pensionRate / 100);
  const adjustedIncome = Math.max(0, grossIncome - pensionContribution);
  const allowance = getUKPersonalAllowance(adjustedIncome);
  const taxableIncome = Math.max(0, adjustedIncome - allowance);
  const incomeTax = calculateProgressiveTax(
    taxableIncome,
    getUKTaxBrackets(config.region, allowance)
  );
  const nationalInsurance = calculateUKNationalInsurance(adjustedIncome);
  const totalDeductions = pensionContribution + incomeTax + nationalInsurance;

  return {
    grossIncome,
    pensionContribution,
    adjustedIncome,
    allowance,
    taxableIncome,
    incomeTax,
    nationalInsurance,
    totalDeductions,
    netIncome: Math.max(0, grossIncome - totalDeductions)
  };
}

function calculateUSFederalTax(config) {
  const grossIncome = Math.max(0, config.income || 0);
  const filingStatus = config.filingStatus === 'married_joint' ? 'married_joint' : 'single';
  const pretaxRetirement = Math.max(0, config.pretaxRetirement || 0);
  const deductionMethod = config.deductionMethod === 'itemized' ? 'itemized' : 'standard';
  const itemizedDeduction = Math.max(0, config.itemizedDeduction || 0);
  const deduction = deductionMethod === 'itemized'
    ? itemizedDeduction
    : TaxRules.us.standardDeduction[filingStatus];
  const taxableIncome = Math.max(0, grossIncome - pretaxRetirement - deduction);
  const federalTax = calculateProgressiveTax(taxableIncome, TaxRules.us.brackets[filingStatus]);

  return {
    grossIncome,
    filingStatus,
    pretaxRetirement,
    deduction,
    taxableIncome,
    federalTax
  };
}

function calculateUSPayrollTaxes(grossIncome, filingStatus) {
  const socialSecurity = Math.min(grossIncome, TaxRules.us.socialSecurityWageBase) * TaxRules.us.socialSecurityRate;
  const baseMedicare = grossIncome * TaxRules.us.medicareRate;
  const additionalThreshold = TaxRules.us.additionalMedicareThreshold[filingStatus] || TaxRules.us.additionalMedicareThreshold.single;
  const additionalMedicare = Math.max(0, grossIncome - additionalThreshold) * TaxRules.us.additionalMedicareRate;

  return {
    socialSecurity,
    medicare: baseMedicare + additionalMedicare,
    total: socialSecurity + baseMedicare + additionalMedicare
  };
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

// ── SIP Calculator (India) ──────────────────
const SIPCalc = {
  init() {
    ['sip_monthly', 'sip_rate', 'sip_years', 'sip_step_up'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('sip_btn')?.addEventListener('click', () => this.calculate());
  },

  calculate() {
    const monthlyInvestment = parseFloat(document.getElementById('sip_monthly')?.value) || 0;
    const annualRate = parseFloat(document.getElementById('sip_rate')?.value) || 0;
    const years = parseFloat(document.getElementById('sip_years')?.value) || 0;
    const annualStepUp = parseFloat(document.getElementById('sip_step_up')?.value) || 0;
    const months = Math.round(years * 12);

    if (!monthlyInvestment || !months) {
      setResult('sip_value', '0.00');
      setResult('sip_invested', '0.00');
      setResult('sip_returns', '0.00');
      setBadge('sip_badge', 'Enter SIP details', 'neutral');
      return;
    }

    const monthlyRate = annualRate / 12 / 100;
    let invested = 0;
    let balance = 0;
    let currentInstallment = monthlyInvestment;

    for (let month = 1; month <= months; month++) {
      invested += currentInstallment;
      balance += currentInstallment;
      balance *= 1 + monthlyRate;

      if (annualStepUp > 0 && month % 12 === 0) {
        currentInstallment *= 1 + annualStepUp / 100;
      }
    }

    const gains = balance - invested;

    setResult('sip_value', fmt(balance));
    setResult('sip_invested', fmt(invested));
    setResult('sip_returns', fmt(gains));
    setBadge('sip_badge', `${fmt(years, 1)} year SIP horizon`, gains >= 0 ? 'positive' : 'neutral');

    History.add(
      `SIP ₹${fmt(monthlyInvestment, 0)}/mo`,
      `₹${fmt(balance)}`
    );
    History.render('history_list');
  }
};

// ── Compound Interest Calculator ────────────
const CompoundInterestCalc = {
  init() {
    ['ci_principal', 'ci_rate', 'ci_years', 'ci_monthly'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('ci_frequency')?.addEventListener('change', () => this.calculate());
    document.getElementById('ci_btn')?.addEventListener('click', () => this.calculate());
  },

  calculate() {
    const principal = parseFloat(document.getElementById('ci_principal')?.value) || 0;
    const annualRate = parseFloat(document.getElementById('ci_rate')?.value) || 0;
    const years = parseFloat(document.getElementById('ci_years')?.value) || 0;
    const monthlyContribution = parseFloat(document.getElementById('ci_monthly')?.value) || 0;
    const frequency = parseInt(document.getElementById('ci_frequency')?.value, 10) || 12;
    const months = Math.round(years * 12);

    if ((!principal && !monthlyContribution) || !months) {
      setResult('ci_value', '0.00');
      setResult('ci_contributions', '0.00');
      setResult('ci_interest', '0.00');
      setBadge('ci_badge', 'Enter investment details', 'neutral');
      return;
    }

    const periodicRate = annualRate / 100 / frequency;
    const effectiveAnnualRate = frequency > 0
      ? Math.pow(1 + periodicRate, frequency) - 1
      : annualRate / 100;
    const monthlyRate = Math.pow(1 + effectiveAnnualRate, 1 / 12) - 1;

    let balance = principal;
    let contributions = principal;

    for (let month = 1; month <= months; month++) {
      balance *= 1 + monthlyRate;
      if (monthlyContribution > 0) {
        balance += monthlyContribution;
        contributions += monthlyContribution;
      }
    }

    const interestEarned = balance - contributions;
    const frequencyLabel = document.getElementById('ci_frequency')?.selectedOptions?.[0]?.textContent || 'Monthly';

    setResult('ci_value', fmt(balance));
    setResult('ci_contributions', fmt(contributions));
    setResult('ci_interest', fmt(interestEarned));
    setBadge('ci_badge', `${frequencyLabel} compounding`, interestEarned >= 0 ? 'positive' : 'neutral');

    History.add(
      `Compound ₹${fmt(principal, 0)}`,
      `₹${fmt(balance)}`
    );
    History.render('history_list');
  }
};

// ── Mortgage Calculator (US / UK) ───────────
const MortgageCalc = {
  init() {
    [
      'mortgage_home_price',
      'mortgage_down_payment',
      'mortgage_rate',
      'mortgage_years',
      'mortgage_tax_annual',
      'mortgage_insurance_annual'
    ].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('mortgage_country')?.addEventListener('change', () => this.calculate());
    document.getElementById('mortgage_btn')?.addEventListener('click', () => this.calculate());
  },

  calculate() {
    const country = document.getElementById('mortgage_country')?.value || 'USD';
    const homePrice = parseFloat(document.getElementById('mortgage_home_price')?.value) || 0;
    const downPayment = parseFloat(document.getElementById('mortgage_down_payment')?.value) || 0;
    const annualRate = parseFloat(document.getElementById('mortgage_rate')?.value) || 0;
    const years = parseFloat(document.getElementById('mortgage_years')?.value) || 0;
    const annualTax = parseFloat(document.getElementById('mortgage_tax_annual')?.value) || 0;
    const annualInsurance = parseFloat(document.getElementById('mortgage_insurance_annual')?.value) || 0;
    const loanAmount = Math.max(0, homePrice - downPayment);
    const months = Math.round(years * 12);

    if (!loanAmount || !months) {
      setResult('mortgage_payment', '0.00');
      setResult('mortgage_total', '0.00');
      setResult('mortgage_interest', '0.00');
      setResult('mortgage_loan', '0.00');
      setBadge('mortgage_badge', 'Enter home price and term', 'neutral');
      return;
    }

    const principalAndInterest = calculateAmortizedPayment(loanAmount, annualRate, months);
    const monthlyEscrow = (annualTax + annualInsurance) / 12;
    const totalMonthlyCost = principalAndInterest + monthlyEscrow;
    const totalInterest = principalAndInterest * months - loanAmount;

    setResult('mortgage_payment', formatCurrency(principalAndInterest, country));
    setResult('mortgage_total', formatCurrency(totalMonthlyCost, country));
    setResult('mortgage_interest', formatCurrency(totalInterest, country));
    setResult('mortgage_loan', formatCurrency(loanAmount, country));
    setBadge('mortgage_badge', `${country === 'USD' ? 'US' : 'UK'} estimate · ${formatDuration(months)}`, 'neutral');

    History.add(
      `Mortgage ${formatCurrency(homePrice, country, 0)}`,
      `${formatCurrency(principalAndInterest, country)}/mo`
    );
    History.render('history_list');
  }
};

// ── Retirement Corpus Calculator ────────────
const RetirementCalc = {
  init() {
    [
      'retirement_expense',
      'retirement_years_to',
      'retirement_years_after',
      'retirement_inflation',
      'retirement_pre_return',
      'retirement_post_return'
    ].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('retirement_btn')?.addEventListener('click', () => this.calculate());
  },

  calculate() {
    const monthlyExpenseToday = parseFloat(document.getElementById('retirement_expense')?.value) || 0;
    const yearsToRetirement = parseFloat(document.getElementById('retirement_years_to')?.value) || 0;
    const yearsInRetirement = parseFloat(document.getElementById('retirement_years_after')?.value) || 0;
    const inflation = parseFloat(document.getElementById('retirement_inflation')?.value) || 0;
    const preReturn = parseFloat(document.getElementById('retirement_pre_return')?.value) || 0;
    const postReturn = parseFloat(document.getElementById('retirement_post_return')?.value) || 0;

    if (!monthlyExpenseToday || !yearsInRetirement) {
      setResult('retirement_corpus', '0.00');
      setResult('retirement_future_expense', '0.00');
      setResult('retirement_monthly_investment', '0.00');
      setBadge('retirement_badge', 'Enter retirement assumptions', 'neutral');
      return;
    }

    const futureMonthlyExpense = monthlyExpenseToday * Math.pow(1 + inflation / 100, yearsToRetirement);
    const firstYearExpense = futureMonthlyExpense * 12;
    const realPostReturn = ((1 + postReturn / 100) / (1 + inflation / 100)) - 1;
    let corpusNeeded;

    if (Math.abs(realPostReturn) < 1e-9) {
      corpusNeeded = firstYearExpense * yearsInRetirement;
    } else {
      corpusNeeded = firstYearExpense * (1 - Math.pow(1 + realPostReturn, -yearsInRetirement)) / realPostReturn;
    }

    const monthsToRetirement = Math.round(yearsToRetirement * 12);
    const monthlyPreRate = preReturn / 12 / 100;
    let monthlyInvestment = 0;

    if (monthsToRetirement > 0) {
      if (monthlyPreRate === 0) {
        monthlyInvestment = corpusNeeded / monthsToRetirement;
      } else {
        monthlyInvestment = corpusNeeded * monthlyPreRate / (Math.pow(1 + monthlyPreRate, monthsToRetirement) - 1);
      }
    } else {
      monthlyInvestment = corpusNeeded;
    }

    setResult('retirement_corpus', fmt(corpusNeeded));
    setResult('retirement_future_expense', fmt(futureMonthlyExpense));
    setResult('retirement_monthly_investment', fmt(monthlyInvestment));
    setBadge('retirement_badge', `${formatDuration(yearsInRetirement * 12)} retirement corpus`, 'positive');

    History.add(
      `Retirement corpus for ₹${fmt(monthlyExpenseToday, 0)}/mo`,
      `₹${fmt(corpusNeeded)}`
    );
    History.render('history_list');
  }
};

// ── Loan Prepayment Calculator ──────────────
const LoanPrepaymentCalc = {
  init() {
    [
      'prepay_balance',
      'prepay_rate',
      'prepay_months',
      'prepay_lump_sum',
      'prepay_extra_monthly'
    ].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('prepay_btn')?.addEventListener('click', () => this.calculate());
  },

  calculate() {
    const balance = parseFloat(document.getElementById('prepay_balance')?.value) || 0;
    const annualRate = parseFloat(document.getElementById('prepay_rate')?.value) || 0;
    const remainingMonths = parseInt(document.getElementById('prepay_months')?.value, 10) || 0;
    const lumpSum = parseFloat(document.getElementById('prepay_lump_sum')?.value) || 0;
    const extraMonthly = parseFloat(document.getElementById('prepay_extra_monthly')?.value) || 0;

    if (!balance || !remainingMonths) {
      setResult('prepay_interest_saved', '0.00');
      setResult('prepay_emi', '0.00');
      setResult('prepay_new_term', '0 mo');
      setResult('prepay_months_saved', '0 mo');
      setResult('prepay_interest_after', '0.00');
      setBadge('prepay_badge', 'Enter current loan details', 'neutral');
      return;
    }

    const baseEmi = calculateAmortizedPayment(balance, annualRate, remainingMonths);
    const baseInterest = baseEmi * remainingMonths - balance;
    const reducedBalance = Math.max(0, balance - lumpSum);

    if (!lumpSum && !extraMonthly) {
      setResult('prepay_interest_saved', fmt(0));
      setResult('prepay_emi', fmt(baseEmi));
      setResult('prepay_new_term', formatDuration(remainingMonths));
      setResult('prepay_months_saved', '0 mo');
      setResult('prepay_interest_after', fmt(baseInterest));
      setBadge('prepay_badge', 'Add a lump sum or extra monthly payment', 'neutral');
      return;
    }

    if (reducedBalance === 0) {
      setResult('prepay_interest_saved', fmt(baseInterest));
      setResult('prepay_emi', fmt(baseEmi));
      setResult('prepay_new_term', 'Loan closed');
      setResult('prepay_months_saved', formatDuration(remainingMonths));
      setResult('prepay_interest_after', fmt(0));
      setBadge('prepay_badge', 'Lump sum closes the loan immediately', 'positive');
      return;
    }

    const acceleratedPayment = baseEmi + extraMonthly;
    const accelerated = simulateLoanRepayment(reducedBalance, annualRate, acceleratedPayment);
    const monthsSaved = Math.max(0, remainingMonths - accelerated.months);
    const interestSaved = Math.max(0, baseInterest - accelerated.totalInterest);

    setResult('prepay_interest_saved', fmt(interestSaved));
    setResult('prepay_emi', fmt(baseEmi));
    setResult('prepay_new_term', formatDuration(accelerated.months));
    setResult('prepay_months_saved', formatDuration(monthsSaved));
    setResult('prepay_interest_after', fmt(accelerated.totalInterest));
    setBadge('prepay_badge', `${formatDuration(monthsSaved)} faster payoff`, 'positive');

    History.add(
      `Prepay loan ₹${fmt(balance, 0)}`,
      `Save ₹${fmt(interestSaved)}`
    );
    History.render('history_list');
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

// ── Income Tax Calculator (India / UK / US) ─
const IncomeTaxCalc = {
  init() {
    if (!document.getElementById('income_tax_page')) return;

    document.querySelectorAll('[data-income-region]').forEach(btn => {
      btn.addEventListener('click', () => this.switchRegion(btn.getAttribute('data-income-region')));
    });

    [
      'it_india_income', 'it_india_80c', 'it_india_80d', 'it_india_nps',
      'it_india_hra', 'it_india_other'
    ].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculateIndia());
    });
    ['it_india_regime', 'it_india_age', 'it_india_salary'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.calculateIndia());
    });
    document.getElementById('it_india_btn')?.addEventListener('click', () => this.calculateIndia());

    ['it_uk_income', 'it_uk_pension'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculateUK());
    });
    document.getElementById('it_uk_region')?.addEventListener('change', () => this.calculateUK());
    document.getElementById('it_uk_btn')?.addEventListener('click', () => this.calculateUK());

    ['it_us_income', 'it_us_pretax', 'it_us_itemized', 'it_us_state_rate'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculateUS());
    });
    ['it_us_status', 'it_us_deduction'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.calculateUS());
    });
    document.getElementById('it_us_btn')?.addEventListener('click', () => this.calculateUS());

    this.switchRegion('india');
    this.calculateIndia();
    this.calculateUK();
    this.calculateUS();
  },

  switchRegion(region) {
    ['india', 'uk', 'us'].forEach(key => {
      toggleVisibility(`income_tax_panel_${key}`, key === region);
    });
    toggleSelectedTab('[data-income-region]', region, 'data-income-region');
  },

  calculateIndia() {
    const income = parseFloat(document.getElementById('it_india_income')?.value) || 0;
    const regime = document.getElementById('it_india_regime')?.value || 'new';
    const ageBand = document.getElementById('it_india_age')?.value || 'under60';
    const isSalaried = (document.getElementById('it_india_salary')?.value || 'yes') === 'yes';
    const deduction80c = parseFloat(document.getElementById('it_india_80c')?.value) || 0;
    const deduction80d = parseFloat(document.getElementById('it_india_80d')?.value) || 0;
    const deductionNps = parseFloat(document.getElementById('it_india_nps')?.value) || 0;
    const hraExemption = parseFloat(document.getElementById('it_india_hra')?.value) || 0;
    const otherDeductions = parseFloat(document.getElementById('it_india_other')?.value) || 0;

    if (!income) {
      setResult('it_india_tax', formatCurrency(0, 'INR'));
      setResult('it_india_taxable', formatCurrency(0, 'INR'));
      setResult('it_india_deductions', formatCurrency(0, 'INR'));
      setResult('it_india_rebate', formatCurrency(0, 'INR'));
      setResult('it_india_cess', formatCurrency(0, 'INR'));
      setBadge('it_india_badge', 'Enter annual income', 'neutral');
      return;
    }

    const result = calculateIndiaTax({
      income,
      regime,
      ageBand,
      isSalaried,
      deduction80c,
      deduction80d,
      deductionNps,
      hraExemption,
      otherDeductions
    });
    const ignoredDeductions = regime === 'new'
      ? deduction80c + deduction80d + deductionNps + hraExemption + otherDeductions
      : 0;

    setResult('it_india_tax', formatCurrency(result.totalTax, 'INR'));
    setResult('it_india_taxable', formatCurrency(result.taxableIncome, 'INR'));
    setResult('it_india_deductions', formatCurrency(result.standardDeduction + result.eligibleDeductions, 'INR'));
    setResult('it_india_rebate', formatCurrency(result.rebate, 'INR'));
    setResult('it_india_cess', formatCurrency(result.cess, 'INR'));
    setBadge(
      'it_india_badge',
      ignoredDeductions > 0
        ? 'AY 2026-27 estimate. Old-regime-only deductions are ignored under new regime.'
        : 'AY 2026-27 estimate with rebate and 4% cess.',
      'neutral'
    );

    History.add(
      `India tax ${regime} on ₹${fmt(income, 0)}`,
      formatCurrency(result.totalTax, 'INR')
    );
    History.render('history_list');
  },

  calculateUK() {
    const income = parseFloat(document.getElementById('it_uk_income')?.value) || 0;
    const region = document.getElementById('it_uk_region')?.value || 'rest';
    const pensionRate = parseFloat(document.getElementById('it_uk_pension')?.value) || 0;

    if (!income) {
      setResult('it_uk_tax', formatCurrency(0, 'GBP'));
      setResult('it_uk_allowance', formatCurrency(0, 'GBP'));
      setResult('it_uk_ni', formatCurrency(0, 'GBP'));
      setResult('it_uk_total', formatCurrency(0, 'GBP'));
      setResult('it_uk_net', formatCurrency(0, 'GBP'));
      setBadge('it_uk_badge', 'Enter annual pay', 'neutral');
      return;
    }

    const result = calculateUKTax({ income, region, pensionRate });

    setResult('it_uk_tax', formatCurrency(result.incomeTax, 'GBP'));
    setResult('it_uk_allowance', formatCurrency(result.allowance, 'GBP'));
    setResult('it_uk_ni', formatCurrency(result.nationalInsurance, 'GBP'));
    setResult('it_uk_total', formatCurrency(result.incomeTax + result.nationalInsurance, 'GBP'));
    setResult('it_uk_net', formatCurrency(result.netIncome, 'GBP'));
    setBadge(
      'it_uk_badge',
      `UK 2025/26 ${region === 'scotland' ? 'Scotland' : 'PAYE'} estimate`,
      'neutral'
    );

    History.add(
      `UK tax on £${fmt(income, 0)}`,
      formatCurrency(result.incomeTax, 'GBP')
    );
    History.render('history_list');
  },

  calculateUS() {
    const income = parseFloat(document.getElementById('it_us_income')?.value) || 0;
    const filingStatus = document.getElementById('it_us_status')?.value || 'single';
    const deductionMethod = document.getElementById('it_us_deduction')?.value || 'standard';
    const pretaxRetirement = parseFloat(document.getElementById('it_us_pretax')?.value) || 0;
    const itemizedDeduction = parseFloat(document.getElementById('it_us_itemized')?.value) || 0;
    const stateRate = parseFloat(document.getElementById('it_us_state_rate')?.value) || 0;

    toggleVisibility('it_us_itemized_wrap', deductionMethod === 'itemized');

    if (!income) {
      setResult('it_us_tax', formatCurrency(0, 'USD'));
      setResult('it_us_taxable', formatCurrency(0, 'USD'));
      setResult('it_us_fica', formatCurrency(0, 'USD'));
      setResult('it_us_state', formatCurrency(0, 'USD'));
      setResult('it_us_total', formatCurrency(0, 'USD'));
      setBadge('it_us_badge', 'Enter annual income', 'neutral');
      return;
    }

    const federal = calculateUSFederalTax({
      income,
      filingStatus,
      pretaxRetirement,
      deductionMethod,
      itemizedDeduction
    });
    const payroll = calculateUSPayrollTaxes(income, filingStatus);
    const stateTax = Math.max(0, income - pretaxRetirement) * (stateRate / 100);
    const totalTax = federal.federalTax + payroll.total + stateTax;

    setResult('it_us_tax', formatCurrency(federal.federalTax, 'USD'));
    setResult('it_us_taxable', formatCurrency(federal.taxableIncome, 'USD'));
    setResult('it_us_fica', formatCurrency(payroll.total, 'USD'));
    setResult('it_us_state', formatCurrency(stateTax, 'USD'));
    setResult('it_us_total', formatCurrency(totalTax, 'USD'));
    setBadge('it_us_badge', '2026 federal estimate with FICA and optional flat state rate', 'neutral');

    History.add(
      `US tax on $${fmt(income, 0)}`,
      formatCurrency(federal.federalTax, 'USD')
    );
    History.render('history_list');
  }
};

// ── Old vs New Tax Regime Calculator ────────
const RegimeComparisonCalc = {
  init() {
    if (!document.getElementById('regime_compare_page')) return;

    [
      'regime_income', 'regime_80c', 'regime_80d', 'regime_nps',
      'regime_hra', 'regime_other'
    ].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    ['regime_age', 'regime_salary'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.calculate());
    });
    document.getElementById('regime_btn')?.addEventListener('click', () => this.calculate());
    this.calculate();
  },

  calculate() {
    const income = parseFloat(document.getElementById('regime_income')?.value) || 0;
    const ageBand = document.getElementById('regime_age')?.value || 'under60';
    const isSalaried = (document.getElementById('regime_salary')?.value || 'yes') === 'yes';
    const deduction80c = parseFloat(document.getElementById('regime_80c')?.value) || 0;
    const deduction80d = parseFloat(document.getElementById('regime_80d')?.value) || 0;
    const deductionNps = parseFloat(document.getElementById('regime_nps')?.value) || 0;
    const hraExemption = parseFloat(document.getElementById('regime_hra')?.value) || 0;
    const otherDeductions = parseFloat(document.getElementById('regime_other')?.value) || 0;

    if (!income) {
      ['regime_old_tax', 'regime_old_taxable', 'regime_new_tax', 'regime_new_taxable', 'regime_savings']
        .forEach(id => setResult(id, formatCurrency(0, 'INR')));
      setBadge('regime_badge', 'Enter income and eligible deductions', 'neutral');
      return;
    }

    const oldResult = calculateIndiaTax({
      income,
      regime: 'old',
      ageBand,
      isSalaried,
      deduction80c,
      deduction80d,
      deductionNps,
      hraExemption,
      otherDeductions
    });
    const newResult = calculateIndiaTax({
      income,
      regime: 'new',
      ageBand,
      isSalaried,
      deduction80c,
      deduction80d,
      deductionNps,
      hraExemption,
      otherDeductions
    });
    const savings = Math.abs(oldResult.totalTax - newResult.totalTax);
    const cheaperRegime = oldResult.totalTax < newResult.totalTax ? 'Old' : 'New';

    setResult('regime_old_tax', formatCurrency(oldResult.totalTax, 'INR'));
    setResult('regime_old_taxable', formatCurrency(oldResult.taxableIncome, 'INR'));
    setResult('regime_new_tax', formatCurrency(newResult.totalTax, 'INR'));
    setResult('regime_new_taxable', formatCurrency(newResult.taxableIncome, 'INR'));
    setResult('regime_savings', formatCurrency(savings, 'INR'));
    setBadge(
      'regime_badge',
      savings
        ? `${cheaperRegime} regime is lower by ${formatCurrency(savings, 'INR')}`
        : 'Both regimes are currently identical for these inputs.',
      savings ? 'positive' : 'neutral'
    );

    History.add(
      `Old vs New on ₹${fmt(income, 0)}`,
      `${cheaperRegime} saves ${formatCurrency(savings, 'INR')}`
    );
    History.render('history_list');
  }
};

// ── HRA Exemption Calculator (India) ────────
const HRACalc = {
  init() {
    if (!document.getElementById('hra_page')) return;

    ['hra_basic', 'hra_da', 'hra_received', 'hra_rent'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('hra_city')?.addEventListener('change', () => this.calculate());
    document.getElementById('hra_btn')?.addEventListener('click', () => this.calculate());
    this.calculate();
  },

  calculate() {
    const basic = parseFloat(document.getElementById('hra_basic')?.value) || 0;
    const dearnessAllowance = parseFloat(document.getElementById('hra_da')?.value) || 0;
    const hraReceived = parseFloat(document.getElementById('hra_received')?.value) || 0;
    const rentPaid = parseFloat(document.getElementById('hra_rent')?.value) || 0;
    const city = document.getElementById('hra_city')?.value || 'metro';

    if (!basic && !dearnessAllowance && !hraReceived && !rentPaid) {
      setResult('hra_exempt', formatCurrency(0, 'INR'));
      setResult('hra_taxable', formatCurrency(0, 'INR'));
      setResult('hra_salary_basis', formatCurrency(0, 'INR'));
      setResult('hra_limit', formatCurrency(0, 'INR'));
      setBadge('hra_badge', 'Enter annual salary and rent values', 'neutral');
      return;
    }

    const salaryForHra = basic + dearnessAllowance;
    const rentMinusTenPercent = Math.max(0, rentPaid - (salaryForHra * 0.10));
    const cityLimit = salaryForHra * (city === 'metro' ? 0.50 : 0.40);
    const exemption = Math.min(hraReceived, rentMinusTenPercent, cityLimit);
    const taxableHra = Math.max(0, hraReceived - exemption);

    let limitingText = 'Actual HRA received is the limiting factor.';
    if (exemption === rentMinusTenPercent) limitingText = 'Rent paid above 10% of salary is the limiting factor.';
    if (exemption === cityLimit) limitingText = `${city === 'metro' ? '50%' : '40%'} of salary is the limiting factor.`;

    setResult('hra_exempt', formatCurrency(exemption, 'INR'));
    setResult('hra_taxable', formatCurrency(taxableHra, 'INR'));
    setResult('hra_salary_basis', formatCurrency(salaryForHra, 'INR'));
    setResult('hra_limit', formatCurrency(rentMinusTenPercent, 'INR'));
    setBadge('hra_badge', limitingText, 'neutral');

    if (salaryForHra || hraReceived || rentPaid) {
      History.add('HRA exemption', formatCurrency(exemption, 'INR'));
      History.render('history_list');
    }
  }
};

// ── Take-Home Pay / Paycheck (US / UK) ──────
const TakeHomePayCalc = {
  init() {
    if (!document.getElementById('take_home_page')) return;

    document.querySelectorAll('[data-pay-region]').forEach(btn => {
      btn.addEventListener('click', () => this.switchRegion(btn.getAttribute('data-pay-region')));
    });

    ['th_us_income', 'th_us_retirement', 'th_us_state_rate'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculateUS());
    });
    ['th_us_frequency', 'th_us_status'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.calculateUS());
    });
    document.getElementById('th_us_btn')?.addEventListener('click', () => this.calculateUS());

    ['th_uk_income', 'th_uk_pension'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculateUK());
    });
    ['th_uk_frequency', 'th_uk_region'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.calculateUK());
    });
    document.getElementById('th_uk_btn')?.addEventListener('click', () => this.calculateUK());

    this.switchRegion('us');
    this.calculateUS();
    this.calculateUK();
  },

  switchRegion(region) {
    ['us', 'uk'].forEach(key => {
      toggleVisibility(`take_home_panel_${key}`, key === region);
    });
    toggleSelectedTab('[data-pay-region]', region, 'data-pay-region');
  },

  calculateUS() {
    const income = parseFloat(document.getElementById('th_us_income')?.value) || 0;
    const filingStatus = document.getElementById('th_us_status')?.value || 'single';
    const frequency = document.getElementById('th_us_frequency')?.value || 'biweekly';
    const retirementRate = parseFloat(document.getElementById('th_us_retirement')?.value) || 0;
    const stateRate = parseFloat(document.getElementById('th_us_state_rate')?.value) || 0;
    const payPeriods = getPayPeriods(frequency);

    const payLabel = document.getElementById('th_us_pay_label');
    if (payLabel) payLabel.textContent = getPayFrequencyLabel(frequency, 'us');

    if (!income) {
      ['th_us_net', 'th_us_annual_net', 'th_us_federal', 'th_us_fica', 'th_us_state', 'th_us_retirement_value']
        .forEach(id => setResult(id, formatCurrency(0, 'USD')));
      setBadge('th_us_badge', 'Enter annual gross pay', 'neutral');
      return;
    }

    const retirementContribution = income * (retirementRate / 100);
    const federal = calculateUSFederalTax({
      income,
      filingStatus,
      pretaxRetirement: retirementContribution,
      deductionMethod: 'standard'
    });
    const payroll = calculateUSPayrollTaxes(income, filingStatus);
    const stateTax = Math.max(0, income - retirementContribution) * (stateRate / 100);
    const annualNet = Math.max(0, income - retirementContribution - federal.federalTax - payroll.total - stateTax);
    const perPayNet = annualNet / payPeriods;

    setResult('th_us_net', formatCurrency(perPayNet, 'USD'));
    setResult('th_us_annual_net', formatCurrency(annualNet, 'USD'));
    setResult('th_us_federal', formatCurrency(federal.federalTax, 'USD'));
    setResult('th_us_fica', formatCurrency(payroll.total, 'USD'));
    setResult('th_us_state', formatCurrency(stateTax, 'USD'));
    setResult('th_us_retirement_value', formatCurrency(retirementContribution, 'USD'));
    setBadge('th_us_badge', '2026 federal paycheck estimate. Retirement reduces federal tax but not FICA in this model.', 'neutral');

    History.add(
      `US net pay on $${fmt(income, 0)}`,
      formatCurrency(perPayNet, 'USD')
    );
    History.render('history_list');
  },

  calculateUK() {
    const income = parseFloat(document.getElementById('th_uk_income')?.value) || 0;
    const region = document.getElementById('th_uk_region')?.value || 'rest';
    const frequency = document.getElementById('th_uk_frequency')?.value || 'monthly';
    const pensionRate = parseFloat(document.getElementById('th_uk_pension')?.value) || 0;
    const payPeriods = getPayPeriods(frequency);

    const payLabel = document.getElementById('th_uk_pay_label');
    if (payLabel) payLabel.textContent = getPayFrequencyLabel(frequency, 'uk');

    if (!income) {
      ['th_uk_net', 'th_uk_annual_net', 'th_uk_tax', 'th_uk_ni', 'th_uk_pension_value']
        .forEach(id => setResult(id, formatCurrency(0, 'GBP')));
      setBadge('th_uk_badge', 'Enter annual gross pay', 'neutral');
      return;
    }

    const result = calculateUKTax({ income, region, pensionRate });
    const perPayNet = result.netIncome / payPeriods;

    setResult('th_uk_net', formatCurrency(perPayNet, 'GBP'));
    setResult('th_uk_annual_net', formatCurrency(result.netIncome, 'GBP'));
    setResult('th_uk_tax', formatCurrency(result.incomeTax, 'GBP'));
    setResult('th_uk_ni', formatCurrency(result.nationalInsurance, 'GBP'));
    setResult('th_uk_pension_value', formatCurrency(result.pensionContribution, 'GBP'));
    setBadge('th_uk_badge', `UK 2025/26 ${region === 'scotland' ? 'Scotland' : 'PAYE'} take-home estimate`, 'neutral');

    History.add(
      `UK net pay on £${fmt(income, 0)}`,
      formatCurrency(perPayNet, 'GBP')
    );
    History.render('history_list');
  }
};

// ── ROI Calculator ──────────────────────────
const ROICalc = {
  init() {
    if (!document.getElementById('roi_page')) return;

    ['roi_initial', 'roi_final', 'roi_income', 'roi_years'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('roi_currency')?.addEventListener('change', () => this.calculate());
    document.getElementById('roi_btn')?.addEventListener('click', () => this.calculate());
    this.calculate();
  },

  calculate() {
    const initialInvestment = parseFloat(document.getElementById('roi_initial')?.value) || 0;
    const endingValue = parseFloat(document.getElementById('roi_final')?.value) || 0;
    const cashReceived = parseFloat(document.getElementById('roi_income')?.value) || 0;
    const years = parseFloat(document.getElementById('roi_years')?.value) || 0;
    const currency = document.getElementById('roi_currency')?.value || 'USD';

    if (!initialInvestment && !endingValue && !cashReceived) {
      setResult('roi_result', '0.00%');
      setResult('roi_profit', formatCurrency(0, currency));
      setResult('roi_total_returned', formatCurrency(0, currency));
      setResult('roi_multiple', '0.00x');
      setResult('roi_annualized', '—');
      setBadge('roi_badge', 'Enter invested and current values', 'neutral');
      return;
    }

    const result = calculateROI(initialInvestment, endingValue, cashReceived, years);
    const badgeType = result.netProfit > 0 ? 'positive' : result.netProfit < 0 ? 'negative' : 'neutral';
    const badgeText = result.netProfit > 0
      ? `Profit of ${formatCurrency(result.netProfit, currency)}`
      : result.netProfit < 0
        ? `Loss of ${formatCurrency(Math.abs(result.netProfit), currency)}`
        : 'You are currently at breakeven.';

    setResult('roi_result', `${fmt(result.roi)}%`);
    setResult('roi_profit', formatCurrency(result.netProfit, currency));
    setResult('roi_total_returned', formatCurrency(result.totalReturned, currency));
    setResult('roi_multiple', `${fmt(result.multiple)}x`);
    setResult('roi_annualized', result.annualizedReturn === null ? '—' : `${fmt(result.annualizedReturn)}%`);
    setBadge('roi_badge', badgeText, badgeType);

    History.add(
      `ROI on ${formatCurrency(result.initial, currency, 0)}`,
      `${fmt(result.roi)}%`
    );
    History.render('history_list');
  }
};

// ── Inflation Calculator ────────────────────
const InflationCalc = {
  init() {
    if (!document.getElementById('inflation_page')) return;

    ['inflation_amount', 'inflation_rate', 'inflation_years'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('inflation_currency')?.addEventListener('change', () => this.calculate());
    document.getElementById('inflation_btn')?.addEventListener('click', () => this.calculate());
    this.calculate();
  },

  calculate() {
    const amount = parseFloat(document.getElementById('inflation_amount')?.value) || 0;
    const annualRate = parseFloat(document.getElementById('inflation_rate')?.value) || 0;
    const years = parseFloat(document.getElementById('inflation_years')?.value) || 0;
    const currency = document.getElementById('inflation_currency')?.value || 'USD';

    if (annualRate <= -100) {
      setResult('inflation_future', formatCurrency(0, currency));
      setResult('inflation_change', formatCurrency(0, currency));
      setResult('inflation_cumulative', '0.00%');
      setResult('inflation_buying_power', formatCurrency(0, currency));
      setBadge('inflation_badge', 'Inflation rate must be greater than -100%.', 'negative');
      return;
    }

    if (!amount) {
      setResult('inflation_future', formatCurrency(0, currency));
      setResult('inflation_change', formatCurrency(0, currency));
      setResult('inflation_cumulative', '0.00%');
      setResult('inflation_buying_power', formatCurrency(0, currency));
      setBadge('inflation_badge', 'Enter an amount to project forward', 'neutral');
      return;
    }

    const result = calculateInflationProjection(amount, annualRate, years);
    const badgeText = annualRate > 0
      ? `Prices rise about ${fmt(result.cumulativeInflation)}% over the selected period.`
      : annualRate < 0
        ? `This models deflation of ${fmt(Math.abs(result.cumulativeInflation))}% over the selected period.`
        : 'Zero inflation keeps the nominal amount unchanged.';

    setResult('inflation_future', formatCurrency(result.futureValue, currency));
    setResult('inflation_change', formatCurrency(result.priceChange, currency));
    setResult('inflation_cumulative', `${fmt(result.cumulativeInflation)}%`);
    setResult('inflation_buying_power', formatCurrency(result.sameAmountBuyingPower, currency));
    setBadge('inflation_badge', badgeText, annualRate > 0 ? 'neutral' : annualRate < 0 ? 'positive' : 'neutral');

    History.add(
      `Inflation on ${formatCurrency(amount, currency, 0)}`,
      formatCurrency(result.futureValue, currency)
    );
    History.render('history_list');
  }
};

// ── Net Worth Calculator ────────────────────
const NetWorthCalc = {
  assetIds: [
    'nw_cash',
    'nw_investments',
    'nw_retirement',
    'nw_property',
    'nw_vehicles',
    'nw_other_assets'
  ],

  liabilityIds: [
    'nw_mortgage',
    'nw_student_loans',
    'nw_auto_loans',
    'nw_credit_cards',
    'nw_personal_loans',
    'nw_other_liabilities'
  ],

  init() {
    if (!document.getElementById('net_worth_page')) return;

    [...this.assetIds, ...this.liabilityIds].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    document.getElementById('nw_currency')?.addEventListener('change', () => this.calculate());
    document.getElementById('nw_btn')?.addEventListener('click', () => this.calculate());
    this.calculate();
  },

  calculate() {
    const currency = document.getElementById('nw_currency')?.value || 'USD';
    const assetValues = this.assetIds.map(id => parseFloat(document.getElementById(id)?.value) || 0);
    const liabilityValues = this.liabilityIds.map(id => parseFloat(document.getElementById(id)?.value) || 0);
    const result = calculateNetWorth(assetValues, liabilityValues);

    if (!result.totalAssets && !result.totalLiabilities) {
      setResult('nw_result', formatCurrency(0, currency));
      setResult('nw_assets', formatCurrency(0, currency));
      setResult('nw_liabilities', formatCurrency(0, currency));
      setResult('nw_ratio', '0.00%');
      setBadge('nw_badge', 'Enter your assets and liabilities', 'neutral');
      return;
    }

    const badgeType = result.netWorth > 0 ? 'positive' : result.netWorth < 0 ? 'negative' : 'neutral';
    const badgeText = result.netWorth > 0
      ? `Assets exceed liabilities by ${formatCurrency(result.netWorth, currency)}`
      : result.netWorth < 0
        ? `Liabilities exceed assets by ${formatCurrency(Math.abs(result.netWorth), currency)}`
        : 'Assets and liabilities are exactly balanced.';

    setResult('nw_result', formatCurrency(result.netWorth, currency));
    setResult('nw_assets', formatCurrency(result.totalAssets, currency));
    setResult('nw_liabilities', formatCurrency(result.totalLiabilities, currency));
    setResult('nw_ratio', result.debtToAssetRatio === null ? '—' : `${fmt(result.debtToAssetRatio)}%`);
    setBadge('nw_badge', badgeText, badgeType);

    History.add(
      'Net worth snapshot',
      formatCurrency(result.netWorth, currency)
    );
    History.render('history_list');
  }
};

// ── Currency Converter ──────────────────────
const CurrencyConverterCalc = {
  API_URL: 'https://convertz.app/api/currency',
  CACHE_KEY: 'calculatorhub_currency_rates',
  POPULAR_CODES: ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'SGD', 'AED'],
  ratesData: null,

  async init() {
    if (!document.getElementById('currency_converter_page')) return;

    ['cc_amount', 'cc_from', 'cc_to'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
      document.getElementById(id)?.addEventListener('change', () => this.calculate());
    });
    document.getElementById('cc_btn')?.addEventListener('click', () => this.calculate());
    document.getElementById('cc_swap')?.addEventListener('click', () => this.swapCurrencies());
    document.getElementById('cc_refresh')?.addEventListener('click', async () => {
      await this.loadRates(true);
      this.calculate();
    });

    document.getElementById('cc_amount').value = document.getElementById('cc_amount').value || '1';
    await this.loadRates(false);
    this.calculate();
  },

  getCachedRates() {
    try {
      const raw = localStorage.getItem(this.CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed?.rates || !parsed?.timestamp) return null;
      return parsed;
    }
    catch {
      return null;
    }
  },

  saveCachedRates(data) {
    try {
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(data));
    }
    catch {}
  },

  buildCurrencyCodes(rates) {
    const allCodes = ['USD', ...Object.keys(rates || {})];
    const uniqueCodes = [...new Set(allCodes)];
    const popular = this.POPULAR_CODES.filter(code => uniqueCodes.includes(code));
    const remaining = uniqueCodes
      .filter(code => !popular.includes(code))
      .sort((a, b) => a.localeCompare(b));
    return [...popular, ...remaining];
  },

  populateSelects(rates) {
    const fromSelect = document.getElementById('cc_from');
    const toSelect = document.getElementById('cc_to');
    if (!fromSelect || !toSelect) return;

    const previousFrom = fromSelect.value || 'USD';
    const previousTo = toSelect.value || 'INR';
    const codes = this.buildCurrencyCodes(rates);
    const options = codes.map(code => `<option value="${code}">${code}</option>`).join('');

    fromSelect.innerHTML = options;
    toSelect.innerHTML = options;
    fromSelect.value = codes.includes(previousFrom) ? previousFrom : 'USD';
    toSelect.value = codes.includes(previousTo) ? previousTo : (codes.includes('INR') ? 'INR' : 'EUR');
  },

  async loadRates(forceRefresh = false) {
    const cached = this.getCachedRates();
    const now = Date.now();
    const cacheAgeMs = cached ? now - new Date(cached.timestamp).getTime() : Infinity;
    const canUseCache = cached && cacheAgeMs < (60 * 60 * 1000);

    if (!forceRefresh && canUseCache) {
      this.ratesData = cached;
      this.populateSelects(cached.rates);
      this.updateTimestamp(cached.timestamp);
      setBadge('cc_badge', 'Using latest cached live rates.', 'neutral');
      return;
    }

    setBadge('cc_badge', 'Fetching latest exchange rates...', 'neutral');

    try {
      const response = await fetch(this.API_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (!data?.rates || !data?.timestamp) throw new Error('Invalid rate response');

      this.ratesData = data;
      this.saveCachedRates(data);
      this.populateSelects(data.rates);
      this.updateTimestamp(data.timestamp);
      setBadge('cc_badge', 'Latest rates loaded from live API.', 'positive');
    }
    catch {
      if (cached) {
        this.ratesData = cached;
        this.populateSelects(cached.rates);
        this.updateTimestamp(cached.timestamp);
        setBadge('cc_badge', 'Live fetch failed. Showing last cached rates.', 'negative');
        return;
      }

      this.updateTimestamp(null);
      setBadge('cc_badge', 'Unable to load live rates right now.', 'negative');
    }
  },

  updateTimestamp(timestamp) {
    const el = document.getElementById('cc_updated');
    if (!el) return;
    if (!timestamp) {
      el.textContent = 'Last updated: unavailable';
      return;
    }

    const date = new Date(timestamp);
    el.textContent = `Last updated: ${date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })}`;
  },

  getRate(code) {
    if (!this.ratesData?.rates) return null;
    if (code === 'USD') return 1;
    return this.ratesData.rates[code] || null;
  },

  swapCurrencies() {
    const fromSelect = document.getElementById('cc_from');
    const toSelect = document.getElementById('cc_to');
    if (!fromSelect || !toSelect) return;
    const currentFrom = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = currentFrom;
    this.calculate();
  },

  calculate() {
    const amount = parseFloat(document.getElementById('cc_amount')?.value) || 0;
    const fromCode = document.getElementById('cc_from')?.value || 'USD';
    const toCode = document.getElementById('cc_to')?.value || 'INR';

    if (!this.ratesData?.rates) {
      setResult('cc_result', '—');
      setResult('cc_rate', '—');
      setResult('cc_inverse', '—');
      setResult('cc_base', '—');
      return;
    }

    const fromRate = this.getRate(fromCode);
    const toRate = this.getRate(toCode);
    if (!fromRate || !toRate) {
      setBadge('cc_badge', 'Selected currency is unavailable right now.', 'negative');
      return;
    }

    const converted = amount ? (amount / fromRate) * toRate : 0;
    const rate = toRate / fromRate;
    const inverse = fromRate / toRate;

    setResult('cc_result', amount ? formatCurrency(converted, toCode) : formatCurrency(0, toCode));
    setResult('cc_rate', `1 ${fromCode} = ${fmt(rate, 6)} ${toCode}`);
    setResult('cc_inverse', `1 ${toCode} = ${fmt(inverse, 6)} ${fromCode}`);
    setResult('cc_base', `API base: ${this.ratesData.base || 'USD'}`);

    if (amount) {
      History.add(
        `${fmt(amount, 2)} ${fromCode} to ${toCode}`,
        formatCurrency(converted, toCode)
      );
      History.render('history_list');
    }
  }
};

// ── Time Zone Converter ─────────────────────
const TimeZoneCalc = {
  init() {
    if (!document.getElementById('timezone_page')) return;

    this.populateTimeZones();

    ['tz_datetime', 'tz_from', 'tz_to'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
      document.getElementById(id)?.addEventListener('change', () => this.calculate());
    });
    document.getElementById('tz_btn')?.addEventListener('click', () => this.calculate());
    document.getElementById('tz_swap')?.addEventListener('click', () => this.swapZones());

    const input = document.getElementById('tz_datetime');
    if (input && !input.value) input.value = formatDateTimeInputValue(new Date());
    this.calculate();
  },

  populateTimeZones() {
    const fromSelect = document.getElementById('tz_from');
    const toSelect = document.getElementById('tz_to');
    if (!fromSelect || !toSelect) return;

    const detectedZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    const zones = [...new Set([detectedZone, ...commonTimeZones])];
    const options = zones
      .map(zone => `<option value="${zone}">${getTimeZoneLabel(zone)}</option>`)
      .join('');

    fromSelect.innerHTML = options;
    toSelect.innerHTML = options;
    fromSelect.value = detectedZone;
    toSelect.value = detectedZone === 'UTC' ? 'Europe/London' : 'UTC';
  },

  swapZones() {
    const fromSelect = document.getElementById('tz_from');
    const toSelect = document.getElementById('tz_to');
    if (!fromSelect || !toSelect) return;
    const currentFrom = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = currentFrom;
    this.calculate();
  },

  calculate() {
    const dateTimeValue = document.getElementById('tz_datetime')?.value;
    const sourceZone = document.getElementById('tz_from')?.value || 'UTC';
    const targetZone = document.getElementById('tz_to')?.value || 'UTC';

    if (!dateTimeValue) {
      setResult('tz_target_result', '—');
      setResult('tz_source_readout', '—');
      setResult('tz_target_readout', '—');
      setResult('tz_utc_readout', '—');
      setBadge('tz_badge', 'Choose a date, time, and time zones.', 'neutral');
      return;
    }

    const utcDate = zonedDateTimeToUtc(dateTimeValue, sourceZone);
    if (!utcDate || Number.isNaN(utcDate.getTime())) {
      setBadge('tz_badge', 'Unable to interpret that date and time.', 'negative');
      return;
    }

    const sourceText = formatTimeZoneDate(utcDate, sourceZone);
    const targetText = formatTimeZoneDate(utcDate, targetZone);
    const utcText = utcDate.toUTCString();
    const sourceOffset = getTimeZoneOffsetMinutes(utcDate, sourceZone);
    const targetOffset = getTimeZoneOffsetMinutes(utcDate, targetZone);
    const difference = targetOffset - sourceOffset;
    const differenceText = difference === 0
      ? 'Both zones currently have the same UTC offset.'
      : difference > 0
        ? `${getTimeZoneLabel(targetZone)} is ${formatMinutesSpan(difference)} ahead of ${getTimeZoneLabel(sourceZone)}.`
        : `${getTimeZoneLabel(targetZone)} is ${formatMinutesSpan(difference)} behind ${getTimeZoneLabel(sourceZone)}.`;

    setResult('tz_target_result', targetText);
    setResult('tz_source_readout', sourceText);
    setResult('tz_target_readout', targetText);
    setResult('tz_utc_readout', utcText);
    setBadge('tz_badge', differenceText, 'neutral');

    History.add(
      `${sourceZone} to ${targetZone}`,
      targetText
    );
    History.render('history_list');
  }
};

// ── Fuel Cost Calculator ────────────────────
const FuelCostCalc = {
  init() {
    if (!document.getElementById('fuel_cost_page')) return;

    [
      'fuel_distance',
      'fuel_efficiency',
      'fuel_price'
    ].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });
    [
      'fuel_distance_unit',
      'fuel_trip_type',
      'fuel_efficiency_unit',
      'fuel_price_unit',
      'fuel_currency'
    ].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.calculate());
    });
    document.getElementById('fuel_btn')?.addEventListener('click', () => this.calculate());
    this.calculate();
  },

  calculate() {
    const distance = parseFloat(document.getElementById('fuel_distance')?.value) || 0;
    const distanceUnit = document.getElementById('fuel_distance_unit')?.value || 'km';
    const tripType = document.getElementById('fuel_trip_type')?.value || 'one_way';
    const efficiency = parseFloat(document.getElementById('fuel_efficiency')?.value) || 0;
    const efficiencyUnit = document.getElementById('fuel_efficiency_unit')?.value || 'kmpl';
    const price = parseFloat(document.getElementById('fuel_price')?.value) || 0;
    const priceUnit = document.getElementById('fuel_price_unit')?.value || 'liter';
    const currency = document.getElementById('fuel_currency')?.value || 'USD';

    if (!distance || !efficiency || !price) {
      setResult('fuel_total_cost', formatCurrency(0, currency));
      setResult('fuel_needed', '0.00 L');
      setResult('fuel_trip_distance', '0.00 km');
      setResult('fuel_cost_per_km', formatCurrency(0, currency));
      setResult('fuel_cost_per_mile', formatCurrency(0, currency));
      setBadge('fuel_badge', 'Enter distance, efficiency, and fuel price.', 'neutral');
      return;
    }

    const oneWayKm = distanceUnit === 'mi' ? distance * 1.609344 : distance;
    const tripDistanceKm = tripType === 'round_trip' ? oneWayKm * 2 : oneWayKm;
    const tripDistanceMiles = tripDistanceKm / 1.609344;

    let fuelNeededLiters = 0;
    if (efficiencyUnit === 'kmpl') {
      fuelNeededLiters = tripDistanceKm / efficiency;
    } else if (efficiencyUnit === 'l_per_100km') {
      fuelNeededLiters = (tripDistanceKm * efficiency) / 100;
    } else if (efficiencyUnit === 'mpg_us') {
      const gallons = tripDistanceMiles / efficiency;
      fuelNeededLiters = gallons * 3.785411784;
    } else if (efficiencyUnit === 'mpg_uk') {
      const gallons = tripDistanceMiles / efficiency;
      fuelNeededLiters = gallons * 4.54609;
    }

    let pricePerLiter = price;
    if (priceUnit === 'gallon_us') pricePerLiter = price / 3.785411784;
    if (priceUnit === 'gallon_uk') pricePerLiter = price / 4.54609;

    const totalCost = fuelNeededLiters * pricePerLiter;
    const costPerKm = totalCost / tripDistanceKm;
    const costPerMile = totalCost / tripDistanceMiles;

    setResult('fuel_total_cost', formatCurrency(totalCost, currency));
    setResult('fuel_needed', `${fmt(fuelNeededLiters)} L`);
    setResult('fuel_trip_distance', `${fmt(tripDistanceKm)} km`);
    setResult('fuel_cost_per_km', formatCurrency(costPerKm, currency));
    setResult('fuel_cost_per_mile', formatCurrency(costPerMile, currency));
    setBadge(
      'fuel_badge',
      tripType === 'round_trip' ? 'Round-trip estimate included.' : 'One-way estimate shown.',
      'neutral'
    );

    History.add(
      `Fuel for ${fmt(tripDistanceKm, 0)} km`,
      formatCurrency(totalCost, currency)
    );
    History.render('history_list');
  }
};

if (typeof window !== 'undefined') {
  Object.assign(window, {
    PercentageCalc,
    GSTCalc,
    EMICalc,
    SIPCalc,
    CompoundInterestCalc,
    MortgageCalc,
    RetirementCalc,
    LoanPrepaymentCalc,
    AgeCalc,
    LoanCalc,
    SalaryCalc,
    BMICalc,
    IncomeTaxCalc,
    RegimeComparisonCalc,
    HRACalc,
    TakeHomePayCalc,
    ROICalc,
    InflationCalc,
    NetWorthCalc,
    CurrencyConverterCalc,
    TimeZoneCalc,
    FuelCostCalc
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
document.addEventListener('DOMContentLoaded', async () => {
  initSiteNav();
  initIconAccessibility();
  History.render('history_list');
  PercentageCalc.init();
  GSTCalc.init();
  EMICalc.init();
  SIPCalc.init();
  CompoundInterestCalc.init();
  MortgageCalc.init();
  RetirementCalc.init();
  LoanPrepaymentCalc.init();
  AgeCalc.init();
  LoanCalc.init();
  SalaryCalc.init();
  BMICalc.init();
  IncomeTaxCalc.init();
  RegimeComparisonCalc.init();
  HRACalc.init();
  TakeHomePayCalc.init();
  ROICalc.init();
  InflationCalc.init();
  NetWorthCalc.init();
  await CurrencyConverterCalc.init();
  TimeZoneCalc.init();
  FuelCostCalc.init();
});
