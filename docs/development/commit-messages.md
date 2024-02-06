---
sidebar_position: 2
slug: /commit-messages
---

# Commit Messages

Commit messages are the post-it notes of coding – concise and clear. Clear commit messages keep our project history tidy and understandable! 🌱💬🔍

<div class="theme-admonition theme-admonition-tip admonition_o5H7 alert alert--success">🧐 Getting started with Git? Here's the <u>[Git Handbook](https://docs.github.com/en/get-started/using-git/about-git)</u>.</div>

## Writing a commit message

```
git commit -m <message>
```

```
git commit -m <title> -m <description>
```

## Quick Notes

1. **Atomic commits:** Code changes should be reasonably small and atomic.
2. Use _Active Voice_ when writing commit messages.
3. Keep the commit messages **short and unambiguous**.

## Conventional Commits

Conventional Commit is a formatting convention that provides a set of rules to formulate a consistent commit message structure like so:

```
<type> [optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit **_type_** can include the following:

- <code>feat</code> – a new feature is introduced with the changes
- <code>fix</code> – a bug fix has occurred
- <code>chore</code> – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
- <code>refactor</code> – refactored code that neither fixes a bug nor adds a feature
- <code>docs</code> – updates to documentation such as a the README or other markdown files
- <code>style</code> – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
- <code>test</code> – including new or correcting previous tests
- <code>perf</code> – performance improvements
- <code>ci</code> – continuous integration related
- <code>build</code> – changes that affect the build system or external dependencies
- <code>revert</code> – reverts a previous commit

Example:

```
fix: fix foo to enable bar

This fixes the broken behavior of the component by doing xyz.

BREAKING CHANGE
Before this fix foo wasn't enabled at all, behavior changes from <old> to <new>

Closes D2IQ-12345
```

**references:**

- 🔗 https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/
