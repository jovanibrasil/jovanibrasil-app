install:
	npm install
start:
	npm start
build:
	npm build
test:
	npm test

generate-deployables:
	ng build --prod --build-optimizer --configuration=production --base-href="https://jovanibrasil.github.io/jovanibrasil-app/"