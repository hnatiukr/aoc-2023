.PHONY: new run test print clean

install:
	@make print TEXT="Installing dependencies 🛠️"
	@npm ci

run:
	@make print TEXT="Compiling 🏗️"
	@tsc day/$(day)/index.ts --module NodeNext --moduleResolution nodenext
	@make print TEXT="Printing result 🙈"
	@node day/$(day)/index.js
	@make clean

test:
	@make print TEXT="Compiling 🏗️"
	@tsc day/$(day)/test.ts --module NodeNext --moduleResolution nodenext
	@make print TEXT="Running tests 🔬"
	@node day/$(day)/test.js
	@make clean

new:
	@mkdir day/${day}
	@touch day/${day}/index.ts day/${day}/input.txt day/${day}/README.md

clean:
	@find . -type f -name "*.js" -not -path "./node_modules/*" -delete

print:
	@echo "$(BLUE)> $(TEXT)$(NOCOLOR)"
