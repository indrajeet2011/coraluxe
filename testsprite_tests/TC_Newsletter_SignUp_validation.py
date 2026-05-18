import asyncio
import os
from playwright.async_api import async_playwright, expect

async def run_test():
    pw = None
    browser = None
    context = None
    page = None

    try:
        # Ensure the videos directory exists with an absolute path
        script_dir = os.path.dirname(os.path.abspath(__file__))
        video_dir = os.path.join(script_dir, "videos")
        os.makedirs(video_dir, exist_ok=True)

        pw = await async_playwright().start()
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )
        context = await browser.new_context(
            record_video_dir=video_dir,
            record_video_size={"width": 1280, "height": 720},
        )
        context.set_default_timeout(15000)
        page = await context.new_page()

        base_url = os.getenv("BASE_URL", "https://coraluxe-seven.vercel.app/")
        await page.goto(base_url, wait_until="domcontentloaded", timeout=45000)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass

        signup_btn = page.locator("button:has-text('SignUp')").first
        await signup_btn.scroll_into_view_if_needed()
        await signup_btn.wait_for(state="visible", timeout=10000)
        await signup_btn.click()

        email_input = page.locator("form:has(button:has-text('SignUp')) input[type='email']").first
        validation_message = await email_input.evaluate("el => el.validationMessage")
        assert validation_message and len(validation_message) > 0, \
            f"Expected validation message, got: '{validation_message}'"

        await asyncio.sleep(3)

        # Close page first
        await page.close()

    finally:
        # Close context first to finalize video recording
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

    # Video is now saved after context.close()
    if page and page.video:
        video_path = await page.video.path()
        print(f"Video saved to: {video_path}")

asyncio.run(run_test())
