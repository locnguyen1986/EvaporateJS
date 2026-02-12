.PHONY: test install clean lint lint-fix

test: install
	npx ava -v test/*.spec.js

install:
	npm install

clean:
	rm -rf node_modules

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .