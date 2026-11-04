# Local instructor review — no deployment

Use development commit containing this guide on your MacBook. These commands assume Git and Python 3 are already installed. They start a mock server, not GitHub Pages or a Supabase connection.

1. Open Terminal in your existing repository. Run `git branch --show-current`; it must say `development`. If another branch or unsaved work appears, stop rather than overwriting it. Obtain the latest development checkpoint using your normal GitHub workflow; never merge main for this review.
2. Run `python3 tools/prepare-mock-preview.py`.
3. For MacBook-only review run `python3 -m http.server 4173 --bind 127.0.0.1 --directory ../cdl-mock-preview/dist`.
4. Open http://localhost:4173/review-start.html in Safari or Chrome. Start with the guide, then the app. Choose **Enter as Synthetic Driver**, then Training → Safety & Resources. No password or actual registration is needed. All account actions are simulated; no email is sent.
5. Print the inspection worksheet to preserve findings. Reloading clears worksheet and synthetic session data. Send findings separately; the worksheet does not submit them or grant acceptance.

## iPhone on the same trusted home Wi-Fi

The cloud preview's terminal.local URL is not a public URL and may not open on your devices. To use your own MacBook as the preview server, stop the loopback server with Control-C, then run:

`python3 -m http.server 4173 --bind 0.0.0.0 --directory ../cdl-mock-preview/dist`

Find your Mac's local IPv4 address in System Settings → Wi-Fi → Details → TCP/IP. On your iPhone, connect to the same trusted Wi-Fi, then enter `http://MAC_LOCAL_IP:4173/review-start.html`, replacing MAC_LOCAL_IP with that address. Keep the Mac awake. If macOS asks about incoming connections, permit only your trusted private network. No router port forwarding, public tunnel, production domain, account or hosting service is needed. If Wi-Fi client isolation blocks access, use MacBook-only review until a trusted local network is available.

The server shares the generated preview folder with devices on that network, so serve only the generated synthetic folder, never your home directory or repository. Do not use public Wi-Fi or expose this port to the Internet. Stop with Control-C when finished. HTTP on local Wi-Fi is suitable only for these mocks: never enter a real password or member information. PWA installation, service-worker and secure-context behavior may differ over local HTTP; do not count this as connected Auth/PWA validation.

## Device review checklist

Mac Safari/Chrome and iPhone Safari: open both chain comparisons, read all labels at portrait width and enlarged text, use both model selectors, try wrong answers, test retry/reset, curve left/right/banking, pause/motion, registration guidance and state warnings. On Mac, use Tab/Shift-Tab/Enter/Space and VoiceOver; on iPhone use VoiceOver and pinch zoom. Record device, browser/version, viewport, result and issue. These manual checks remain pending until actually performed.
