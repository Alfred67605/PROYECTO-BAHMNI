---
id: "61997128"
title: "Change Date Format"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/61997128/change-date-format"
version: 5
updated: "2017-02-14T06:23:33.643Z"
author: "teresa gracias"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:25.872Z"
---

# Change Date Format

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/61997128)  
> **Versión del documento:** v5 (2017-02-14T06:23:33.643Z) | **Autor/Editor:** teresa gracias

---

## Purpose

When you *select* dates in the Bahmni system, this uses the browser's native date picker.

For example using Google Chrome on a Mac set to the US locale it will look like this:

![](https://bahmni.atlassian.net/wiki/download/attachments/61997128/image2016-5-23%205:27:37.png?version=1&modificationDate=1464006458091&cacheVersion=1&api=v2)

The date format of this date picker is controlled by the user's operating system's Language/Region setting, and if you want to change this, you do so in your computer's operating system settings. (This cannot be controlled globally for all usage of the system, so If an administrator wants this to be consistent for all Bahmni users, it must be set on each individual computer at the implementation.)

## Changing the setting based on your operating system

- 
### **Windows 7**

**
****                        ****Step 1:**   Open Region and Language by clicking the Start button ![](http://res2.windows.microsoft.com/resbox/en/windows%207/main/4f6cbd09-148c-4dd8-b1f2-48f232a2fd33_818.jpg), clicking **Control Panel**, clicking **Clock, Language, and Region**, and then clicking **Region and Language**.
                                                                                                  ![](https://bahmni.atlassian.net/wiki/download/attachments/61997128/Date%20format1.png?version=1&modificationDate=1463999468823&cacheVersion=1&api=v2)

                        **Step 2:** Click the **Formats** tab, and then, in the Format list, select the locale to use for the display of the date, time, currency, and measurements.

                                                                                                  ![](https://bahmni.atlassian.net/wiki/download/attachments/61997128/Dateformat2.png?version=1&modificationDate=1463999468789&cacheVersion=1&api=v2)

**                      Step 3:** Select the date and time formats that you want to use.

- 
### **Mac**

Choose *Apple menu > System Preferences*, then click *Language & Region*.

- 
Choose a geographic region from the Region pop-up menu, to use the region&rsquo;s date, time, number, and currency formats.

- 
To customize the formats or change the language used to display them, click Advanced, then set options.
In the General pane, you can choose the language to use for showing dates, times, and numbers, and set formats for numbers, currency, and measurements.

In the Dates and Times panes, you can type in the Short, Medium, Long, and Full fields, and rearrange or delete elements. You can also drag new elements, such as Quarter or Milliseconds, into the fields. If you&rsquo;re not using a 24-hour clock, you can replace AM and PM with whatever you type in those fields.

- 
Then you&rsquo;re done customizing formats, click OK.

On this Page
