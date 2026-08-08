// Neo-DS public API — exact Figma component names.
//
// Usage:  import * as DS from './ds';   <DS.gSolidButton />  <DS.mScripList />
//
// React reserves lowercase-first JSX tags for DOM elements, so implementation files
// export PascalCase symbols. This barrel maps them back to their exact Figma names,
// which is what the Figma AI Composition Rules and decision trees refer to.

import type { ComponentProps } from 'react';

export { GAvatarProfile as gAvatarProfile } from './components/gAvatarProfile/gAvatarProfile';
export { GBadge as gBadge } from './components/gBadge/gBadge';
export { GCheckbox as gCheckbox } from './components/gCheckbox/gCheckbox';
export { GChoiceChip as gChoiceChip } from './components/gChoiceChip/gChoiceChip';
export { GCoachMark as gCoachMark } from './components/gCoachMark/gCoachMark';
export { GLineTabGroup as gLineTabGroup } from './components/gLineTabGroup/gLineTabGroup';
export { GLiveMarketIndicator as gLiveMarketIndicator } from './components/gLiveMarketIndicator/gLiveMarketIndicator';
export { GRadioButton as gRadioButton } from './components/gRadioButton/gRadioButton';
export { GScrim as gScrim } from './components/gScrim/gScrim';
export { GScripCards as gScripCards } from './components/gScripCards/gScripCards';
export { GSearchBar as gSearchBar } from './components/gSearchBar/gSearchBar';
export { GSeparator as gSeparator } from './components/gSeparator/gSeparator';
export { GSolidButton as gSolidButton } from './components/gSolidButton/gSolidButton';
export { GStatusTimeline as gStatusTimeline } from './components/gStatusTimeline/gStatusTimeline';
export { GSwitch as gSwitch } from './components/gSwitch/gSwitch';
export { GTextField as gTextField } from './components/gTextField/gTextField';
export { GTooltip as gTooltip } from './components/gTooltip/gTooltip';
export { GWithdrawalDepositBadge as gWithdrawalDepositBadge } from './components/gWithdrawalDepositBadge/gWithdrawalDepositBadge';
export { MAccordionSmall as mAccordionSmall } from './components/mAccordionSmall/mAccordionSmall';
export { MAccordionContainerSmall as mAccordionContainerSmall } from './components/mAccordionSmall/mAccordionContainerSmall';
export { MAutoSuggestion as mAutoSuggestion } from './components/mAutoSuggestion/mAutoSuggestion';
export { MBalanceList as mBalanceList } from './components/mBalanceList/mBalanceList';
export { MBaseAppBar as mBaseAppBar } from './components/mBaseAppBar/mBaseAppBar';
export { MBaseInfoCard as mBaseInfoCard } from './components/mBaseInfoCard/mBaseInfoCard';
export { MBasketCard as mBasketCard } from './components/mBasketCard/mBasketCard';
export { MBottomBanner as mBottomBanner } from './components/mBottomBanner/mBottomBanner';
export { MBottomNav as mBottomNav } from './components/mBottomNav/mBottomNav';
export { MBottomsheet as mBottomsheet } from './components/mBottomsheet/mBottomsheet';
export { MCarousel as mCarousel } from './components/mCarousel/mCarousel';
export { MHomeIndicator as mHomeIndicator } from './components/mHomeIndicator/mHomeIndicator';
export { MIconCardWidget as mIconCardWidget } from './components/mIconCardWidget/mIconCardWidget';
export { MIndexStrip as mIndexStrip } from './components/mIndexStrip/mIndexStrip';
export { MIndiceCard as mIndiceCard } from './components/mIndiceCard/mIndiceCard';
export { MKeyboard as mKeyboard } from './components/mKeyboard/mKeyboard';
export { MList as mList } from './components/mList/mList';
export { MListItem as mListItem } from './components/mList/mListItem';
export { MMarketDepth as mMarketDepth } from './components/mMarketDepth/mMarketDepth';
export { MNews as mNews } from './components/mNews/mNews';
export { MNote as mNote } from './components/mNote/mNote';
export { MOrderDetails as mOrderDetails } from './components/mOrderDetails/mOrderDetails';
export { MPageErrorState as mPageErrorState } from './components/mPageErrorState/mPageErrorState';
export { MPriceChangePercentage as mPriceChangePercentage } from './components/mPriceChangePercentage/mPriceChangePercentage';
export { MReels as mReels } from './components/mReels/mReels';
export { MResearchIdeas as mResearchIdeas } from './components/mResearchIdeas/mResearchIdeas';
export { MScripList as mScripList } from './components/mScripList/mScripList';
export { MScripicons as mScripicons } from './components/mScripicons/mScripicons';
export { MStatusBar as mStatusBar } from './components/mStatusBar/mStatusBar';
export { MStatusCard as mStatusCard } from './components/mStatusCard/mStatusCard';
export { MToast as mToast } from './components/mToast/mToast';
export { MTopBanner as mTopBanner } from './components/mTopBanner/mTopBanner';
export { WBreadcrumbGroup as wBreadcrumbGroup } from './components/wBreadcrumbGroup/wBreadcrumbGroup';
export { WBrowserFrame as wBrowserFrame } from './components/wBrowserFrame/wBrowserFrame';
export { WDropdown as wDropdown } from './components/wDropdown/wDropdown';
export { WIndexSelector as wIndexSelector } from './components/wIndexSelector/wIndexSelector';
export { WMenuPopup as wMenuPopup } from './components/wMenuPopup/wMenuPopup';
export { WModal as wModal } from './components/wModal/wModal';
export { WScripName as wScripName } from './components/wScripName/wScripName';
export { WScrollbar as wScrollbar } from './components/wScrollbar/wScrollbar';
export { WSideNav as wSideNav } from './components/wSideNav/wSideNav';
export { WSidePanel as wSidePanel } from './components/wSidePanel/wSidePanel';
export { WTable as wTable } from './components/wTable/wTable';
export { WTaskBar as wTaskBar } from './components/wTaskBar/wTaskBar';
export { WTopNav as wTopNav } from './components/wTopNav/wTopNav';

// ─────────────────────────────────────────────────────────────────────────────
// Figma-name aliases
//
// Some Figma components are implemented here as one component with props.
// These wrappers make every Figma name resolvable, so the AI Composition Rules'
// decision trees ("Primary action → gSolidButton") work verbatim in code.
// ─────────────────────────────────────────────────────────────────────────────

import { GSolidButton } from './components/gSolidButton/gSolidButton';
import { GChoiceChip } from './components/gChoiceChip/gChoiceChip';
import { GLineTabGroup } from './components/gLineTabGroup/gLineTabGroup';
import { MList } from './components/mList/mList';
import { MListItem } from './components/mList/mListItem';
import { MAccordionSmall } from './components/mAccordionSmall/mAccordionSmall';
import { MAccordionContainerSmall } from './components/mAccordionSmall/mAccordionContainerSmall';
import { MBasketCard } from './components/mBasketCard/mBasketCard';
import { GAvatarProfile } from './components/gAvatarProfile/gAvatarProfile';
import { GTooltip } from './components/gTooltip/gTooltip';
import { MTopBanner } from './components/mTopBanner/mTopBanner';
import { MToast } from './components/mToast/mToast';
import { MCarousel } from './components/mCarousel/mCarousel';
import { MScripList } from './components/mScripList/mScripList';
import { MIndexStrip } from './components/mIndexStrip/mIndexStrip';
import { MMarketDepth } from './components/mMarketDepth/mMarketDepth';
import { MOrderDetails } from './components/mOrderDetails/mOrderDetails';
import { MResearchIdeas } from './components/mResearchIdeas/mResearchIdeas';
import { AxisLabels } from './components/Charts/AxisLabels';
export { GCarouselDots as gCarouselDots } from './components/gCarouselDots/gCarouselDots';

/**
 * USE: secondary-button, outline-button, ghost-button
 * WHEN: Secondary actions that need moderate emphasis — cancel, back, alternative options alongside a primary button.
 * PLATFORM: Global
 * VARIANTS: Size (S/M/L), State (default/hover/pressed/disabled), Color variants.
 * INSTEAD-OF: Use gSolidButton for primary actions, gTextButton for tertiary.
 */
export const gOutlineButton = (p: Omit<ComponentProps<typeof GSolidButton>, 'variant'>) => <GSolidButton variant="outline" {...p} />;
/**
 * USE: text-button, link-button, tertiary-button, inline-action
 * WHEN: Lowest-emphasis actions — &quot;See all&quot;, &quot;Learn more&quot;, inline text links, tertiary options.
 * PLATFORM: Global
 * VARIANTS: Size, State (default/hover/pressed/disabled), color.
 * INSTEAD-OF: Use gOutlineButton when more emphasis is needed.
 */
export const gTextButton = (p: Omit<ComponentProps<typeof GSolidButton>, 'variant'>) => <GSolidButton variant="text" {...p} />;

/**
 * USE: action-chip, quick-action, shortcut-chip
 * WHEN: Triggering quick actions inline — &quot;Add to watchlist&quot;, &quot;Share&quot;, &quot;Compare&quot;. Actions, not selections.
 * PLATFORM: Global
 * INSTEAD-OF: Use gChoiceChip for selection/filtering, gTextButton for text-only actions.
 */
export const gActionChip = (p: Omit<ComponentProps<typeof GChoiceChip>, 'variant'>) => <GChoiceChip variant="action" {...p} />;
/**
 * USE: mobile-choice-chip, mobile-filter-chip, mobile-selection-chip
 * WHEN: Mobile-specific choice chip with touch-optimized sizing.
 * PLATFORM: Mobile
 * VARIANTS: State (default/selected/disabled), with/without icon.
 * INSTEAD-OF: Use gChoiceChip for the global/shared variant.
 */
export const mChoiceChip = (p: ComponentProps<typeof GChoiceChip>) => <GChoiceChip {...p} />;

/**
 * USE: pill-tab-bar, segmented-control, pill-tabs, tab-switcher
 * WHEN: Switching between 2–5 content views within the same screen — &quot;Overview/Details&quot;, &quot;Day/Week/Month&quot;.
 * PLATFORM: Global
 * VARIANTS: Tab count (2/3/4/5+), Size (32/36px), bordered/borderless.
 * INSTEAD-OF: Use gLineTabGroup for underline-style tabs, mBottomNav for app-level navigation.
 */
export const gPillTabGroup = (p: ComponentProps<typeof GLineTabGroup>) => <GLineTabGroup {...p} />;

/**
 * USE: web-list-item, web-list-row, web-settings-row
 * WHEN: Standard list items on web — settings, menus, detail rows. Web equivalent of mList.
 * PLATFORM: Web
 * VARIANTS: Leading (icon/avatar/none), trailing (text/icon/switch/chevron), with/without subtitle.
 * INSTEAD-OF: Use mList for mobile, wScripList for stock-specific web lists.
 */
export const wList = (p: ComponentProps<typeof MList>) => <MList {...p} />;
/**
 * USE: universal-list-item, generic-list-row, adaptive-list
 * WHEN: Generic list item that adapts to multiple content patterns — text, icons, and metadata in a single flexible row.
 * PLATFORM: Mobile
 * VARIANTS: Configurable leading/trailing content slots.
 */
export const mListUniversal = (p: ComponentProps<typeof MListItem>) => <MListItem {...p} />;
/**
 * USE: web-universal-list, web-adaptive-list, web-generic-row
 * WHEN: Flexible web list item that adapts to multiple content patterns. Web equivalent of mListUniversal.
 * PLATFORM: Web
 * VARIANTS: Configurable leading/trailing content slots.
 */
export const wListUniversal = (p: ComponentProps<typeof MListItem>) => <MListItem {...p} />;

/**
 * USE: section-accordion, large-accordion, section-header-collapse
 * WHEN: Section-level accordion for grouping and structuring primary content areas. Use for major content sections that can be expanded/collapsed.
 * PLATFORM: Mobile
 * VARIANTS: State (collapsed/expanded).
 * INSTEAD-OF: Use mAccordionSmall for body-level content like FAQs.
 */
export const mAccordionBig = (p: Omit<ComponentProps<typeof MAccordionSmall>, 'size'>) => <MAccordionSmall size="big" {...p} />;
/**
 * USE: section-accordion-container, accordion-with-card, contained-accordion
 * WHEN: Section-level accordion within a card/container with visual boundary. Groups primary content with a contained look.
 * PLATFORM: Mobile
 * VARIANTS: State (collapsed/expanded).
 * INSTEAD-OF: Use mAccordionBig for borderless section accordions, mAccordionContainerSmall for body-level contained accordions.
 */
export const mAccordionContainerBig = (p: Omit<ComponentProps<typeof MAccordionContainerSmall>, 'size'>) => <MAccordionContainerSmall size="big" {...p} />;

/**
 * USE: screener-card, filter-result-card, stock-screener
 * WHEN: Displaying stock screener results or pre-built screening criteria as selectable cards.
 * PLATFORM: Mobile
 */
export const mScreenerCard = (p: Omit<ComponentProps<typeof MBasketCard>, 'variant'>) => <MBasketCard variant="screener" {...p} />;
/**
 * USE: redirection-card, promo-card, discovery-card, deep-link-card
 * WHEN: Promotional or discovery cards that redirect to a feature or external page. Cards with a clear CTA destination.
 * PLATFORM: Mobile
 */
export const mRedirectionCard = (p: Omit<ComponentProps<typeof MBasketCard>, 'variant'>) => <MBasketCard variant="redirection" {...p} />;

/**
 * USE: company-avatar, company-logo, entity-icon, brand-circle
 * WHEN: Displaying company or institutional identity — company logos in stock lists, fund houses, broker logos.
 * PLATFORM: Global
 * INSTEAD-OF: Use gAvatarProfile for user/person avatars.
 */
export const gAvatarCompany = (p: Omit<ComponentProps<typeof GAvatarProfile>, 'shape'>) => <GAvatarProfile shape="square" {...p} />;

/**
 * USE: subtle-tooltip, light-tooltip, secondary-tooltip
 * WHEN: Tooltip that needs minimal visual disruption — less prominent than gTooltip.
 * PLATFORM: Global
 * VARIANTS: Position variants.
 * INSTEAD-OF: Use gTooltip for standard emphasis tooltips.
 */
export const gLowEmphasisTooltip = (p: Omit<ComponentProps<typeof GTooltip>, 'emphasis'>) => <GTooltip emphasis="low" {...p} />;

// Platform pairs — one implementation serves both mobile and web.
/**
 * USE: web-banner, web-announcement, web-alert-bar
 * WHEN: Page-level announcements and alerts on web — market status, maintenance notices, promotions.
 * PLATFORM: Web
 * VARIANTS: Type (info/warning), with/without dismiss.
 * INSTEAD-OF: Use wToast for temporary feedback messages.
 */
export const wBanner = (p: ComponentProps<typeof MTopBanner>) => <MTopBanner {...p} />;
/**
 * USE: web-toast, web-snackbar, web-notification-toast
 * WHEN: Temporary feedback messages on web — same patterns as mToast but sized for web layouts.
 * PLATFORM: Web
 * VARIANTS: Type (success/error/warning/info/neutral), with/without action button.
 * INSTEAD-OF: Use mToast for mobile, wBanner for persistent page-level messages.
 */
export const wToast = (p: ComponentProps<typeof MToast>) => <MToast {...p} />;
/**
 * USE: web-carousel, web-slider, web-card-carousel
 * WHEN: Horizontally scrollable content carousel on web — with arrow navigation controls.
 * PLATFORM: Web
 * VARIANTS: With/without arrow buttons, dot indicators.
 * INSTEAD-OF: Use mCarousel for mobile.
 */
export const wCarousel = (p: ComponentProps<typeof MCarousel>) => <MCarousel {...p} />;
/**
 * USE: web-stock-list, web-watchlist-row, web-scrip-row
 * WHEN: Displaying stocks in web table/list format with extended data columns — price, change, volume, market cap.
 * PLATFORM: Web
 * VARIANTS: Column configurations, with/without hover actions, expanded/compact density.
 * INSTEAD-OF: Use mScripList for mobile, wList for non-stock web lists.
 */
export const wScripList = (p: ComponentProps<typeof MScripList>) => <MScripList {...p} />;
/**
 * USE: web-index-strip, web-market-ticker, web-index-bar
 * WHEN: Horizontal ticker strip showing market indices on web — typically below the top navigation.
 * PLATFORM: Web
 * VARIANTS: Index count, expanded/compact display.
 * INSTEAD-OF: Use mIndexStrip for mobile.
 */
export const wIndexStrip = (p: ComponentProps<typeof MIndexStrip>) => <MIndexStrip {...p} />;
/**
 * USE: web-market-depth, web-order-book, web-bid-ask
 * WHEN: Full market depth (order book) visualization on web — bid/ask levels with quantities and prices.
 * PLATFORM: Web
 * INSTEAD-OF: Use mMarketDepth for mobile.
 */
export const wMarketDepth = (p: ComponentProps<typeof MMarketDepth>) => <MMarketDepth {...p} />;
/**
 * USE: web-order-detail, web-trade-confirmation, web-order-summary
 * WHEN: Full order details on web — same content as mOrderDetails in web layout.
 * PLATFORM: Web
 * INSTEAD-OF: Use mOrderDetails for mobile.
 */
export const wOrderDetails = (p: ComponentProps<typeof MOrderDetails>) => <MOrderDetails {...p} />;
/**
 * USE: web-research-card, web-idea-card, web-analyst-recommendation
 * WHEN: Research ideas and analyst recommendations on web — same content as mResearchIdeas in web layout.
 * PLATFORM: Web
 * INSTEAD-OF: Use mResearchIdeas for mobile.
 */
export const wResearchIdeas = (p: ComponentProps<typeof MResearchIdeas>) => <MResearchIdeas {...p} />;

/**
 * USE: x-axis-labels, time-axis, horizontal-axis
 * WHEN: Horizontal axis labels for charts — dates, time periods, categories.
 * PLATFORM: Mobile
 */
export const MXAxis = (p: Omit<ComponentProps<typeof AxisLabels>, 'orientation'>) => <AxisLabels orientation="horizontal" {...p} />;
/**
 * USE: y-axis-labels, value-axis, vertical-axis
 * WHEN: Vertical axis labels for charts — price values, quantities, percentages.
 * PLATFORM: Global
 */
export const GYAxis = (p: Omit<ComponentProps<typeof AxisLabels>, 'orientation'>) => <AxisLabels orientation="vertical" {...p} />;
