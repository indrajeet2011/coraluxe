import asyncio
import re
import os
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    page = None

    try:
        try:
            script_dir = os.path.dirname(os.path.abspath(__file__))
        except NameError:
            script_dir = os.path.abspath(os.getcwd())
        video_dir = os.path.join(script_dir, "videos")
        os.makedirs(video_dir, exist_ok=True)

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

        # Step 1: Click Contact nav link
        elem = page.locator("nav").get_by_role("link", name="Contact", exact=True).first
        await elem.wait_for(state="visible", timeout=10000)
        await elem.click()

        # Step 2: Fill Mobile, Subject, Message (leave Name and Email empty)
        elem = page.locator("#contact #mobile")
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("+1234567890")

        elem = page.locator("#contact #subject")
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("Test Subject")

        elem = page.locator("#contact #message")
        await elem.wait_for(state="visible", timeout=10000)
        await elem.fill("This is a test message.")

        # Step 3: Click Send Message — validation should fire
        elem = page.locator("#contact form").get_by_role("button", name="Send Message", exact=True)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.click()

        # Step 4: Verify validation messages appear on Name and Email
        name_input = page.locator("#contact #name")
        email_input = page.locator("#contact #email")
        name_validation_message = await name_input.evaluate("el => el.validationMessage")
        email_validation_message = await email_input.evaluate("el => el.validationMessage")
        assert name_validation_message and len(name_validation_message) > 0, "Expected required validation message for Name"
        assert email_validation_message and len(email_validation_message) > 0, "Expected required validation message for Email"

        # Step 5: Correct the fields — fill Name and Email
        await name_input.fill("John Doe")
        await email_input.fill("john@example.com")

        # Step 6: Resubmit — now all fields are valid
        elem = page.locator("#contact form").get_by_role("button", name="Send Message", exact=True)
        await elem.click()

        # Step 7: Verify success message is displayed
        await asyncio.sleep(1)
        success_msg = page.locator("#success-message")
        await success_msg.wait_for(state="visible", timeout=5000)

        await page.close()

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

    if page and page.video:
        video_path = await page.video.path()
        print(f"Video saved to: {video_path}")

asyncio.run(run_test())
