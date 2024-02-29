# Git Tricks

git branch | grep "bugfix" [List all the branch with the word bugfix] 

 git branch | grep "bugfix" | xargs git branch -D [Delete all the branch with the word bugfix]

Zapp will use the location in the background when you are online to provide you the delivery request nearby you and track the current status of the delivery

Rename

git branch -m <new_name>

git commit —ammend

git push -f/—force

git merge staging --ff-only

`git config --global core.excludesFile <filename>`

`git config --local core.excludesFile <filename>`

[https://stackoverflow.com/questions/45333484/how-to-use-global-gitignore-with-visual-studio-code](https://stackoverflow.com/questions/45333484/how-to-use-global-gitignore-with-visual-studio-code)

—> `git config --global --edit`

1. Open GitBash Terminal
2. Run `touch ~/.gitignore_global` to create a global .gitignore file in the home directory
3. Edit file in your home directory: ~/.gitignore_global
4. Add `.vscode/` and any other files or directories that you want to ignore and not include in project-specific .gitignore files;
5. Save file;
6. In GitBash run `git config --global core.excludesfile ~/.gitignore_global`
