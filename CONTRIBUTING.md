# Contributing to Quokka

Welcome! We appreciate your interest in making Quokka better.

Before continuing please read our [code of conduct][code-of-conduct] which all
contributors are expected to adhere to.

[code-of-conduct]: https://faeq-f.github.io/Quokka/conduct


## Contributing bug reports

If you have found a bug in Quokka please check to see if there is an open
ticket for this problem on [our kanban board][issues]. If you cannot
find an existing ticket for the bug please open a new one.

[issues]: https://faeq-f.github.io/Quokka/kanban

A bug may be a technical problem such as a crash or an incorrect
value from a query, or a user experience issue such as
unclear or absent documentation. If you are unsure if your problem is a bug
please open a ticket and we will work it out together.

## Contributing code changes

Before working on code it is suggested that you read the ['under the hood'][under-hood] docs.
It outlines the fundamental components and design of this project.

[under-hood]: https://faeq-f.github.io/Quokka/documentation?section=under-hood

To maintain consistency, please adhere to [conventional branch names][conventional-branch],
 [conventional commit messages][conventional-commit], including [gitmoji][gitmoji] [(emojis)][gitmoji-site],
  and the solution [\`.editorconfig\`][editor-config-file] settings.

[conventional-branch]: https://conventional-branch.github.io/

[conventional-commit]: https://www.conventionalcommits.org/

[gitmoji]: https://github.com/carloscuesta/gitmoji/blob/master/README.md

[gitmoji-site]: https://gitmoji.dev/

[editor-config-file]: https://github.com/Faeq-F/Quokka/blob/main/.editorconfig

---

Code changes to Quokka are welcomed via the process below.

1. Find or open a ticket relevant to the change you wish to make and
   comment saying that you wish to work on this change.

   If the change introduces new functionality or behaviour this would be a good
   time to discuss the details of the change to ensure we are in agreement as to
   how the new functionality should work.

3. Open a GitHub pull request with your changes.

4. A Quokka team member will review the changes and may provide feedback to
   work on. Depending on the change there may be multiple rounds of feedback.

5. Once the changes have been approved the code will be merged into the
   main branch.

6. Update the [Changelog.md](changelog) file with your changes.

[changelog]: https://faeq-f.github.io/Quokka/changelog

## Attribution

These guidelines are adapted from the [Gleam contributing guidelines](https://github.com/gleam-lang/gleam/blob/main/CONTRIBUTING.md).