# Getting Started Guide

All procedures are the same for Windows, Linux, or Mac OS. Raspberry Pi terminal commands have been included for ease of use.

> **IMPORTANT:** Remote installations and minimalist hardware —both virtual and physical— are better suited for production deployments, where the use of the GUI is minimal. We highly recommend learning Superalgos in a local installation. Mastering the system takes time, and the use of the GUI to go through in-app tutorials is crucial during the learning process. Your experience will be orders of magnitude better if you follow this advice: leave remote installations and minimalist hardware for when you are ready to start trading live.



# Pre-Requisites

## 1. Node JS Installation

If you don't have it yet, download and install Node.js.

Node JS is an open-source server environment required to run Superalgos.

**A.** Go to the Node JS [download page](https://nodejs.org/en/download/).

**B.** Download your system's installer. Select *LTS Recommended for Most Users* and click the big Windows or macOS Installer button. If you are on Linux, the installer is listed further down the page.

**C.** Run the installer with the default configuration — just click Next until Node.JS is fully installed. That's it! You can continue with step 2 (Git Installation).

<hr>

**NODE JS INSTALLATION FOR RASPBERRY PI USERS**

You may install Node.JS just like you would on any other machine as per the above instructions. As an alternative, you may also try the following from the SSH Terminal.

**NOTE:** It is best to use the most current and updated version of the FULL PiOS image.

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```
Followed by:
```
sudo apt-get install -y nodejs
```
It is also required to install the Node Package Manager for dependancy management.
```
sudo apt install npm
```
You may also type the following to verify Node.js and NPM installation and version.
```
node -v
```
```
npm -v 
```

<hr>

## 2. Git Installation

Download and install Git.

Git is an open-source distributed version control system required to download and stay up to date with Superalgos.

**A.** Go to the Git [download page](https://git-scm.com/downloads).

**B.** Download the version for your Operating System.

**C.** Run the installer with the default configuration — just click Next until Git is fully installed.

**IMPORTANT:** The latest version of Git is required to handle the authentication with GitHub.com.

**NOTE FOR MAC USERS:** Depending on your setup, installing Git may be optional. The native XCode Command Line Developer Tools seems to work well. If you do install Git, we have tested Tim Harper's binary installer successfully.

<hr>

**GIT INSTALLATION FOR RASPBERRY PI USERS**

Just like with Node.JS, you may follow the above instructions to install Git, or use the SSH Terminal command. The most recent version of PiOS has Git already installed, so this may give you an error. The error will not affect your installation.
```
sudo apt-get install git
```

<hr>

## 3. Google Chrome or Safari

Use Chrome, or Safari on Mac. These are the only tested browsers.

**A.** Go to the Chrome [download page](https://www.google.com/chrome/).

**B.** Run the installer.

Before you begin, it is recommended that you set up Chrome/Safari as your default browser.

**IMPORTANT:** Use Chrome/Safari so that you have a similar environment as the dev team in case you need help. We are not testing on any other browsers, and it is a well-known fact that browsers behave differently.

# Superalgos Client Installation

## 1. Fork the Superalgos Repository

**A.** Scroll the page all the way to the top. Find and click the **Fork** button to create your fork/copy of this repository. To fork Superalgos you need a Github account. If you don't have one, go ahead and create it.

**NOTE:** A Fork is required for your contributions to the project. The reason why Superalgos is free and open-source is that the project has set up a <a href="https://superalgos.org/project-one-pager.shtml" target="_blank">Collective Business</a> in which all users may participate. The way to participate is to <a href="https://superalgos.org/community-contribute.shtml" target="_blank">contribute</a> to make Superalgos better. The project's <a href="https://superalgos.org/token-overview.shtml" target="_blank">token</a> is distributed among contributors.

## 2. Clone Your Fork

**A.** Once the fork is created, you will land on the page of your fork. Copy the URL from your browser's address bar.

**B.** In your computer/laptop/server, open a command prompt or terminal. Make sure you are in a directory where you have write permissions (on most systems the terminal will open in your user's home directory, so you're good). Clone the git repository using the command:

```
git clone <URL of your Superalgos fork>
```

For example, if your Github username is John, the command will look like this:

```
git clone https://github.com/John/Superalgos
```

This creates the `Superalgos` folder in the current directory, which contains the whole installation.

## 3. Install Node Dependencies

After the Superalgos directory has been installed, the final step of installation is to set up the necessary node dependencies. In the same command prompt or terminal you just used, type the following:

```
cd Superalgos
```

That should take you inside the Superalgos folder created by the `git clone` command earlier. Now, run the following command:

```
node setup
```

Then wait until you are able to type within the terminal again.

This command will install and configure all additional dependencies needed by Superalgos. It will also install desktop and start menu shortcuts.

**NOTE FOR USERS INSTALLING MULTIPLE INSTANCES OF SUPERALGOS ON THE SAME MACHINE:** In order to avoid name conflicts between shortcuts, make sure to rename each Superalgos directory before running `node setup`.

Congratulations your installation is complete!

> **The Usage section below explains how to run the app.**

<hr>

**DEPENDENCY INSTALLATION FOR RASPBERRY PI USERS**

As noted above, running `node setup` installs GUI shortcuts by default. To suppress this behavior in headless installations, add the `noShortcuts` flag as follows:

```
node setup noShortcuts
```

<hr>

**Troubleshooting Dependency Installation**

If you are having difficulty running the node setup command here are a few common issues that may be getting in the way.

**1.** Check the version of node and npm you have installed. Make sure that you are running an updated version of node greater than version 12 and npm greater than version 5. You can check which version you have by typing `node -v` and `npm -v` into a command prompt or terminal. If your version numbers are below these, you can update your installation by following the instructions outlined in the "Node JS Installation" step above.


**2.** If you are installing Superalgos in an administratively protected directory you will need to do one of the following:

- For Windows start your command prompt as an administrator.

- For Linux and Mac Systems make sure to add the sudo command to node setup.  This will look like `sudo node setup`.


**3.** For Windows it is important that you have C:\Windows\System32 added to your global PATH.  For instructions on how to do this google "add to the path on Windows 10."

<hr>

## 4. Installation Notes

**A.** You need to make a fork so that you may contribute work. Superalgos is a Community project and you are expected to contribute, like everyone else. You don't need to be a technical person to contribute. Fixing a typo in the docs or translating a paragraph into your native language are valuable contributions too. Superalgos has built-in features that make contributing easy. Help make Superalgos better and Superalgos will better serve you! [Free-riding is not cool](https://en.wikipedia.org/wiki/Free-rider_problem), particularly on free, open-source, Community-driven projects.

**B.** The software includes an in-app self-update command / feature. It will help you stay up-to-date with the latest version of the software. Updates are on-demand, so don't worry about undesired updates. The project moves very fast and new features become available regularly, particularly if you choose to run the software in the ```develop``` branch (you may switch branches from within the app).

**C.** It is a good idea to perodically run the `node setup` command to keep the underlying dependencies for your Superalgos installation up to date.

**D.** Before installing the client on a remote computer in an attempt to access the UI from a different machine, we highly recommend you do a standard installation on your PC / laptop first. Leave your Raspberry Pi or VPS for later, once you have done all available tutorials. This single tip will save you a lot of time: you don't need to add complexity before you learn how to handle the app, and the GUI performs best in a local installation.

# Usage

## 1. Run the Client and GUI

**A.** To run Superalgos, go to the Superalgos directory/folder and run this command:

```
node run
```

The Client will run on your terminal and the GUI will launch on your default browser. If Chrome/Safari is not your default browser, copy the URL, close the browser, open Chrome/Safari, and paste the URL. Be patient... it takes a few seconds to fully load the GUI.

A Welcome Tutorial pops-up automatically. You must do this Tutorial to finish the setup and to learn the basics. It's the ultimate onboarding experience, superior to all other resources available, including videos and the Docs.

![run-the-system-01](https://user-images.githubusercontent.com/13994516/107037804-e5fc6200-67bb-11eb-82f2-d0f40247fa14.gif)

If you are running a headless Raspberry Pi (one without a screen) you may need to change directories first and run Superalgos with the `minMemo` and `noBrowser` options.
```
cd Superalgos
```
then
```
node run minMemo noBrowser
```

In addition, you may use any of the automatically installed desktop and start menu shortcuts to launch Superalgos.

**NOTE:** Shortcuts are not currently supported on Mac. Collaborators are needed to finish this feature.

**B.** Enable Desktop Shortcut on Ubuntu

The majority of shortcuts that are automatically installed will work out of the box. Desktop shortcuts on Ubuntu, however, require a few additional steps to set up.

First, desktop icons need to be enabled within the Tweaks app.
* Check if Tweaks is installed.
* If not go to Ubuntu Software.
* Install Tweaks.
* Open Tweaks.
* Under extensions turn on Desktop Icons

![enable-ubuntu-shortcut](https://user-images.githubusercontent.com/55707292/117553927-f0780300-b019-11eb-9e36-46b509653283.gif)

**TIP:** If you do not see the desktop shortcut appear right away you may need to restart your computer.

Finally, you will need to enable the desktop shortcut.
* Right click Superalgos.desktop and select Allow Launching.

![allow-launching](https://user-images.githubusercontent.com/55707292/117553933-fcfc5b80-b019-11eb-872c-4fad81b184d2.gif)

Now both launcher and desktop shortcuts will launch Superalgos like any other program on your computer.

## 3. Usage Notes

We are testing the UI on Google Chrome and Safari on macOS only. It may work on other browsers as well &mdash; or not. If you are running on a different browser and ever need support, make sure you mention that fact upfront, or even better, try on Chrome/Safari first.

 **TIP:** If your computer has 8 GB of RAM or less, use ```node run minMemo``` to run the system with minimal RAM requirements.

# Running Superalgos on a Headless Linux Server as a Daemon

If you're running Superalgos on a headless linux server like a Raspberry Pi, you might want to run it as a daemon so it isn't attached to your current login session. The easiest, most standard way to go about this is probably using `systemd`. Most linux distributions use it as default init system/service manager.

## Using `systemd`

Create a `superalgos.service` file looking like this (change `<user>` to your user name and `/path/to/Superalgos` to your Superalgos folder, for instance `/home/John/Superalgos`):
```
[Unit]
Description=Superalgos client

[Service]
Type=simple
User=<user>
WorkingDirectory=/path/to/Superalgos
ExecStart=/usr/bin/node run minMemo noBrowser

[Install]
WantedBy=multi-user.target

```
There is no need to run Superalgos as root so we're running it as a user. The `minMemo` option assumes you're running on a small machine like a Raspberry Pi, while `noBrowser` makes sense for running daemonized.

Now, as root (or using `sudo`), put the file `superalgos.service` you just created in `/etc/systemd/system/` and issue the command
```
systemctl enable superalgos
```
This will install the service so that Superalgos is started on boot. To start it manually, do (again as root or with `sudo`)
```
systemctl start superalgos
```

To see the output of Superalgos, use
```
journalctl -u superalgos
```
or to follow the output,
```
journalctl -u superalgos -f
```

# Uninstall

Superalgos writes nothing outside of the ```Superalgos``` folder other than shortcut files. To uninstall the software, follow these steps:

Open a terminal or command prompt and navigate to your main Superalgos directory and type the following command:
```
node uninstall
```
This will remove any shortcut files that have been installed. 

Then simply delete the `Superalgos` folder. There will be nothing left on your computor.

# Welcome Tutorial

Once the app finishes loading, an interactive tutorial takes you by the hand and walks you all around the system while you learn the basic skills required to use the interface, mine data, backtest strategies, and even run a live trading session. It is highly recommended you follow the tutorial until the end, as it is carefully crafted to make your onboarding as easy as possible. Tutorials are the absolute best way to tackle the learning curve. You should do all tutorials before you start exploring other avenues on your own.

![welcome-tutorial-00](https://user-images.githubusercontent.com/13994516/107038771-4a6bf100-67bd-11eb-92e0-353525a972a9.gif)

 **NOTE:** The tutorial uses Binance or Binance US as the exchange of choice. If you don't have an account with Binance or Binance US, you will still be able to follow 100% of the tutorial. When you get to the live trading section, keep going even if you don't intend to run the session. You may learn how to work with other exchanges later on.

# Docker Deployments

Docker container images can be found at https://github.com/users/Superalgos/packages/container/package/superalgos

If you wish to run Superalgos over docker platform, follow these steps.

**Note:** This has not been extensively tested yet. If you run into troubles, please contact us at the [Superalgos Support Group](https://t.me/superalgossupport).

## 1. Install Docker

Follow the link to [install docker](https://docs.docker.com/engine/install/).

## 2. Run


### Option A. Using pre-built container

You will need to create local storage directories beforehand, by example with `mkdir Data-Storage Log-Files My-Workspaces`

```
docker run \
  -d \
  --rm \
  --name superalgos \
  -p 18041:18041 \
  -p 34248:34248 \
  -v $(pwd)/Data-Storage:/app/Data-Storage \
  -v $(pwd)/Log-Files:/app/Log-Files \
  -v $(pwd)/My-Workspaces:/app/My-Workspaces \
  ghcr.io/superalgos/superalgos:latest
```

Now you can access the Superalgos UI at http://127.0.0.1:34248

To see console logs you can use `docker logs superalgos -f`

When you're done just exec `docker kill superalgos`

### Option B. Build container locally using docker-compose

Follow the link to [install docker-compose](https://docs.docker.com/compose/install/)

Run `docker-compose -f Docker/docker-compose.yml up`.

## Configure the Container Environment

### Available image tags

To avoid breaking changes, the `shasum hash` and the `release` tags are the best to use. These will generally ensure you are always running the same code. The other tags will change which code they are pointing to more frequently and without notice.

- `latest` : the absolute latest build
- `master` : the latest master branch build
- `develop` : the latest develop branch build
- `<shasum hash>` : a specific git commit hash
- `<release>` : corresponds with a Github Release (git tag), i.e. `beta-10`

### Environment variables

`PUID` and `GUID` environment variables can be used to help avoid permissions issues in the mounted volumes between the container environment and the local OS environment. The default `PUID` and `GUID` is `1000`. You can view the current user's PUID and GUID with the `id` command.

## Troubleshooting

Some users have reported the Docker installation was not working, and the root cause was that the ad blocker was blocking the scripts to run.