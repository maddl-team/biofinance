/**
 * Webhook Mapping Utility
 * Maps page paths to specific Make.com Webhook IDs.
 */

export const getWebhookUrl = (urlOrPath: string): string | null => {
    // Normalized mapping: path -> webhook ID
    const mapping: Record<string, string> = {
        '/': 'jwfhhcn1sx5dqxnxc3zfsune5j9yvq0u',
        '/calcolo-cessione-del-quinto': 'ckhp33sk9vujbr05hv9kujc9cjvvdc1e',
        '/anticipo-tfs': 'eguloi4lw7bozx7n0qyhl95i4u6exl5e',
        '/enti-locali-sanita': '4ow8cstj8xiw5hlpxem3xhkpkztj3kf1',
        '/prestiti-municipalizzate': 'xcy4rb9e353luvqdaua8qb8msfofdpqe',
        '/soluzioni-liquidita': '3kakemprulqtgpcxzwnm982iam4mf5c2',
        '/delegazione-di-pagamento': 'bjb6hl2wj2lpx3wi3o8jhlctkis3sg7a',
        '/consolidamento-debiti': '39rt88ixqxvfl62z48m1zzgzpxrswboh',
        '/prestiti-segnalati-crif': 'fky82b9ranhkw4rtqao2m5492efdbns0',
        '/contatti': 'qv1i39kndq0bykp4wn8mc7vamsneslcm',
        '/lavora-con-noi': '4otccm30um2lkmm4rjtuqchb8xv8apyl',
    };

    try {
        // Extract pathname whether it's an absolute URL or a relative path
        let pathname = urlOrPath;
        if (urlOrPath.startsWith('http')) {
            pathname = new URL(urlOrPath).pathname;
        }

        // Skip query params and normalize trailing slash
        const cleanPath = pathname.split('?')[0];
        const normalizedPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');

        // Ensure it starts with / for lookup
        const lookupKey = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;

        const hookId = mapping[lookupKey];
        return hookId ? `https://hook.eu1.make.com/${hookId}` : null;
    } catch (e) {
        return null;
    }
};

/**
 * Extracts UTM parameters from the current URL.
 */
const getUtmParameters = () => {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    utmKeys.forEach(key => {
        const value = params.get(key);
        if (value) utms[key] = value;
    });

    return utms;
};

/**
 * Sends form data to the mapped webhook.
 * Non-blocking, silent on error, ensures delivery with keepalive.
 */
export const sendToWebhook = async (formName: string, fields: any) => {
    try {
        if (typeof window === 'undefined') return;

        const pathname = window.location.pathname;
        const webhookUrl = getWebhookUrl(pathname);

        if (!webhookUrl) {
            if (process.env.NODE_ENV === 'development') {
                console.warn(`[Webhook] No mapping found for path: ${pathname}`);
            }
            return;
        }

        const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

        const payload = {
            submission_id: submissionId,
            page_url: window.location.href,
            referrer: document.referrer || '',
            form_name: formName || 'Unnamed Form',
            submitted_at: new Date().toISOString(),
            user_agent: navigator.userAgent,
            utm: getUtmParameters(),
            fields: fields
        };

        /**
         * Using fetch with keepalive: true ensures the request is not cancelled
         * even if the page unloads or redirects immediately after submission.
         */
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true
        });

    } catch (error) {
        // Silent error logging
        if (process.env.NODE_ENV === 'development') {
            console.error('[Webhook] Submission failed:', error);
        }
    }
};
