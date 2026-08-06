# Neo-DS Component Coverage

Generated from the Figma file's AI Export (JSON) node — `AI Export — Full Design System JSON`. Every named component documented in that export now has a code counterpart, either as a direct 1:1 implementation or as a documented reuse of a more general component already in the library.

## Summary

**117 Figma components mapped. 0 remaining.**

- **64 components implemented** in `src/components/` (each with a Storybook story)
- The rest are covered by **prop-level variants** on those 64 (e.g. `Tooltip`'s `emphasis` prop covers `gLowEmphasisTooltip`) or by **direct reuse** where the Figma component is platform-specific (web/mobile) but the underlying code component is platform-agnostic (e.g. `wToast` and `mToast` are both just `Toast`)

## Implemented components

Accordion, AccordionGroup, AppBar, AutoSuggestion, Avatar, Badge, BalanceRow, Banner, BottomBanner, BottomNav, BottomSheet, Breadcrumb, BrowserFrame, Button, Carousel, Charts (LineChart, MultiLineChart, BarChart, GroupedBarChart, StackedBarChart, Legend, ChartDot, ChartTooltip, ChartSkeleton, Gridlines, AxisLabels), Checkbox, Chip, CoachMark, CollectionCard, ColorsDoc, Dropdown, HomeIndicator, IconCardWidget, IndexSelector, IndexStrip, IndiceCard, InfoCard, Keyboard, List/ListItem, LiveMarketIndicator, Loading (Spinner/ProgressBar), MarketDepth, Menu, Modal, NewsCard, Note, OrderDetails, PageErrorState, PriceChange, RadioButton, ReelCard, ResearchIdeaCard, Scrim, ScripIcon, ScripListItem, ScripName, Scrollbar, SearchBar, Separator, SideNav, SidePanel, StatusBar, StatusCard, StatusIndicator, StockCard, Switch, Table, Tabs, TaskBar, TextField, Toast, Tooltip, TopNav, TransactionBadge.

Plus the full token foundation (colors, typography, spacing, corner radius) in `src/tokens/`.

## Coverage map

Every Figma component name below, grouped by its Figma page, with what covers it.

### Accordion
- `mAccordionSmall` → `Accordion` (default size)
- `mAccordionBig` → `Accordion` with `size="big"`
- `mAccordionContainerSmall` → `AccordionGroup` with `size="small"`
- `mAccordionContainerBig` → `AccordionGroup` with `size="big"`

### App Bars
- `mBaseAppBar` → `AppBar`
- `mTopNav` → `AppBar` (same back/title/actions pattern, first element on every mobile screen)
- `wTopNav` → `TopNav`
- `wScripName` → `ScripName`
- `mStatusBar` → `StatusBar`

### Avatar
- `gAvatarProfile`, `gAvatarCompany` → `Avatar`

### Badges
- All 8 badge variant nodes → `Badge` (`color`/`size`/`variant` props)

### Banners
- `mTopBanner` → `Banner`
- `mBottomBanner` → `BottomBanner`
- `wBanner` → `Banner` with `onDismiss`

### Bottom Sheets
- `mBottomsheet` → `BottomSheet`
- `mBaseBottomsheetHeader` → `BottomSheet`'s header (`subtitle`, `showCloseButton`, `headerAction` props)
- `mBaseInfoCard` → `InfoCard`

### Breadcrumb
- `wBreadcrumbGroup`, `wBreadcrumbItem`, `wBreadcrumbSeparator` → `Breadcrumb`
- `wBreadcrumbOverflow` → `Breadcrumb`'s `maxVisible` prop

### Buttons
- All 8 button variant nodes → `Button` (`variant`/`type`/`size` props)

### Cards
- `gScripCards` → `StockCard`
- `mScripLarge+description`, `mScrip+description` → `StockCard`'s `description` prop
- `mActionIcon` → `IconCardWidget`
- `mScripicons` → `ScripIcon`
- `mNews` → `NewsCard`
- `mReels` → `ReelCard`
- `mMarketDepth`, `wMarketDepth` → `MarketDepth`
- `wIndexStrip`, `mIndexStrip` → `IndexStrip`
- `wIndexSelector` → `IndexSelector`
- `mIndiceCard` → `IndiceCard`
- `mIconCardWidget` → `IconCardWidget`
- `mBasketCard` → `CollectionCard` with `variant="basket"`
- `mScreenerCard` → `CollectionCard` with `variant="screener"`
- `mRedirectionCard` → `CollectionCard` with `variant="redirection"`

### Carousel
- `mCarousel`, `wCarousel`, `gCarouselGroup`, `gCarousel dots` → `Carousel` (dot indicators built in)

### Checkboxes / Chips / Coach mark / Dropdown / Radio button / Scrim / Search / Separator / Switch
- `gCheckbox` → `Checkbox`; `gRadioButton` → `RadioButton`; `gSwitch` → `Switch`
- `gChoiceChip`, `gActionChip`, `mChoiceChip` → `Chip`
- `gCoachMark` → `CoachMark`
- `wDropdown` → `Dropdown`
- `gScrim` → `Scrim`
- `gSearchBar` → `SearchBar`
- Separator (all 4 nodes) → `Separator`

### Data Viz. / Charts
- `gLinePositive`, `gLineNegative` → `Charts/LineChart`
- `gLineChartMix` → `Charts/MultiLineChart`
- `gLineChartSkeletonLoader` → `Charts/ChartSkeleton`
- `gGridlines` → `Charts/Gridlines`
- `mX-Axis`, `gY-Axis` → `Charts/AxisLabels` (horizontal/vertical orientation)
- `gBaseVerticalBar` → `Charts/BarChart`
- `gBaseGroupedVerticalBars` → `Charts/GroupedBarChart`
- `gBaseHorizontalStackedBarChart`, `gHorizontalStackedBarChart` → `Charts/StackedBarChart`
- `gBaseLegend`, `gLegendGroup` → `Charts/Legend`
- `gBaseChartIndicator`, `gChartIndicator`, `mIndicatorDot` → `Charts/ChartDot`
- `gBaseLiveMarketIndicator`, `gLiveMarketIndicator` → `LiveMarketIndicator`
- `gChartTooltip` → `Charts/ChartTooltip`

### Keyboard
- `mKeyboard` → `Keyboard`

### Lists
- `mList`, `wList`, `wListUniversal`, `mListUniversal` → `List`/`ListItem` (`density` prop covers the "universal" compact variants)
- `gBaseListIcons` → `ListItem`'s `leading` slot
- `gWithdrawalDepositBadge` → `TransactionBadge`
- `mScripList`, `wScripList` → `ScripListItem`
- `mGainLossArrow`, `mPriceChange%` → `PriceChange`
- `mBalanceList` → `BalanceRow`
- `mResearchIdeas`, `wResearchIdeas` → `ResearchIdeaCard`

### Loading & Progress (Pending confirmation)
- Loading states → `Loading` (`Spinner`, `ProgressBar`)
- `mPageErrorState` → `PageErrorState`

### Menu
- `wMenuItem`, `wMenuTitle`, `wMenuGroup`, `wMenuPopup` → `Menu`

### Modal
- `wModal`, `wModalHeader` → `Modal`

### Navigation
- `mBottomNav`, `mBaseBottomNav` → `BottomNav`
- `wSideNav`, `wBaseSideNav` → `SideNav`

### Note
- `mNote` → `Note`

### Scrollbar
- `wScrollbar` → `Scrollbar`

### Side panel
- `wSidePanel`, `wBaseSidepanelNav` → `SidePanel`

### Status & Indicators
- `gStatusTimeline`, `gBaseStatusIndicatorIcon`, `gBaseStatusTrack` → `StatusIndicator`
- `mStatusCard` → `StatusCard`
- `gBaseSupportingInfoStrip` → `StatusCard`'s info strip
- `mOrderDetails`, `wOrderDetails` → `OrderDetails`

### Table
- `wTableCell`, `mTableCell` → `Table`
- `wTableSort` → `Table`'s built-in sort indicator

### Tabs / Text fields
- All 4 tab nodes → `Tabs`
- All 12 text field nodes → `TextField`

### Toast
- `mToast`, `wToast` → `Toast`

### Tooltips
- `gTooltip` → `Tooltip`
- `gChartTooltip` → `Charts/ChartTooltip`
- `gLowEmphasisTooltip` → `Tooltip`'s `emphasis="low"` prop

### Utilities
- `mHomeIndicator` → `HomeIndicator`
- `mAutoSuggestion` → `AutoSuggestion`
- `wBrowserFrame` → `BrowserFrame`
- `wTaskBar` → `TaskBar`
