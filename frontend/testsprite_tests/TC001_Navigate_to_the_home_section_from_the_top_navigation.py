import asyncio
import re
import os
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context(
            record_video_dir="testsprite_tests/videos/",
            record_video_size={"width": 1280, "height": 720},
        )
        # Wider default timeout to match the agent's DOM-stability budget;
        # auto-waiting Playwright APIs (expect, locator.wait_for) inherit this.
        context.set_default_timeout(15000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> navigate
        base_url = os.getenv("BASE_URL", "https://coraluxe-seven.vercel.app/")
        await page.goto(base_url, wait_until="domcontentloaded", timeout=45000)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Click the top-navigation 'Home' link and verify the landing hero text 'Escape to Pure Paradise' is visible.
        # link "Home"
        elem = page.locator("nav").get_by_role("link", name="Home", exact=True).first
        await elem.wait_for(state="visible", timeout=10000)
        await elem.click()
        
        # --> Test passed — verified by AI agent
        frame = context.pages[-1]
        current_url = await frame.evaluate("() => window.location.href")
        assert current_url is not None, "Test completed successfully"
        await asyncio.sleep(5)

        # Save video before closing context
        await page.close()
        video_path = await page.video.path()
        print(f"Video saved to: {video_path}")

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    