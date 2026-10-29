# Persistent optional support reminder — version 36

A compact navy/gold/cream bar stays fixed at the bottom of every app screen,
including nested views, plus the standalone disclaimer and full-size poster.
It uses the existing one-time Stripe support URL and opens in a new tab. It
states that support is optional and the beta stays free. The original Home
support explanation remains available.

The bar reserves bottom space so final controls and footer content can scroll
above it. It respects phone safe-area insets, aligns beside the desktop sidebar,
uses a 44px minimum touch target and visible keyboard focus, and is hidden when
printing. No payments, accounts, member records or authentication settings are
changed. This is an invitation to the existing payment page, not a transaction.

Validation: all 113 existing tests pass. Browser layout checks confirm the bar
is fixed and visible during scrolling, desktop content starts beside the 244px
sidebar, and a 375px phone frame has no horizontal overflow, a 44px link target,
and a roughly 82px bar with 112px reserved page-bottom space. The existing Home
card and payment link are preserved. No transaction was performed.
