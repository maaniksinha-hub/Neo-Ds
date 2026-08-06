# Neo-DS Backlog

Component coverage generated from the Figma file's AI Export (JSON) node — `AI Export — Full Design System JSON`.
These components are documented in Figma with real variant/prop data but have not yet been implemented in code.
Each entry's `USE` / `WHEN` / `VARIANTS` guidance comes directly from the Figma component description.

**Implemented:** Button, Badge, Tabs, TextField, Separator + full token foundation (colors, typography, spacing).
**Remaining:** 119 components across 31 pages.

## Accordion (4)

### `mAccordionBig`
> USE: section-accordion, large-accordion, section-header-collapse
> WHEN: Section-level accordion for grouping and structuring primary content areas. Use for major content sections that can be expanded/collapsed.
> PLATFORM: Mobile
> VARIANTS: State (collapsed/expanded).
> INSTEAD-OF: Use mAccordionSmall for body-level content like FAQs.

### `mAccordionSmall`
> USE: collapsible-section, expandable-details, FAQ-item
> WHEN: Content that can be expanded/collapsed to save vertical space
> VARIANTS: State: "Collapsed"|"Expanded"
> TEXT: Title via child text nodes

### `mAccordionContainerBig`
> USE: section-accordion-container, accordion-with-card, contained-accordion
> WHEN: Section-level accordion within a card/container with visual boundary. Groups primary content with a contained look.
> PLATFORM: Mobile
> VARIANTS: State (collapsed/expanded).
> INSTEAD-OF: Use mAccordionBig for borderless section accordions, mAccordionContainerSmall for body-level contained accordions.

### `mAccordionContainerSmall`
> USE: body-accordion-container, faq-container, contained-faq-item
> WHEN: Body-level accordion within a card/container — FAQs, supporting details with contained styling and low visual emphasis.
> PLATFORM: Mobile
> VARIANTS: State (collapsed/expanded).
> INSTEAD-OF: Use mAccordionSmall for borderless body accordions, mAccordionContainerBig for section-level contained accordions.

## App Bars (5)

### `mTopNav`
> USE: top-navigation, status-bar-with-nav, page-header
> WHEN: Always first element in any screen. Provides system status bar + back navigation + title + action icons
> INSTEAD OF: Status bar + custom nav frame
> VARIANTS: "Default" | "Title and description below"
> TEXT: Title set via findOne(TEXT where chars === "Label").characters

### `mBaseAppBar`
> USE: page-title-bar, screen-header, stock-detail-bar
> WHEN: Page needs a dedicated title bar separate from mTopNav (detail screens, titled pages)
> INSTEAD OF: Frame + back button + title text + action icons
> VARIANTS: Type: "Homepage"|"Title+CTA"|"Title+icons"|"Title+subtext & CTA"|"with LTP"
> PROPS: Title#200:143

### `wTopNav`
> USE: web-top-navigation, web-header, web-page-bar
> WHEN: Top of every web page. Provides page context, navigation, search, market information, and primary actions.
> PLATFORM: Web
> VARIANTS: State controls search/default modes, market strip visibility.

### `wScripName`
> USE: web-scrip-name, clickable-stock-name, stock-link
> WHEN: Clickable stock/scrip name that navigates to stock detail page. Supports hover and active states for web interaction.
> PLATFORM: Web
> VARIANTS: Size, with/without exchange tag, with/without sector label.

### `mStatusBar`
> USE: status-bar, system-bar, ios-status-bar
> WHEN: Top of every mobile screen to show system status (time, battery, signal). Base layer only — always used within mTopNav.
> PLATFORM: Mobile

## Avatar (2)

### `gAvatarProfile`
> USE: user-avatar, profile-picture, initials-circle, account-avatar
> WHEN: Displaying user identity — profile photo or initials fallback. Used in navigation, account sections, and social features.
> PLATFORM: Global
> VARIANTS: Type (photo/initials), Size (S/M/L/XL).

### `gAvatarCompany`
> USE: company-avatar, company-logo, entity-icon, brand-circle
> WHEN: Displaying company or institutional identity — company logos in stock lists, fund houses, broker logos.
> PLATFORM: Global
> INSTEAD-OF: Use gAvatarProfile for user/person avatars.

## Banners (3)

### `mTopBanner`
> USE: top-banner, promo-banner, announcement-banner, alert-banner
> WHEN: Page-level announcements, promotions, or alerts at the top of mobile screens — dismissible.
> PLATFORM: Mobile
> VARIANTS: Type (info/promo/warning), with/without CTA and dismiss.
> INSTEAD-OF: Use mToast for temporary feedback, mBottomBanner for bottom-positioned banners.

### `mBottomBanner`
> USE: bottom-banner, sticky-banner, bottom-promo
> WHEN: Persistent promotional or action banner anchored to the bottom of mobile screens.
> PLATFORM: Mobile
> VARIANTS: With/without CTA button.
> INSTEAD-OF: Use mTopBanner for top-positioned banners.

### `wBanner`
> USE: web-banner, web-announcement, web-alert-bar
> WHEN: Page-level announcements and alerts on web — market status, maintenance notices, promotions.
> PLATFORM: Web
> VARIANTS: Type (info/warning), with/without dismiss.
> INSTEAD-OF: Use wToast for temporary feedback messages.

## Bottom Sheets (3)

### `mBottomsheet`
> USE: bottom-sheet, modal-sheet, action-sheet, drawer
> WHEN: Overlay panel sliding up from the bottom — confirmations, options, detail views, forms.
> PLATFORM: Mobile
> VARIANTS: Height (half/full screen), with/without handle.
> INSTEAD-OF: Use wModal for web overlay patterns, wSidePanel for web side drawers.

### `mBaseBottomsheetHeader`
> USE: bottomsheet-header, sheet-title-bar, drawer-header
> WHEN: Header area within a bottom sheet — title, subtitle, close button. Building block within mBottomsheet.
> PLATFORM: Mobile
> VARIANTS: With/without subtitle, close button, action button.

### `mBaseInfoCard`
> USE: info-card, detail-card, key-value-card
> WHEN: Card displaying structured key-value information — order details, transaction summaries.
> PLATFORM: Mobile
> VARIANTS: With/without header, expandable/static.

## Breadcrumb (4)

### `wBreadcrumbSeparator`
> USE: breadcrumb-separator, breadcrumb-arrow, path-divider
> WHEN: Separator between breadcrumb items — chevron or slash. Building block within wBreadcrumbGroup.
> PLATFORM: Web

### `wBreadcrumbItem`
> USE: breadcrumb-item, breadcrumb-link, path-segment
> WHEN: Individual clickable item in a breadcrumb trail — represents one level of navigation hierarchy.
> PLATFORM: Web
> VARIANTS: State (default/hover/current), current item is non-clickable.

### `wBreadcrumbOverflow`
> USE: breadcrumb-overflow, breadcrumb-ellipsis, collapsed-breadcrumbs
> WHEN: Collapsed middle breadcrumb items when the path is too long — shows "..." that expands on click.
> PLATFORM: Web
> VARIANTS: State (collapsed/expanded/hover).

### `wBreadcrumbGroup`
> USE: breadcrumb-trail, breadcrumb-nav, navigation-path
> WHEN: Full breadcrumb navigation showing the current page location within the site hierarchy.
> PLATFORM: Web

## Cards (17)

### `gScripCards`
> USE: stock-card, scrip-card, instrument-card, ticker-card
> WHEN: Displaying a stock/instrument as a card with name, price, change, and mini chart — used in horizontal scrollable lists, watchlist grids.
> PLATFORM: Global
> VARIANTS: Size, with/without chart, with/without description.

### `mScripLarge+description`
> USE: large-scrip-card, featured-stock-card, stock-detail-card
> WHEN: Featured or highlighted stock display with extended description and larger chart.
> PLATFORM: Mobile
> VARIANTS: With/without description text.
> INSTEAD-OF: Use gScripCards for standard compact stock cards.

### `mActionIcon`
> USE: action-icon-card, quick-action-icon, feature-shortcut
> WHEN: Grid of icon-based shortcuts — "IPO", "Mutual Funds", "SIP". Typically in a scrollable icon grid on home screens.
> PLATFORM: Mobile
> VARIANTS: Size, with/without label text.

### `mScripicons`
> USE: stock-icon, instrument-icon, exchange-icon
> WHEN: Small icon representation of a stock or instrument — used within lists and compact card layouts.
> PLATFORM: Mobile
> VARIANTS: With/without exchange badge overlay.

### `mNews`
> USE: news-card, article-card, news-item, headline-card
> WHEN: Displaying news articles and headlines — news feed, stock-specific news sections.
> PLATFORM: Mobile
> VARIANTS: With/without thumbnail image.

### `mReels`
> USE: reels-card, video-card, short-video-card
> WHEN: Vertical video/reels content cards for financial education or market commentary.
> PLATFORM: Mobile
> VARIANTS: With/without progress indicator.

### `mMarketDepth`
> USE: market-depth, order-book, bid-ask-table, level2-data
> WHEN: Market depth visualization showing bid and ask price levels with quantities — stock detail screens.
> PLATFORM: Mobile
> VARIANTS: Display style (table/chart).
> INSTEAD-OF: Use wMarketDepth for web.

### `wIndexStrip`
> USE: web-index-strip, web-market-ticker, web-index-bar
> WHEN: Horizontal ticker strip showing market indices on web — typically below the top navigation.
> PLATFORM: Web
> VARIANTS: Index count, expanded/compact display.
> INSTEAD-OF: Use mIndexStrip for mobile.

### `wIndexSelector`
> USE: web-index-selector, index-dropdown, market-index-picker
> WHEN: Dropdown selector for choosing which market index to display — NIFTY 50, SENSEX, NIFTY Bank etc.
> PLATFORM: Web
> VARIANTS: State (default/open/selected), item count.

### `mScrip+description`
> USE: scrip-description-card, stock-info-card
> WHEN: Stock card with description text for research and discovery contexts.
> PLATFORM: Mobile
> INSTEAD-OF: Use gScripCards for compact cards without descriptions.

### `mBasketCard`
> USE: basket-card, stock-basket, portfolio-basket, curated-list
> WHEN: Displaying curated stock baskets or thematic portfolios — "Tech Giants", "Dividend Picks".
> PLATFORM: Mobile

### `mScreenerCard`
> USE: screener-card, filter-result-card, stock-screener
> WHEN: Displaying stock screener results or pre-built screening criteria as selectable cards.
> PLATFORM: Mobile

### `mIconCardWidget`
> USE: icon-card-widget, feature-card, shortcut-card
> WHEN: Feature entry points displayed as icon+label cards — home screen widgets and quick-access grids.
> PLATFORM: Mobile

### `mRedirectionCard`
> USE: redirection-card, promo-card, discovery-card, deep-link-card
> WHEN: Promotional or discovery cards that redirect to a feature or external page. Cards with a clear CTA destination.
> PLATFORM: Mobile

### `mIndexStrip`
> USE: index-ticker, market-index-strip, index-bar
> WHEN: Horizontal strip showing major market indices (NIFTY, SENSEX) with live prices and change.
> PLATFORM: Mobile
> INSTEAD-OF: Use wIndexStrip for the web variant.

### `mIndiceCard`
> USE: index-card, market-index-card, benchmark-card
> WHEN: Individual market index displayed as a card with price, change, and mini chart.
> PLATFORM: Mobile

### `wMarketDepth`
> USE: web-market-depth, web-order-book, web-bid-ask
> WHEN: Full market depth (order book) visualization on web — bid/ask levels with quantities and prices.
> PLATFORM: Web
> INSTEAD-OF: Use mMarketDepth for mobile.

## Carousel (4)

### `mCarousel`
> USE: mobile-carousel, swipeable-cards, card-slider
> WHEN: Horizontally swipeable card carousel — promotions, onboarding slides, feature highlights.
> PLATFORM: Mobile
> VARIANTS: Card count indicator, with/without auto-play.
> INSTEAD-OF: Use wCarousel for web.

### `gCarousel dots`
> USE: carousel-indicator, page-dots, carousel-pagination
> WHEN: Dot indicators showing current position within a carousel. Building block used by mCarousel and wCarousel.
> PLATFORM: Global
> VARIANTS: Active/inactive dot state.

### `wCarousel`
> USE: web-carousel, web-slider, web-card-carousel
> WHEN: Horizontally scrollable content carousel on web — with arrow navigation controls.
> PLATFORM: Web
> VARIANTS: With/without arrow buttons, dot indicators.
> INSTEAD-OF: Use mCarousel for mobile.

### `gCarouselGroup`
> USE: carousel-group, carousel-container, carousel-wrapper
> WHEN: Container that groups carousel content with indicators and navigation controls.
> PLATFORM: Global

## Checkboxes (1)

### `gCheckbox`
> USE: checkbox, check-box, multi-select, toggle-check
> WHEN: Multiple selection from a list of options, or toggling a single boolean preference.
> PLATFORM: Global
> VARIANTS: State (unchecked/checked/indeterminate), Size (S/M), disabled variants.
> INSTEAD-OF: Use gRadioButton for single-selection from options, gSwitch for on/off toggles.

## Chips (3)

### `gChoiceChip`
> USE: choice-chip, filter-chip, selection-chip, tag-selector
> WHEN: Selecting one or more options from a horizontal set — filters, categories, time ranges.
> PLATFORM: Global
> VARIANTS: State (default/selected/disabled), Size, with/without icon.
> INSTEAD-OF: Use gRadioButton for vertical single-select lists, gPillTabGroup for navigation-style tabs.

### `gActionChip`
> USE: action-chip, quick-action, shortcut-chip
> WHEN: Triggering quick actions inline — "Add to watchlist", "Share", "Compare". Actions, not selections.
> PLATFORM: Global
> INSTEAD-OF: Use gChoiceChip for selection/filtering, gTextButton for text-only actions.

### `mChoiceChip`
> USE: mobile-choice-chip, mobile-filter-chip, mobile-selection-chip
> WHEN: Mobile-specific choice chip with touch-optimized sizing.
> PLATFORM: Mobile
> VARIANTS: State (default/selected/disabled), with/without icon.
> INSTEAD-OF: Use gChoiceChip for the global/shared variant.

## Coach mark (1)

### `gCoachMark`
> USE: coach-mark, onboarding-tooltip, feature-callout, spotlight
> WHEN: Highlighting a UI element during onboarding or feature introduction — "Tap here to add stocks".
> PLATFORM: Global
> VARIANTS: Arrow position (top/bottom/left/right), with/without step indicator, with/without dismiss.
> INSTEAD-OF: Use gTooltip for contextual info tooltips, not onboarding.

## Data Viz. / Charts (18)

### `gBaseLegend`
> USE: chart-legend-item, legend-entry, data-series-label
> WHEN: Individual legend entry showing color dot + label for a data series. Building block for gLegendGroup.
> PLATFORM: Global
> VARIANTS: Color dot style, with/without value.

### `gLegendGroup`
> USE: chart-legend, legend-bar, data-legend, series-legend
> WHEN: Group of legend entries for multi-series charts — typically placed above or below the chart.
> PLATFORM: Global
> VARIANTS: Layout (horizontal/vertical), item count.

### `gLineNegative`
> USE: negative-line-chart, loss-line, red-line-chart
> WHEN: Line chart segment showing negative/loss price movement — colored red.
> PLATFORM: Global
> VARIANTS: With/without area fill.
> INSTEAD-OF: Use gLinePositive for positive/gain segments.

### `gLinePositive`
> USE: positive-line-chart, gain-line, green-line-chart
> WHEN: Line chart segment showing positive/gain price movement — colored green.
> PLATFORM: Global
> VARIANTS: With/without area fill.
> INSTEAD-OF: Use gLineNegative for negative/loss segments.

### `gLineChartSkeletonLoader`
> USE: chart-skeleton, chart-loader, chart-placeholder
> WHEN: Placeholder skeleton while chart data is loading. Maintains layout space and signals incoming content.
> PLATFORM: Global
> VARIANTS: Size (small/medium/large).

### `gBaseLiveMarketIndicator`
> USE: market-status-dot, live-indicator-dot, market-open-close
> WHEN: Small status dot showing market state (open/closed/pre-market). Building block for gLiveMarketIndicator.
> PLATFORM: Global
> VARIANTS: State (live/closed/pre-market), color (green/red/grey), with/without pulse.

### `gLiveMarketIndicator`
> USE: live-market-indicator, market-status-bar, trading-status
> WHEN: Showing current market status with label (e.g. "Market Open", "Market Closed") — typically in top nav or index strip.
> PLATFORM: Global
> VARIANTS: State (live/closed/pre-market).

### `gBaseChartIndicator`
> USE: chart-data-point, chart-dot, data-marker
> WHEN: Data point marker on a chart line — building block used within chart compositions.
> PLATFORM: Global
> VARIANTS: Color (positive/negative).

### `gChartIndicator`
> USE: chart-indicator, current-price-marker, chart-crosshair
> WHEN: Interactive indicator showing the current/selected price point on a chart with crosshair lines.
> PLATFORM: Global
> VARIANTS: Type (dot/crosshair/line), color.

### `gBaseVerticalBar`
> USE: bar-chart-bar, vertical-bar, column-bar
> WHEN: Single vertical bar in a bar chart. Building block for grouped and stacked bar charts.
> PLATFORM: Global

### `gGridlines`
> USE: chart-gridlines, chart-grid, axis-gridlines
> WHEN: Background gridlines for charts — horizontal lines that help read values off the Y-axis.
> PLATFORM: Global
> VARIANTS: Density (sparse/medium/dense).

### `gBaseGroupedVerticalBars`
> USE: grouped-bar-chart, multi-bar, comparison-bars
> WHEN: Grouped vertical bars comparing multiple data series side by side at each data point.
> PLATFORM: Global
> VARIANTS: Bar count (2/3/4), with/without labels.

### `gBaseHorizontalStackedBarChart`
> USE: stacked-bar-base, horizontal-bar-segment
> WHEN: Individual segment within a horizontal stacked bar chart. Building block for gHorizontalStackedBarChart.
> PLATFORM: Global

### `gHorizontalStackedBarChart`
> USE: horizontal-stacked-bar, composition-bar, proportional-bar
> WHEN: Showing proportional composition — portfolio allocation, sector distribution, category breakdown.
> PLATFORM: Global
> INSTEAD-OF: Use gBaseGroupedVerticalBars for comparing absolute values across categories.

### `gLineChartMix`
> USE: mixed-line-chart, multi-series-chart, comparison-chart
> WHEN: Displaying multiple data series on a single line chart with different visual treatments (solid, dashed, area fill).
> PLATFORM: Global
> INSTEAD-OF: Use single gLinePositive/gLineNegative for one-series charts.

### `mIndicatorDot`
> USE: chart-dot, data-point-marker, current-value-indicator
> WHEN: Marking the current or selected data point on a line chart.
> PLATFORM: Mobile

### `mX-Axis`
> USE: x-axis-labels, time-axis, horizontal-axis
> WHEN: Horizontal axis labels for charts — dates, time periods, categories.
> PLATFORM: Mobile

### `gY-Axis`
> USE: y-axis-labels, value-axis, vertical-axis
> WHEN: Vertical axis labels for charts — price values, quantities, percentages.
> PLATFORM: Global

## Dropdown (1)

### `wDropdown`
> USE: dropdown, select, dropdown-field, combo-box
> WHEN: Selection from a predefined list of options — form selects, filter dropdowns, sort-by controls.
> PLATFORM: Web
> VARIANTS: State (default/open/selected/disabled), with/without search.
> INSTEAD-OF: Use gRadioButton for inline visible single-select.

## Keyboard (1)

### `mKeyboard`
> USE: numeric-keyboard, input-keyboard, pin-entry-keyboard
> WHEN: Custom keyboard overlay for amount/PIN entry
> VARIANTS: Type: "Numeric"|"Alphabetic"|"with OTP band"|"with button"

## Lists (13)

### `mList`
> USE: list-item, list-row, settings-row, detail-row
> WHEN: Standard list items — settings, menus, detail key-value rows, and general-purpose vertical lists.
> PLATFORM: Mobile
> VARIANTS: Leading (icon/avatar/none), trailing (text/icon/switch/chevron), with/without subtitle and divider.
> INSTEAD-OF: Use mScripList for stock-specific lists, mBalanceList for balance displays.

### `gWithdrawalDepositBadge`
> USE: withdrawal-badge, deposit-badge, transaction-type-badge, fund-flow-badge
> WHEN: Labeling transaction type (withdrawal/deposit/transfer) in fund flow and transaction lists.
> PLATFORM: Global
> VARIANTS: Type (withdrawal/deposit/transfer).

### `mScripList`
> USE: stock-list-item, watchlist-row, scrip-row, ticker-list
> WHEN: Displaying stocks in a vertical list with name, price, and change — watchlists, search results, portfolio holdings.
> PLATFORM: Mobile
> VARIANTS: Content density, with/without chart, with/without quantity.
> INSTEAD-OF: Use wScripList for web, mList for non-stock list items.

### `mGainLossArrow`
> USE: gain-loss-arrow, direction-indicator, trend-arrow
> WHEN: Showing directional movement (up/down) for price changes. Used within scrip list items and price displays.
> PLATFORM: Mobile
> VARIANTS: Direction (up/down) with automatic green/red coloring.

### `mPriceChange%`
> USE: price-change-percent, change-display, gain-loss-value
> WHEN: Displaying price change as both absolute value and percentage with positive/negative color coding.
> PLATFORM: Mobile
> VARIANTS: Display format (percent only, absolute only, both), positive/negative/neutral states.

### `mBalanceList`
> USE: balance-list, funds-list, account-balance, wallet-row
> WHEN: Displaying financial balances — available margin, holdings value, P&L breakdown, fund balances.
> PLATFORM: Mobile
> VARIANTS: With/without secondary value, positive/negative coloring, expandable detail.

### `mResearchIdeas`
> USE: research-card, idea-card, analyst-recommendation, trade-idea
> WHEN: Displaying research ideas, analyst calls, and trade recommendations with target price and timeframe.
> PLATFORM: Mobile
> VARIANTS: With/without analyst info, target price, confidence level.

### `wScripList`
> USE: web-stock-list, web-watchlist-row, web-scrip-row
> WHEN: Displaying stocks in web table/list format with extended data columns — price, change, volume, market cap.
> PLATFORM: Web
> VARIANTS: Column configurations, with/without hover actions, expanded/compact density.
> INSTEAD-OF: Use mScripList for mobile, wList for non-stock web lists.

### `wResearchIdeas`
> USE: web-research-card, web-idea-card, web-analyst-recommendation
> WHEN: Research ideas and analyst recommendations on web — same content as mResearchIdeas in web layout.
> PLATFORM: Web
> INSTEAD-OF: Use mResearchIdeas for mobile.

### `wList`
> USE: web-list-item, web-list-row, web-settings-row
> WHEN: Standard list items on web — settings, menus, detail rows. Web equivalent of mList.
> PLATFORM: Web
> VARIANTS: Leading (icon/avatar/none), trailing (text/icon/switch/chevron), with/without subtitle.
> INSTEAD-OF: Use mList for mobile, wScripList for stock-specific web lists.

### `gBaseListIcons`
> USE: list-icon, list-leading-icon, row-icon
> WHEN: Standard icon set used as leading elements in list items — settings, menu, and detail rows. Building block for mListUniversal and wListUniversal.
> PLATFORM: Global
> VARIANTS: Icon type (default/colored/badge/avatar/custom).

### `wListUniversal`
> USE: web-universal-list, web-adaptive-list, web-generic-row
> WHEN: Flexible web list item that adapts to multiple content patterns. Web equivalent of mListUniversal.
> PLATFORM: Web
> VARIANTS: Configurable leading/trailing content slots.

### `mListUniversal`
> USE: universal-list-item, generic-list-row, adaptive-list
> WHEN: Generic list item that adapts to multiple content patterns — text, icons, and metadata in a single flexible row.
> PLATFORM: Mobile
> VARIANTS: Configurable leading/trailing content slots.

## Loading & Progress (Pending confirmation) (1)

### `mPageErrorState`
> USE: error-state, empty-state, no-data, failed-load
> WHEN: Full-page error or empty state — network failures, no results, empty lists. Shows illustration + message + retry CTA.
> PLATFORM: Mobile

## Menu (4)

### `wMenuItem`
> USE: menu-item, dropdown-item, context-menu-item
> WHEN: Individual selectable item within a dropdown menu or context menu.
> PLATFORM: Web
> VARIANTS: State (default/hover/active/disabled), with/without icon, with/without keyboard shortcut.

### `wMenuTitle`
> USE: menu-title, menu-section-header, dropdown-header
> WHEN: Non-interactive section title within a dropdown menu — groups related menu items.
> PLATFORM: Web

### `wMenuGroup`
> USE: menu-group, menu-section, dropdown-section
> WHEN: Group of related menu items with optional title separator.
> PLATFORM: Web

### `wMenuPopup`
> USE: dropdown-menu, context-menu, popup-menu, action-menu
> WHEN: Floating menu triggered by a button click or right-click — contains wMenuItems grouped by wMenuGroups.
> PLATFORM: Web
> VARIANTS: Size (auto/small/medium/large), position.

## Modal (2)

### `wModal`
> USE: web-modal, dialog, popup, confirmation-dialog
> WHEN: Centered overlay dialog on web — confirmations, alerts, forms, and critical actions requiring user decision.
> PLATFORM: Web
> VARIANTS: Size, with/without footer actions.
> INSTEAD-OF: Use mBottomsheet for mobile overlays, wSidePanel for non-blocking side panels.

### `wModalHeader`
> USE: modal-header, dialog-title, popup-header
> WHEN: Header area within wModal — title, subtitle, close button. Building block.
> PLATFORM: Web
> VARIANTS: With/without subtitle and close button.

## Navigation (4)

### `mBaseBottomNav`
> USE: bottom-nav-base, tab-bar-item, nav-icon
> WHEN: Building block for mBottomNav. Not intended for standalone use.
> PLATFORM: Mobile
> INSTEAD-OF: Use mBottomNav for the complete bottom navigation bar.

### `mBottomNav`
> USE: bottom-navigation, tab-bar, main-nav
> WHEN: Primary navigation at bottom of mobile screens. Always present on main app screens.
> PLATFORM: Mobile
> VARIANTS: Active tab selection (Home, Search, Portfolio, Orders, More).
> INSTEAD-OF: Use wSideNav for web navigation.

### `wSideNav`
> USE: side-navigation, left-nav, web-nav-menu
> WHEN: Primary navigation on web. Always visible on the left side of the layout.
> PLATFORM: Web
> VARIANTS: Expanded/collapsed states, active section highlighting.
> INSTEAD-OF: Use mBottomNav for mobile navigation.

### `wBaseSideNav`
> USE: side-nav-item, nav-menu-item, nav-link
> WHEN: Individual navigation item within wSideNav. Building block — not for standalone use.
> PLATFORM: Web
> VARIANTS: State (default, hover, active, disabled), with/without icon and badge.

## Note (1)

### `mNote`
> USE: inline-note, info-note, contextual-message, inline-alert
> WHEN: Persistent inline messages providing context, tips, or warnings within content — not dismissible like toasts.
> PLATFORM: Mobile
> VARIANTS: Type (info/warning/success/error/neutral), with/without icon and CTA.
> INSTEAD-OF: Use mToast for temporary dismissible feedback.

## Radio button (1)

### `gRadioButton`
> USE: radio-button, radio-select, single-choice
> WHEN: Single selection from a mutually exclusive set of options.
> PLATFORM: Global
> VARIANTS: State (unselected/selected), Size (S/M), disabled variants.
> INSTEAD-OF: Use gCheckbox for multi-selection, gChoiceChip for inline choice groups.

## Scrim (1)

### `gScrim`
> USE: scrim, overlay, backdrop, dimmer
> WHEN: Semi-transparent overlay behind modals, bottom sheets, and side panels — dims background content.
> PLATFORM: Global
> VARIANTS: Opacity levels (standard/heavy).

## Scrollbar (1)

### `wScrollbar`
> USE: scrollbar, custom-scrollbar, scroll-indicator
> WHEN: Custom scrollbar for scrollable web containers — replacing default browser scrollbar with styled version.
> PLATFORM: Web
> VARIANTS: Orientation (vertical/horizontal), state (default/hover/active).

## Search (1)

### `gSearchBar`
> USE: search-input, search-bar, search-field, global-search
> WHEN: Search entry point — top of lists, watchlists, and discovery screens.
> PLATFORM: Global
> VARIANTS: State (default/focused/filled), with/without filter icon, voice search, cancel button.

## Side panel (2)

### `wSidePanel`
> USE: side-panel, detail-panel, slide-over, inspector-panel
> WHEN: Right-side panel for detail views, settings, and contextual information on web — stock details, order entry, filters.
> PLATFORM: Web
> VARIANTS: Width, with/without header.
> INSTEAD-OF: Use mBottomsheet for mobile overlay patterns, wModal for centered dialogs.

### `wBaseSidepanelNav`
> USE: side-panel-tab, panel-nav-item, panel-section-tab
> WHEN: Tab navigation within a side panel — switching between detail sections. Building block within wSidePanel.
> PLATFORM: Web
> VARIANTS: State (default/active/hover).

## Status & Indicators (7)

### `mStatusCard`
> USE: status-card, order-status, transaction-status, progress-card
> WHEN: Displaying status of orders, transactions, or processes — "Pending", "Executed", "Failed" with timeline.
> PLATFORM: Mobile
> VARIANTS: Status type (success/pending/failed/partial), with/without timeline and details.

### `gBaseSupportingInfoStrip`
> USE: info-strip, supporting-info, status-metadata
> WHEN: Horizontal strip of supplementary information below a status card — timestamps, reference numbers, amounts.
> PLATFORM: Global
> VARIANTS: With/without icon prefix.

### `gStatusTimeline`
> USE: status-timeline, progress-steps, order-progress, step-tracker
> WHEN: Multi-step progress visualization — order lifecycle (placed → confirmed → executed), KYC steps.
> PLATFORM: Global
> VARIANTS: Step count, completed/active/pending step states.

### `gBaseStatusIndicatorIcon`
> USE: status-icon, step-indicator, progress-dot
> WHEN: Individual status step icon within gStatusTimeline — checkmark, dot, or error icon per step.
> PLATFORM: Global
> VARIANTS: State (completed/active/pending/error).

### `gBaseStatusTrack`
> USE: status-track, progress-line, timeline-connector
> WHEN: Connecting line between status steps in gStatusTimeline. Building block.
> PLATFORM: Global
> VARIANTS: State (completed/pending) affecting color.

### `mOrderDetails`
> USE: order-detail-view, trade-confirmation, order-summary
> WHEN: Full order details screen — showing order status, price, quantity, timestamps, and supporting information.
> PLATFORM: Mobile
> INSTEAD-OF: Use wOrderDetails for web.

### `wOrderDetails`
> USE: web-order-detail, web-trade-confirmation, web-order-summary
> WHEN: Full order details on web — same content as mOrderDetails in web layout.
> PLATFORM: Web
> INSTEAD-OF: Use mOrderDetails for mobile.

## Switch (1)

### `gSwitch`
> USE: toggle-switch, on-off-toggle, boolean-toggle
> WHEN: Toggling a setting or preference on/off with immediate effect.
> PLATFORM: Global
> VARIANTS: State (off/on), disabled variants.
> INSTEAD-OF: Use gCheckbox for form-based boolean fields that submit with a button.

## Table (4)

### `mTableCell`
> USE: table-cell, data-cell, grid-cell
> WHEN: Individual cell within a mobile data table — contains text values or header labels.
> PLATFORM: Mobile
> VARIANTS: Type (header/text), alignment (left/right).
> INSTEAD-OF: Use wTableCell for web tables.

### `wTableCell`
> USE: web-table-cell, web-data-cell, web-grid-cell
> WHEN: Individual cell within a web data table — text, numbers, status indicators.
> PLATFORM: Web
> VARIANTS: Type (header/text/status), alignment (left/right/center), with/without sort indicator.
> INSTEAD-OF: Use mTableCell for mobile tables.

### `wTableHeader`
> USE: web-table-header, column-header, table-heading
> WHEN: Header row cell for web data tables — column labels with optional sort controls.
> PLATFORM: Web
> VARIANTS: With/without sort indicator.

### `wTableSort`
> USE: table-sort-icon, column-sort, sort-indicator
> WHEN: Sort direction indicator within table headers — ascending/descending/unsorted.
> PLATFORM: Web
> VARIANTS: State (ascending/descending/none).

## Toast (2)

### `mToast`
> USE: toast, snackbar, notification-toast, feedback-message
> WHEN: Temporary feedback messages — success, error, info, warning notifications that auto-dismiss.
> PLATFORM: Mobile
> VARIANTS: Type (success/error/warning/info/neutral), with/without action button and icon.
> INSTEAD-OF: Use wToast for web, mNote for persistent inline messages.

### `wToast`
> USE: web-toast, web-snackbar, web-notification-toast
> WHEN: Temporary feedback messages on web — same patterns as mToast but sized for web layouts.
> PLATFORM: Web
> VARIANTS: Type (success/error/warning/info/neutral), with/without action button.
> INSTEAD-OF: Use mToast for mobile, wBanner for persistent page-level messages.

## Tooltips (3)

### `gChartTooltip`
> USE: chart-tooltip, data-tooltip, hover-tooltip, price-tooltip
> WHEN: Showing data values on hover/touch over chart elements — price at point, volume, OHLC data.
> PLATFORM: Global
> VARIANTS: Content type (single value/multi-line/OHLC), with/without crosshair.
> INSTEAD-OF: Use gTooltip for general UI tooltips not tied to charts.

### `gTooltip`
> USE: tooltip, info-tooltip, help-tooltip, hover-tip
> WHEN: Providing supplementary information on hover — explaining icons, truncated text, or unfamiliar terms.
> PLATFORM: Global
> VARIANTS: Position (top/bottom/left/right), with/without arrow.
> INSTEAD-OF: Use gChartTooltip for data visualization tooltips, gCoachMark for onboarding guidance.

### `gLowEmphasisTooltip`
> USE: subtle-tooltip, light-tooltip, secondary-tooltip
> WHEN: Tooltip that needs minimal visual disruption — less prominent than gTooltip.
> PLATFORM: Global
> VARIANTS: Position variants.
> INSTEAD-OF: Use gTooltip for standard emphasis tooltips.

## Utilities (4)

### `mHomeIndicator`
> USE: home-indicator, swipe-bar, ios-home-bar
> WHEN: iOS home indicator bar at the bottom of screens — required on iPhone X and later for gesture navigation context.
> PLATFORM: Mobile
> VARIANTS: Color (light/dark) matching the screen background.

### `mAutoSuggestion`
> USE: auto-suggestion, keyboard-suggestions, predictive-text
> WHEN: Suggestion strip above the keyboard showing predicted words or stock names during text entry.
> PLATFORM: Mobile

### `wBrowserFrame`
> USE: browser-chrome, web-mockup-frame, browser-window
> WHEN: Wrapping web designs in a browser chrome for presentation and context. Utility component — not for product UI.
> PLATFORM: Web

### `wTaskBar`
> USE: os-taskbar, system-bar, desktop-frame
> WHEN: Adding OS taskbar context to web mockups for presentation. Utility component — not for product UI.
> PLATFORM: Web

