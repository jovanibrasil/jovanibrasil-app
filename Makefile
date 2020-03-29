install:
	npm install
start:
	npm start
build:
	npm build
test:
	npm test

generate-deployables:
	ng build --prod --base-href="https://jovanibrasil.github.io/jovanibrasil-app/"