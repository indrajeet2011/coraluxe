import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

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

        # Click the newsletter SignUp button without entering an email
        # to trigger the validation prompt for the required email field.
        signup_btn = page.locator("button:has-text('SignUp')").first
        await signup_btn.wait_for(state="visible", timeout=10000)
        await signup_btn.click()

        # Verify that the email input shows a validation message
        email_input = page.locator("form:has(button:has-text('SignUp')) input[type='email']").first
        validation_message = await email_input.evaluate("el => el.validationMessage")
        assert validation_message and len(validation_message) > 0, \
            f"Expected validation message, got: '{validation_message}'"

        await asyncio.sleep(3)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
