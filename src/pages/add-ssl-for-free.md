---
title: Adding SSL for...Free.
date: "2017-09-02"
---

It's 2017, and if you're serving your website over HTTP, well then I don't know what to tell you. Seriously though, it's time to upgrade.
Google has already made it known that sites using HTTPS will increase their search ranking, so needless to say it should be part of every dev's launch to dos.

Lucky for us, it's pretty straight forward. I have gone ahead and listed out all the steps required for SSL certificates using Cloudflare & Github pages, enjoy!

### Cloudflare / Github Pages setup

1. Assuming you have your application properly configured and ready for deployment, let's jump right into Cloudflare. Click 'Add Site' in the top right hand corner.
2. Once Cloudflare performs a standard background check on your domain, they will ask you to add two custom Nameservers to your Domain settings. Once you add replace the default settings with the Cloudflare settings, you will no longer be able to access the DNS within your Domain host. You will be able to access and configure your DNS within Cloudflare.
![Nameserver](../nameserver.png)
3. Create two A records. They can each be named the root domain. Since we're setting up A records, make sure you point them at the two IP addresses Github provides [here](https://help.github.com/articles/setting-up-an-apex-domain/).
4. Navigate to the tab labeled 'Crypto' on the top of the page, make sure your SSL is set to Flexible. At this point, you should receive a confirmation email from Cloudflare notifying you your SSL has been created!
![Crypto](../crypto.jpg)
5. Then click on the 'Page Rules' tab. Select the 'Create Page Rules' button, and make sure to Always Use HTTPS.
And that's it. Just follow those five steps and you should be golden.
