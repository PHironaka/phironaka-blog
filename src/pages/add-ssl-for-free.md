---
title: Adding SSL for...Free.
date: 2017-09-02 17:50:00 Z
---

It's 2017, and if you're serving your website over HTTP, well then I don't know what to tell you. Seriously though, it's time to upgrade.
Google has already made it known that sites using HTTPS will increase their search ranking, so needless to say it should be part of every dev's launch to dos.

Lucky for us, it's pretty straight forward. I have gone ahead and listed out all the steps required for SSL certificates using Cloudflare & Github pages, enjoy!

### Cloudflare / Github Pages setup

1. Assuming you have your application properly configured and ready for deployment, let's jump right into Cloudflare. Click 'Add Site' in the top right hand corner.
2. Navigate to the tab labeled 'Crypto' on the top of the page, make sure your SSL is set to Flexible.
3. Then click on the 'Page Rules' tab. Select the 'Create Page Rules' button, and make sure to Always Use HTTPS. 
