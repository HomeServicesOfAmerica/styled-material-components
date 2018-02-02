#!/bin/bash

main () {
  local root="$(git rev-parse --show-toplevel)"
  local hook=$root/.git/hooks/post-commit

  # Check if the author is already listed
  if grep -m 1 "$GIT_AUTHOR_EMAIL" $root/AUTHORS; then
    exit 0
  else
    echo "adding you to authors"
    
    # add current commiter to AUTHORS file
    echo " $GIT_AUTHOR_NAME <$GIT_AUTHOR_EMAIL>" >> $root/AUTHORS;

    # disable post-commit hook temporarily
    # to avoid recursively calling post-commit
    chmod -x $hook
    # commit AUTHORS
    git add $root/AUTHORS
    git commit --amend --no-edit --no-verify --quiet

    # re-enable post-commit for the next commit
    chmod +x $hook
    exit 0
  fi
}

main
