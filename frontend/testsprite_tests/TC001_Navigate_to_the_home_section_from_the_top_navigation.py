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

        # Click the 'Home' navigation link using semantic selector
        home_link = page.locator('nav a:has-text("Home")').first
        await home_link.wait_for(state="visible", timeout=10000)
        await home_link.click()
        await expect(page.locator("nav")).toBeVisible()

        # Click the newsletter SignUp button to verify it exists
        signup_btn = page.locator("button:has-text('SignUp')").first
        await signup_btn.wait_for(state="visible", timeout=10000)
        await signup_btn.click()

        # Verify navigation still works after interaction
        home_link = page.locator('nav a:has-text("Home")').first
        await home_link.wait_for(state="visible", timeout=10000)
        await home_link.click()

        await asyncio.sleep(3)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
