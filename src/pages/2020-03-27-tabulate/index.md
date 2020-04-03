---
path: "/tabulate"
date: "2020-03-27"
title: "Tabulate"
author: "Sergio Garcia"
---

During the first few days of the COVID-19 quarantine, my friend Jeremy Tsai and I brainstormed ways we could be productive in the time we spent at home. One of the first ideas we had was to make a google chrome extension that managed tabs and saved window sessions. 

We came up with a list of features to work on. We wanted users to be able to save sessions, and tabs. We wanted users to to have edit and delete options. We also wanted users to have control on certain behaviors of the extension. The extension uses the the tabs api to get the information needed and the Chrome storage api to store the saved sessions. We use basic Javascript DOM manipulation to update the UI. We didn’t want to add any third party libraries for this small project to reduce bundle size.

I learned a lot during this project. I was tasked with designing the UI/UX of the extension. I used Adobe XD to prototype some ideas, because in the beginning, all we had was a skeleton and this is how it looked:

<img src="https://sergioportfolio.blob.core.windows.net/portfolioimages/Tabulate Error.jpeg" 
    style="
        width: 300px;
        height: 300px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    "/>

Due to the fact that we were working remotely, we decided to take an Agile approach to improve productivity. One hurdle we ran into, was about our devices. He was on Windows 10, and I was on MacOS. This meant that our default scroll bars were different, and some text rendering was slightly different was well. So I would make changes to the UI and on my end, it looked fine, but on his end it looked slightly different. 

Luckily I have parallels running on my laptop, which means that I could test the extension on both platforms without needing to push changes and ask my friend how they looked. One of my favorite things to do, is to make things look cohesive and intuitive. This was my first project that I was going to release out to the world, so I wanted to make sure that it looked good. That being said, I did learn a lot about collaborating through GitHub and writing code with meaningful comments.

This whole project took one week to finish and to push to the chrome store. Even after we released it, I learned that the bugs don’t stop coming. Users of the extension have been messaging us about future implementations to add going forward. This experience taught me that simple widgets are still fun to build and use.

Working on this project was exciting and fun in the short time span that we had. One thing I would do differently, is implement a bug tracking system in our workflow. There were times that we had people mentioning bugs to us, and we would kind of lose track of the list of things to fix. We had a shared google doc, but we could have worked on more organization when pushing following updates.

<!-- <img src="https://sergioportfolio.blob.core.windows.net/portfolioimages/Tabulate Error.jpeg" 
    style="
        width: 300px;
        height: 300px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        -webkit-transform:rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    "/> -->