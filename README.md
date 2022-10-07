
# Instagram Photo Scraper

## Using puppeteer to automate the process

Fully automatic script programmed in nodeJS and puppeteer

You just have to pass the necessary parameters and let it work, it will download all the public photos of a profile


<details><summary>## Step by Step</summary>
<p>
    
    1. Clone this repo
    
    ```bash
    https://github.com/NeftaliCruzSosa/Instagram-Scraper.git
    ```

    2. Install node dependencies
    
    ```bash
    npm i
    ```
    
    3. Configure -- Follow instructions
    
    4. Run -- Follow instructions

</p>
</details>
    
## How to configure

Open the configuration file config.json, you can use any text editor

**DO NOT DELETE ANYTHING**

Every parameter must be inside " "

*user :* add your username, email or phone number with which you log in on instagram

*pass :* add your password, this will only be seen by you

*profile :* Name of the profile you want to scrape, without @


## How to run

Assuming that in File Explorer you have opened the target directory/folder, do this:

    1. Click on address bar, alternatively press Alt+D

    2. Now when address bar is highlighted, type cmd in the bar.

    3. Press Enter key

You will notice that command prompt from that folder, then write

```bash
  node scrape.js
```

## Where are the pictures?

If everything worked as expected, you will have all the pictures in a folder called images in the same folder you started the script

## To-Do list

- [ ] Deploy server and client to allow using it from a web (locally)
- [ ] Add options like, download all images, only (n) images, download stories, etc.
