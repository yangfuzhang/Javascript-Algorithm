#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

git add -A
git commit -m 'project-updated'

git push -f origin master
