document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my portfolio!');

    // Give a brief "Copied!" confirmation when the email or phone is tapped/clicked,
    // which is handy on mobile where a mail/dial app may not open immediately.
    const contactButtons = document.querySelectorAll('.contact-btn');

    contactButtons.forEach((btn) => {
        const isCopyable = btn.href.startsWith('mailto:') || btn.href.startsWith('tel:');
        if (!isCopyable) return;

        btn.addEventListener('click', async () => {
            const value = btn.href.startsWith('mailto:')
                ? btn.href.replace('mailto:', '')
                : btn.href.replace('tel:', '');

            if (!navigator.clipboard) return;

            try {
                await navigator.clipboard.writeText(value);
                const label = btn.querySelector('span:last-child');
                const original = label.textContent;
                label.textContent = 'Copied!';
                setTimeout(() => {
                    label.textContent = original;
                }, 1200);
            } catch (err) {
                // Clipboard access can fail (e.g. no permission); fail silently
                // and let the tel:/mailto: link behave normally.
            }
        });
    });
});
