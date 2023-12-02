.PHONY: new run test print clean progress

install:
	@make print TEXT="🛠 Installing dependencies...️ \n"
	@npm ci

progress:
	@make print TEXT="📈 Updating progress badge...️"
	@node .github/badges/script.js
	@make print TEXT="👻 Badge has been updated️.\n"

run:
	@make print TEXT="📥 Compiling... \n"
	@tsc day/$(day)/index.ts --module NodeNext --moduleResolution nodenext
	@make print TEXT="🙈 Printing result... \n"
	@node day/$(day)/index.js
	@make clean

test:
	@make print TEXT="📥 Compiling... \n"
	@tsc day/$(day)/test.ts --module NodeNext --moduleResolution nodenext
	@make print TEXT="🔬 Running tests... \n"
	@node day/$(day)/test.js
	@make clean

new:
	@make print TEXT="🏗️ Preparing files for the day $(day)... \n"
	@mkdir day/${day}
	@touch day/${day}/index.ts day/${day}/input.txt day/${day}/README.md
	@make print TEXT="⛄️ Files have beed created. Good luck! \n"

clean:
	@make print TEXT="🧹 Cleaning up... \n"
	@find . -type f -name "*.js" \
		-not -path "./node_modules/*" \
		-not -path "./.github/*" \
		-delete

print:
	@echo "$(BLUE)> $(TEXT)$(NOCOLOR)"
