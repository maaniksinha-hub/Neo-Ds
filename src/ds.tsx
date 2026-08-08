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

/** Secondary action, outlined. Figma: gOutlineButton */
export const gOutlineButton = (p: Omit<ComponentProps<typeof GSolidButton>, 'variant'>) => <GSolidButton variant="outline" {...p} />;
/** Lowest-emphasis action. Figma: gTextButton */
export const gTextButton = (p: Omit<ComponentProps<typeof GSolidButton>, 'variant'>) => <GSolidButton variant="text" {...p} />;

/** Quick-action pill. Figma: gActionChip */
export const gActionChip = (p: Omit<ComponentProps<typeof GChoiceChip>, 'variant'>) => <GChoiceChip variant="action" {...p} />;
/** Mobile choice chip. Figma: mChoiceChip */
export const mChoiceChip = (p: ComponentProps<typeof GChoiceChip>) => <GChoiceChip {...p} />;

/** Pill-style tab group. Figma: gPillTabGroup */
export const gPillTabGroup = (p: ComponentProps<typeof GLineTabGroup>) => <GLineTabGroup {...p} />;

/** Web list container. Figma: wList */
export const wList = (p: ComponentProps<typeof MList>) => <MList {...p} />;
/** Flexible mobile list row. Figma: mListUniversal */
export const mListUniversal = (p: ComponentProps<typeof MListItem>) => <MListItem {...p} />;
/** Flexible web list row. Figma: wListUniversal */
export const wListUniversal = (p: ComponentProps<typeof MListItem>) => <MListItem {...p} />;

/** Section-level accordion. Figma: mAccordionBig */
export const mAccordionBig = (p: Omit<ComponentProps<typeof MAccordionSmall>, 'size'>) => <MAccordionSmall size="big" {...p} />;
/** Section-level accordion container. Figma: mAccordionContainerBig */
export const mAccordionContainerBig = (p: Omit<ComponentProps<typeof MAccordionContainerSmall>, 'size'>) => <MAccordionContainerSmall size="big" {...p} />;

/** Screener result card. Figma: mScreenerCard */
export const mScreenerCard = (p: Omit<ComponentProps<typeof MBasketCard>, 'variant'>) => <MBasketCard variant="screener" {...p} />;
/** Promo / deep-link card. Figma: mRedirectionCard */
export const mRedirectionCard = (p: Omit<ComponentProps<typeof MBasketCard>, 'variant'>) => <MBasketCard variant="redirection" {...p} />;

/** Company avatar. Figma: gAvatarCompany */
export const gAvatarCompany = (p: Omit<ComponentProps<typeof GAvatarProfile>, 'shape'>) => <GAvatarProfile shape="square" {...p} />;

/** Subtle tooltip. Figma: gLowEmphasisTooltip */
export const gLowEmphasisTooltip = (p: Omit<ComponentProps<typeof GTooltip>, 'emphasis'>) => <GTooltip emphasis="low" {...p} />;

// Platform pairs — one implementation serves both mobile and web.
/** Web page-level banner. Figma: wBanner */
export const wBanner = (p: ComponentProps<typeof MTopBanner>) => <MTopBanner {...p} />;
/** Web toast. Figma: wToast */
export const wToast = (p: ComponentProps<typeof MToast>) => <MToast {...p} />;
/** Web carousel. Figma: wCarousel */
export const wCarousel = (p: ComponentProps<typeof MCarousel>) => <MCarousel {...p} />;
/** Web instrument row. Figma: wScripList */
export const wScripList = (p: ComponentProps<typeof MScripList>) => <MScripList {...p} />;
/** Web index ticker. Figma: wIndexStrip */
export const wIndexStrip = (p: ComponentProps<typeof MIndexStrip>) => <MIndexStrip {...p} />;
/** Web market depth. Figma: wMarketDepth */
export const wMarketDepth = (p: ComponentProps<typeof MMarketDepth>) => <MMarketDepth {...p} />;
/** Web order details. Figma: wOrderDetails */
export const wOrderDetails = (p: ComponentProps<typeof MOrderDetails>) => <MOrderDetails {...p} />;
/** Web research ideas. Figma: wResearchIdeas */
export const wResearchIdeas = (p: ComponentProps<typeof MResearchIdeas>) => <MResearchIdeas {...p} />;
