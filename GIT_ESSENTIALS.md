# Git Essentials for Project Quack

This document contains all the commands that you will likely need for the scope of this project, along with a description of each.

In general, work on small additions to the project one at a time, creating a branch for each addition. For example, consider the workflow:

0. Make sure you have `git pull`ed the latest commit history from `main`.
1. Determine something (a feature, bug, or contained change) you will work on that will take you a reasonably small number of days to complete
2. Create a branch with the name `firstname-feature-title`
3. Work on the feature (with a series of `git add` and `git commit` executions as you make progress on the feature)
4. After your last commit (successful completion of the feature), push your branch onto the remote repository using `git push`
5. Message the chat that you have completed your feature, and we will take a look!
6. If we all are on board, one of us will merge the branch with main.
7. Start the process again!



## `git add *your_file_name*`

This adds the file, given by `*your_file_name*`, to the *staging area*, which is where you put files that you want to be committed. 

## `git status`

See which files are in the *staging area* at any given time.

## `git reset *your_file_name*`

Remove a file from the staging area.

## `git commit -m "a nice description"`

This command *commits* all the files in the *staging area* as a snapshot or checkpoint. 

## `git branch`

See all the branches that exist with a * next to the one you are currently on.

## `git branch *branch name*`

Create a new branch that branches off of the current commit. 

## `git checkout *branch name*`

Switch to a branch given by its name.

## `git merge *branch name*`

Merges the specified branch's history onto the current one, i.e. run this command while in the main branch to merge `*branch name*` into main. Don't run this one by yourself until we've talked about the changes and we want to integrate the feature

## `git push origin *branch name*`

Pushes the commit history into the origin (remote, i.e. Github repository) on the `*branch name*` branch. Use this command to backup your changes within a branch on GitHub.

## `git pull origin *branch name*`

Pulls the latest commit history of `*branch name*` **from** the origin onto the local machine.
