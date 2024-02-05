---
sidebar_position: 1
---

# Git Essentials

Basic Git Commands

## Initialize a repo

```
git init
```

## Add changes

```
# add all the changes
git add .

# add a particular file
git add <file_relative_path>
```

## Commit changes

```
git commit -m "commit message"

git commit -m <title> -m <description>
```

## Status

```
git status
```

## Branch

```
# creates a new branch and moves to it
git checkout -b <branch-name>

# move staged changes to a different branch
git switch -c <new-branch-name>

# delete a branch
git branch -d <branch-name>
```

## Reset / Undo local commits

```
git reset HEAD~
```

## Remote

```
# add a remote URL
git remote add <REMOTE_ALIAS> <REMOTE_URL>

# replace current remote url
git remote set-url <REMOTE_ALIAS> <UPDATED_REMOTE_URL>

# REMOTE_ALIAS is typically origin, you can find by using:

git remote
```
