.PHONY: new debug test

install:
	npm ci

test:
	tsc day/$(day)/index.ts --module NodeNext --moduleResolution nodenext
	node day/$(day)/index.js
	rm day/$(day)/index.js

new:
	mkdir day/${day}
	touch day/${day}/index.ts day/${day}/input.txt day/${day}/README.md

debug:
	rm -rf debug
	mkdir debug
	npx tsc --module node16 --outDir debug day/$(day)/index.ts
	cp ./day/$(day)/input.txt ./debug/day/$(day)
	node debug/day/$(day)
	rm -rf debug
