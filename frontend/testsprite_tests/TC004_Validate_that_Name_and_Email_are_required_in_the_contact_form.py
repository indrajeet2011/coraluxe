import asyncio
from playwright.async_api import async_api, expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        pw = await async_api.async_playwright().start()
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )
        context = await browser.new_context()
        context.set_default_timeout(15000)
        page = await context.new_page()

        await page.goto("http://localhost:3000")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass

        # Fill Mobile, Subject, and Message using CSS selectors
        mobile_input = page.locator("#mobile").first
        await mobile_input.wait_for(state="visible", timeout=10000)
        await mobile_input.fill("+1234567890")

        subject_input = page.locator("#subject").first
        await subject_input.wait_for(state="visible", timeout=10000)
        await subject_input.fill("Inquiry about availability")

        message_input = page.locator("#message").first
        await message_input.wait_for(state="visible", timeout=10000)
        await message_input.fill("Hello, please let me know available dates and rates. Thank you.")

        # Click Send Message, triggering validation on required Name and Email
        send_btn = page.locator("button:has-text('Send Message')").first
        await send_btn.wait_for(state="visible", timeout=10000)
        await send_btn.click()

        # Verify validation was triggered on Name or Email
        name_input = page.locator("#name").first
        email_input = page.locator("#email").first
        name_valid = await name_input.evaluate("el => el.validationMessage")
        email_valid = await email_input.evaluate("el => el.validationMessage")
        assert name_valid or email_valid, "Expected validation on Name or Email"

        # Test newsletter SignUp validation
        signup_btn = page.locator("button:has-text('SignUp')").first
        await signup_btn.wait_for(state="visible", timeout=10000)
        await signup_btn.click()

        await asyncio.sleep(3)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
