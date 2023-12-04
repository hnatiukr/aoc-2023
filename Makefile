.PHONY: new run test print clean progress format

install:
	@make print TEXT="🛠 Installing dependencies...️ \n"
	@npm ci

progress:
	@make print TEXT="📈 Updating progress badge...️"
	@make format
	@node .github/badges/script.js
	@make print TEXT="👻 Badge has been updated️.\n"

run:
	@make print TEXT="📥 Compiling... \n"
	@make format
	@tsc day/$(day)/index.ts --module NodeNext --moduleResolution nodenext
	@make print TEXT="🙈 Printing result... \n"
	@node day/$(day)/index.js
	@make clean

test:
	@make print TEXT="📥 Compiling... \n"
	@make format
	@tsc day/$(day)/test.ts --module NodeNext --moduleResolution nodenext
	@make print TEXT="🔬 Running tests... \n"
	@node day/$(day)/test.js
	@make clean

new:
	@make print TEXT="🏗️ Preparing files for the day $(day)... \n"
	@sh ./make-templates.sh $(day)
	@make format
	@make print TEXT="⛄️ Files have been prepared. Good luck! \n"

clean:
	@make print TEXT="🧹 Cleaning up... \n"
	@tsc --build --clean

format:
	@npx prettier --write --log-level silent .

print:
	@echo "$(BLUE)> $(TEXT)$(NOCOLOR)"
