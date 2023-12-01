.PHONY: new test print

install:
	@make print TEXT="Installing dependencies 🛠️"
	@npm ci

test:
	@make print TEXT="Compiling 🏗️"
	@tsc day/$(day)/index.ts --module NodeNext --moduleResolution nodenext
	@make print TEXT="Printing result 🙈"
	@node day/$(day)/index.js
	@rm day/$(day)/index.js

new:
	@mkdir day/${day}
	@touch day/${day}/index.ts day/${day}/input.txt day/${day}/README.md

print:
	@echo "$(BLUE)> $(TEXT)$(NOCOLOR)"
