.PHONY: new run test print clean

install:
	@make print TEXT="🛠 Installing dependencies...️ \n"
	@npm ci

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
	@find . -type f -name "*.js" -not -path "./node_modules/*" -delete

print:
	@echo "$(BLUE)> $(TEXT)$(NOCOLOR)"
