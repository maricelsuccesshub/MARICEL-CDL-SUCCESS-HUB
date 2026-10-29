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

## Stripe and Venmo choices — version 37

The owner explicitly approved publishing the Venmo QR code and handle
@CezlesPhotography on the Hub, replacing the unpublished Zelle option and
keeping Stripe. All support entry points open support.html in a separate tab.
The original Stripe payment link is preserved there beside Venmo.

The Venmo QR was decoded from the owner-supplied IMG_0174.png screenshot,
generated as a precise native SVG barcode without the surrounding phone screen
or photo, and the payload verified byte-for-byte through a decode roundtrip.
The original QR's exact Venmo URL is used for the Open Venmo link. No personal
full-name or email label appears on the Hub. The visible owner label is Coach
Maricel with the approved Venmo handle. Venmo may show the profile name and photo.

The payment account type is not established by the screenshot. No business fee
rate, fee-free collection or no-fee personal transfer workaround is promised.
The page asks members to review the recipient, payment type and any fees inside
Venmo. The Hub neither initiates a payment nor confirms receipt. No Zelle code,
Zelle recipient link or original screenshot is included in this publication.

Validation: 113 existing tests pass. Barcode payload roundtrip passes. Desktop
and phone layout checks cover QR loading, both provider links, no horizontal
overflow and the persistent reminder. A real Venmo payment has not been tested
by the agent.

## Updated Venmo identity — version 38

The owner renamed the existing Venmo account to @maricelcdlsuccesshub with
display name Maricel CDL SuccessHub and supplied a new QR screenshot. The decoded
new QR references the same numeric Venmo account ID as version 37. Updated the
visible handle, profile-name guidance, alt text, exact QR link and SVG barcode.
The SVG uses a new cache query. Its payload decode roundtrip is byte-identical
to the new supplied code. Stripe remains available. No payment was sent.

## Support-page layout — version 39

The opening message now spans the same full content width as the payment
options instead of a character-based max-width. Payment cards align at the top
and keep their natural height. The shared free-beta note sits below both cards
at full width. Payment text, destinations, handle and QR payload are unchanged.

Browser checks confirm message and payment-grid widths match (980px desktop,
328px phone content), cards use natural heights, the shared note is outside
the cards, and the phone layout has no horizontal overflow.
