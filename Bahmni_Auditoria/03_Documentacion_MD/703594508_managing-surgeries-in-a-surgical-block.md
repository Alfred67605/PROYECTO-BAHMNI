---
id: "703594508"
title: "Managing Surgeries in a Surgical Block"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/703594508/managing-surgeries-in-a-surgical-block"
version: 5
updated: "2021-04-06T10:08:50.282Z"
author: "Gurpreet Luthra"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:30.666Z"
---

# Managing Surgeries in a Surgical Block

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/703594508)  
> **Versión del documento:** v5 (2021-04-06T10:08:50.282Z) | **Autor/Editor:** Gurpreet Luthra

---

## **Adding a surgery appointment within a block:**

After creating a surgical block a user can add multiple surgeries to the block. User can create surgeries for patients. Below are fields that a user can provide to create an surgery

| Field | Description | Mandatory | Default |
| --- | --- | --- | --- |
| Patient | Auto complete field searchable by patient ID or Name | Yes | None |
| Procedures | The list of Procedures to be performed on the patient | No | When a patient is selected: If surgeon pre-op or follow up form is filled, this information is pulled from the latest form If no form has been filled then the field will be blank |
| Est Time | The Estimated duration of the surgery | No | When a patient is selected: If surgeon pre-op or follow up form is filled, this information is pulled from the latest form If no form has been filled then the field will be blank |
| Cleaning time | The Cleaning time needed post surgery | No | 15 mins |
| Other Surgeon | Drop down list of configured surgeons | No | None |
| Surgical Assistant | Free text field | No | None |
| Anaesthetist | Free text field | No | None |
| Scrub Nurse | Free text field | No | None |
| Circulating Nurse | Free text field | No | None |
| Notes | Free text field | No | None |

After adding the desired surgeries user will have to click on **Save** to save the added surgeries in a block. Until save is clicked, the data added will be light in color (represents unsaved data). There is a timer that shows “*Remaining block duration*” that will update every time you add a surgery.

**Validations:**

The Total time(Est time + Cleaning time) of the surgeries cannot exceed the total blocked time. A patient cannot have multiple surgeries in different overlapping blocks. 

Example, Block 1 (10am to 7pm, 1st Jul) Block 2(10am to 5pm, 1st Jul). Patient x can have an surgery in only one of the blocks

                            ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2010.53.25%20PM.png?version=1&modificationDate=1534699423601&cacheVersion=1&api=v2)

## **Rearranging surgeries in a block:**

When a user adds more than one surgery in a block, the user can rearrange the surgeries in a block by dragging and dropping the surgeries. After rearranging the surgery user needs to click on **Save** to save the changes.

                          ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2010.54.48%20PM.png?version=1&modificationDate=1534699502021&cacheVersion=1&api=v2)

**Validations:**  The surgery can only be dropped in the surgery section. 

***Note**: *There is no indication currently to show unsaved rearrangement. User has to click on **Save** to save changes

## **Calendar view of the surgeries by the day:**

- Calendar view is the default view a user sees when clicked on “OT Scheduling”. The calendar view shows surgical blocks with surgeries. The calendar view only shows scheduled and completed surgeries. Cancelled and postponed blocks and surgeries are not available on calendar view. 
- Each surgery in the calendar view has the following information displayed:

- Patient Name & Patient ID
- Estimated time of the surgery
- Procedures
- Anaesthetist
- Notes
- Actual time, if any

- In Calendar view, users can navigate by days (forward and backward). When user clicks on today, current day view is shown. There is a date displayed to indicate the day the user is viewing. 
- Current time is highlighted by a red line on the calendar
- There is an arrow against each surgery to expand the surgery for more information.The Surgeon name appears in the end of the block.
- A user can “add actual time”, “edit” and “cancel” a surgery from calendar view. A completed surgery has a tick mark against it in the calendar view. We will learn about these features in detail in their respective sections.
-  
From V0.93 onwards, only Patient Name, ID & Location are shown in calendar week-view. One needs to click on a block/appointment to see more details (or hover the mouse). If one is seeing the *day* view in Calendar, then the details will be visible on the block itself.

                              ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2010.56.57%20PM.png?version=1&modificationDate=1534699633405&cacheVersion=1&api=v2)

**Validations and constraints:**

- The time on Y axis of the calendar is configurable but a user can schedule blocks beyond the configured time. When that happens the blocks will overflow from the calendar indicating the overflow. In order to see the details of the surgeries or the blocks, user will have to change the configuration.

                            ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2010.59.13%20PM.png?version=1&modificationDate=1534699768022&cacheVersion=1&api=v2)

- Each Surgeon is associated with a color and the colors are configurable.

### **Calendar Color Configuration:**

The calendar view of the Operation Theatre module supports a color to be configured against a surgeon. **0 **(default color)** to 359** is the recommended configuration values and below are the steps to configure the color

- Go to Openmrs → Administration → Manage Providers
- Search for a provider by typing the provider name in “Find by name or ID”
- Click on the Provider name displayed as result of your search
- Enter any of the above recommended configuration values for the attribute "**otCalendarColor**" 

      ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/otCalendarColor%20attribute%20(for%20provider).png?version=1&modificationDate=1617703629047&cacheVersion=1&api=v2)

## **List view of the surgeries by the day and the week:**

- There is an option to choose list view on the screen. The default list view will be the day on the calendar view the user is navigating from. When week view is selected after navigating to list view, it displays the current week surgeries (Sunday to Saturday).
- The List view shows all surgeries by default (Scheduled,Completed,Cancelled & Postponed). However, if a filter was applied on the calendar view, the list view adapts the filter too when navigated.  
- The list view also provides the user the ability to navigate days/weeks forward and backward. When clicked on Today/This week the user is taken to the current day or the current week, depending on the view the user is on.
- In a week view, current day's’ surgeries are highlighted with a gray background
- A user can “add actual time”, “edit” and “cancel” a surgery from calendar view. We will learn about these features in detail in their respective sections.

The list view,both day and week, surgeries will comprise of the following information:

| **Field** | **Description** |
| --- | --- |
| Date | Date of Surgery |
| Identifier | Patient Identifier |
| Patient Name | Name of the patient |
| Start time | Start time of the surgery calculated by estimated time and placement of surgery in block |
| Est Time | Estimated duration of the surgery + cleaning time |
| Actual Time | Actual time, if added any |
| OT# | The OT the surgery was scheduled in |
| Procedure(s) | List of procedures in the surgery |
| Notes | Notes captured as a part of surgery |
| Surgeon | Surgeon name the the surgery was scheduled with |
| Other Surgeon | Other surgeon selected from the drop down while adding surgery |
| Surgical Assistant | Surgical assistant entered during the addition of surgery |
| Anaesthetist | Anaesthetists entered during the addition of surgery |
| Scrub Nurse | Scrub Nurse entered during the addition of surgery |
| Circulating Nurse | Circulating Nurse entered during the addition of surgery |
| Status | The current status of the surgery |
| Status Change Notes | If the status has been changed, the notes added will appear here |

                     ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2011.01.32%20PM.png?version=1&modificationDate=1534699915654&cacheVersion=1&api=v2)

## **Ability to print list view:**

Users will be able to print the list view by clicking on the print button beside the list view button. The print version will only print specific columns of the table. The columns to print are configurable and they can be found in the configuration document [**here**](https://docs.google.com/document/d/1R3D6lpGIokX5cRXlaszVtcSdNJibGj2ccnYhPnoWmiM/edit)**.**

Currently, the configured columns are: *Date, Identifier, Patient Name, Start time, Est time, Procedure(s), Surgeon, Status.*

*                     ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2011.03.51%20PM.png?version=1&modificationDate=1534700048736&cacheVersion=1&api=v2)*

## **Ability to move surgeries from one block to another:**

In Calendar view/List View there is a button called “Move”. On click of move, there will be a pop up where user needs to entered the desired date, surgeon name and available block time to move the selected patient. The destination block drop down will only show those blocks that can accommodate this surgery.  If there are blocks free, “No free time slots available for the selected date” error is shown. In this case, the user is expected to create a block and then try to move the surgery.

**Note**: Movement of surgeries across blocks is not tracked.

                       ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2011.05.41%20PM.png?version=1&modificationDate=1534700156497&cacheVersion=1&api=v2)

                       ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2011.06.27%20PM.png?version=1&modificationDate=1534700204631&cacheVersion=1&api=v2)

## **Filter Functionality for both list and calendar view:**

There is a filter on the left side of the page on OT. it is available for both calendar view and list view. A user will be able to filter based on the following:

| OT | User can select **multiple** OTs |
| --- | --- |
| Surgeon | User can filter on **multiple** surgeons |
| Patient | User can select only **one** patient |
| Status | User can select **multiple** statuses |

After adding the filter a user has to click on apply filter. “Clear” button clears the filter and switches to default view.

**Validations and constraints: **The filters for each option are interrelated, For example: If a user selects a surgeon and a patient the combination of the surgeon and patient is filtered.

                      ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2011.09.51%20PM.png?version=1&modificationDate=1534700434035&cacheVersion=1&api=v2)

                                                                             **Calendar View Filter**

                     ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2011.09.41%20PM.png?version=1&modificationDate=1534700432595&cacheVersion=1&api=v2)

                                                                                   **List View Filter**

## **Ability to add “actual time” to an surgery to be able to compare est time vs actual time:**

There is a provision for the users to be able to add “actual time” against a surgery on the bottom left. Actual time represents that the surgery has been completed and it may vary from estimated time given during the addition of the surgery.

A user can add actual time from list and calendar view. To be able to add an actual time user must select a surgery.By default the actual start and end time with populate based on the placement of surgery in a block and its estimated time.

Example: Block A has been blocked from 10am to 5pm

| Surgery for Patient | Estimated time + Cleaning time | Default actual time |
| --- | --- | --- |
| Patient X | 2 hrs 15 mins + 15 mins | 10am to 12:30 pm |
| Patient Y | 1 hr 30 mins + 15 mins | 12:30pm to 2:15 pm |
| Patient Z | 30 mins + 15 mins | 2:15pm to 3:00pm |

**Note: **The actual time includes the cleaning time as well

**Validations and constraints:**

- Once an actual time is entered the surgery status changes to “completed” and a tick mark appears on the surgery in the calendar view
- A user can add actual times to only scheduled and completed surgeries
- A user can remove actual time for a surgery and the surgery goes back to “Scheduled” status
- A user cannot add actual time to postponed or cancelled surgeries
- A user can enter actual time multiple times but only the latest entered value is considered.

                                         ![](https://bahmni.atlassian.net/wiki/download/attachments/703594508/Screen%20Shot%202018-08-19%20at%2011.14.18%20PM.png?version=1&modificationDate=1534700675303&cacheVersion=1&api=v2)

## **Edit, Cancel or Postpone Surgery:**

A user can perform the below actions on a surgery. 

- **Edit Surgery:**

- *A *user can edit surgeries from calendar view and list view
- A user can also edit surgeries from “Edit surgical block” view
- A user needs to select a surgery and the edit button on the left bottom will enable
- Upon clicking on edit, user will be taken to edit surgical block page where selected

**Note**:All the fields in the surgery are editable except the patient details, In edit mode the Patient name (ID) will become a hyperlink that will navigate the user to the patient summary dashboard

- **Cancel Surgery:**

- A user can cancel a surgery from calendar view and list view
- A user can also cancel a surgery from “edit surgical block” view
- A user needs to select a surgery in the calendar view and the cancel button on the left bottom will enable
- When cancel is selected, there is a pop up that asks if a user wants to cancel the surgery or postpone it.
- User has to click on cancel, select “Cancel Surgery” and enter a reason in order to cancel the surgery
- If the surgery is “completed”, a user will not be able to cancel the surgery

- **Postpone Block:**

- A user can postpone a surgery from calendar view 
- A user can also postpone a surgery from “edit surgical block” view
- A user needs to select a surgery in the calendar view and the **cancel** button on the left bottom will enable
- User has to click on cancel, select “Postpone surgery” and enter a reason  in order to postpone the surgery
- If a surgery is “completed”, a user will not be able to postpone the surgery

***Note**: *In order to reschedule the postponed surgeries, a user will have to create a new surgery for the patient.

**Actions that can be performed on a surgery:**

| Surgery Status | Edit | Postpone | Cancel |
| --- | --- | --- | --- |
| Scheduled | Yes | Yes | Yes |
| Completed | Yes | No | No |
| Postponed | No | No | No |
| Cancelled | No | No | No |

**                                    **

On this page
