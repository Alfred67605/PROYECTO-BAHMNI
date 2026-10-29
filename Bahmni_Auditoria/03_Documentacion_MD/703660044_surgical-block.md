---
id: "703660044"
title: "Surgical Block"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/703660044/surgical-block"
version: 3
updated: "2021-04-06T09:07:02.992Z"
author: "Gurpreet Luthra"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:29.452Z"
---

# Surgical Block

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/703660044)  
> **Versión del documento:** v3 (2021-04-06T09:07:02.992Z) | **Autor/Editor:** Gurpreet Luthra

---

## **Introduction to Surgical Blocks**

Surgical blocks is the time that is blocked based on the surgeries to be performed and some is left open, or unused block time is released at an agreed-upon time before surgery and allotted to another Surgeon.

## **Creating a surgical block**

For a user to be able to create a new block, user must navigate to **Operation Theatre App → OT Scheduling → New Surgical block**

To be able to create a surgical appointment a user must first create a block. A block is created against a Surgeon. The mandatory fields while creating a block are:

- Surgeon
- Location
- Start Date-Time
- Start End-Time

**Surgeons** is a list of surgeon names that comes from the OT config

**Locations** is a list of locations in openMRS that are tagged with operation theatre

**Start Date-Time** and **Start End-Time** are fields that you have to enter to be able to block that time for the surgeon against that location. 

**Validations***:*

- A surgeon cannot have overlapping blocks across OTs
- OT can have multiple blocks but only one block is allowed at a point of time in an OT

***Sample OT Blocks for Surgeons across three Operating Theatres:***

| Time | OT1 | OT2 | OT3 |
| --- | --- | --- | --- |
| 8am | Surgeon1 | Surgeon4 | Surgeon5 |
| 9am | Surgeon2 | ** | Surgeon1 |
| 10am | Surgeon3 |  |  |

In the above example, Surgeon 1 cannot be blocked for OT2 & OT3 from 8am to 9am, since he/she is blocked for OT1 during that time. But surgeon 1 can be blocked for OT3 from 9am to 11am.

![](https://bahmni.atlassian.net/wiki/download/attachments/703660044/Screen%20Shot%202018-08-19%20at%2010.24.20%20PM.png?version=1&modificationDate=1534697680456&cacheVersion=1&api=v2)

## **Edit, Cancel or Postpone Blocks**

A user can perform the below actions on a block

- **Edit Block: (*All the fields in the block are editable)***

- *A user can edit blocks from calendar view only*
- To be able to add surgeries in a block that has already been created a user must **edit** the block 
- A user needs to click on a block in the calendar view and a pop-up will show block details with Edit button (see screenshot below).
- Upon clicking on edit, user will be taken to edit surgical block page where users can see surgeries associated with the block.

**![](https://bahmni.atlassian.net/wiki/download/attachments/703660044/Edit%20Surgical%20Block.png?version=1&modificationDate=1617699263308&cacheVersion=1&api=v2)**

**Edit/Cancel Surgery Block (on click of block)**

- **Cancel Block:**

- A user can cancel a block from calendar view 
- A user can also cancel a block from “edit surgical block” view
- A user needs to click on a block in the calendar view and the pop-up will show block details with an Edit or **Cancel Block** button.
- When cancel is selected, there is a pop up that asks if a user wants to cancel the block or postpone it.
- User has to click on cancel, select “Cancel block” and enter a reason in order to cancel the block
- If a block has a “completed” surgery, a user will not be able to cancel the block
- When a block is cancelled, all its surgeries are also cancelled
- Once a block is cancelled, the block will not appear in the calendar view

- **Postpone Block: **

- A user can postpone a block from calendar view 
- A user can also postpone a block from “edit surgical block” view
- A user needs to select a block in the calendar view and the **cancel** button on the left bottom will enable 
- User has to click on cancel, select “Postpone block” and enter a reason  in order to postpone the block
- If a block has a “completed” surgery, a user will not be able to postpone the block
- Once a block is postponed, all its surgeries are also postponed
- Once a block is postponed, the block will not appear in the calendar view

**Note**: In order to reschedule the postponed surgeries of the block, a user will have to create a new surgery for the patient.

![](https://bahmni.atlassian.net/wiki/download/attachments/703660044/Screen%20Shot%202018-08-19%20at%2010.39.56%20PM.png?version=1&modificationDate=1534698637232&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/703660044/Screen%20Shot%202018-08-19%20at%2010.39.44%20PM.png?version=1&modificationDate=1534698635236&cacheVersion=1&api=v2)

**Actions that can be performed on blocks:**

| Block Type | Edit | Postpone | Cancel |
| --- | --- | --- | --- |
| Surgical Block (with **pending** surgeries) | Yes | Yes | Yes |
| Surgical Block (with **completed** surgeries) | Yes | No | No |

On this page**
