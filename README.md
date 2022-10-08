# Team Profile Generator

![None](https://img.shields.io/badge/license-None-blue)
  
## Table of Contents
1. [Description](#description)
2. [Key Points](#key-points)
3. [Skills Used](#skills-used)
4. [Generator Visual](#profile-generator-visuals)
5. [Things To Work On](#things-i-want-to-work-on)
6. [Repository and Youtube Video](#links-to-repository-and-deployed-video)
  
## Description

A team profile generator for a software engineering team that displays summaries of each person.

## Key Points

When working as part of a team, especially in an environment dominated by computers it is important to be able to automate simple tasks. Doing so allows for better time management capabilities. In this case, forming a new team and quickly being able to take in employee information, and generate a usable html document accessable to entire team allows all involved to hit the ground running with included github profile and email address.

## Skills Used

Using the inquirer package, we run a command line application that asks the user questions so we can take in their relevant information.

As there is 3 roles within this team so by first asking the employee for their role by presenting them with a list, we can then use the 'when' function within inquirer to ask the unique question relevant only to what they do.

We then create an employee class that takes in all data from all common questions asked. Then we create the manager, engineer, and intern constructor classes that then take in office number, github profile, and school respectively.

A html template is created and styled with bootstrap that is the basis for pushing the user data to. Then with a seperate script to our node applicating we create a function to generate each individual card, and another function to loop through those cards and push them to what is now our finished team roster.

Node packages such as file system and path were imported for ease of use, functions and constuctor classes all required to be exported/imported to relevant documents where needed. 

Testing via jest is required to ensure each unit of the application is working as required. This allows us to fine tune our code when tests do not pass.

## Profile Generator Visuals

Using when function to ask questions as per role
![unique questions as per role](/src/images/inquirer-when.png)

Writing tests to verify constructor classes
![tests](/src/images/test.png)

HTML template to be filled
![template](/src/images/template.png)

Example of outputted HTML document
![outputted HTML](/src/images/generated-html.png)


## Things i want to work on

Things are really starting to ramp up and we are starting to build some apps with some complex file structures. I would like to spend some more time identifying what is the industry standard and how i should be laying out my structures from the get go.

After generating the last assignment via back ticks, and this assignment through a template, i'd definitely like to spend more time around getting comfortable exporting to a template. I personally feel it would be easier to make apps scalable that way.

Some time is needed arounded unit testing and understanding the syntax behind it to write more detailed tests to help refining code.

## Links to Repository and Deployed Video

- Repository - [Clarky's Repo](https://github.com/Clarky117/Team-Profile-Generator)
- Live Video - [Team Profile Generator](https://youtu.be/3YZ2iaGAK9I)
